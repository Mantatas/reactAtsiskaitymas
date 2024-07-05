import firebase from "../firebase";

export const getUserData = (user, setUser) => {
    try{
        firebase
        .firestore()
        .collection('users')
        .where('uid', '==', user?.uid)
        .get()
        .then((userData) => {setUser(userData.docs[0].data())})
    } catch(error){
        console.log('this is from userservices', error);
    }
}