import {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from '../firebase/firebaseConfig'

export const registerUser = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        return userCredential.user;
    } catch (error) {
        console.error("Error registrando usuario", error);
        throw error;
    }
};

export const loginUser = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        return userCredential.user;
    } catch (error) {
        console.error("Error logueando usuario", error);
        throw error;
    }
}

export const logoutUser = async () => {
    try{
        await signOut(auth);
    } catch (error) {
        console.error("Error cerrando la sesion del usuario", error);
        throw error;
    }
}
