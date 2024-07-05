import firebase from "../firebase";
import { app } from "../firebase";
import 'firebase/compat/auth';

const auth = app.auth();
const database = app.firestore();

const regWithEmailAndPassword = async(name, email, password) => {
    try{
        const res = await auth.createUserWithEmailAndPassword(email, password);
        const user = res.user;
        await database.collection('users').add({
            uid: user.uid,
            name,
            email
        })
    } catch(error){
        console.log('this is from regwithemailandpassword', error)
    }
}

const login = async (email, password) => {
    try{
        await auth.signInWithEmailAndPassword(email, password);
    } catch(error) {
        console.log('this is from signinwithemailandpassword', error)
    }
}

const logout = () => {
    auth.signOut()
}

export {auth, database, regWithEmailAndPassword, login, logout}