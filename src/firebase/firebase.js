import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from './config'

class Firebase {
    constructor(){
        app.initializeApp(firebaseConfig);
        this.auth = app.auth()
        this.db = app.firestore()
    }

    async register(name, email, password, nameTitle){
        const newUser = await this.auth.createUserWithEmailAndPassword(
            email, password
        )

        const newAccount = {
            namtTitle: nameTitle,
            name: name,
            profileImg: "",
            created: Date.now(),
            emailList: 0,
            verified: true,
            emails: [],
            comments: [],
        }
        firebase.db.collection('accounts').add(newAccount)

        return await newUser.user.updateProfile({
            displayName: name,
            nameTitle: nameTitle
        })
    }

    async login(email, password){
        return await this.auth.signInWithEmailAndPassword(email, password)
    }

    async logout(){
        await this.auth.signOut()
    }

    async resetPassword(email){
        await this.auth.sendPasswordResetEmail(email)
    }
}

const firebase = new Firebase()

export default firebase;