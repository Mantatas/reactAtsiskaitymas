import firebase from "../firebase"

export const addPictures = (data) => {
    firebase
    .firestore()
    .collection('pictures')
    .add(data)
}

export const deletePictures = (id) => {
    firebase
    .firestore()
    .collection('pictures')
    .doc(id)
    .delete()
}

export const getAllPictures = (onWorksChanged, user) => {
    firebase
    .firestore()
    .collection('pictures')
    .where("uid","==",user?.uid)
    .onSnapshot((snapshot)=>{
        const newPic = snapshot.docs.map((doc)=>({
            id:doc.id,
            ...doc.data()
        }))
        onWorksChanged(newPic)

    })
}