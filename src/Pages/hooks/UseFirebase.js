import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.int";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";




initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [islogin, setIslogin] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, provider)

            .finally(() => setIsLoading(false))

    }
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log("ok", user);
                setUser(user)
            }
            setIsLoading(false)
        })
    }, [])

    const toggleLogin = (e) => {
        console.log(e.target.value);
        setIslogin(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);

    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);

    }
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleRegistration = (e) => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError(' Password should be at least 6 characters ')
            return
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password should be at least 2 uppercase letters.')
            return;
        }
        islogin ? processLogin(email, password) : registerNewUser(email, password)
    }
    const processLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const registerNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                updateName()
                console.log(user);
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })


    }
    const updateName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        }).catch((error) => {

        });
    }


    return {
        user,
        error,
        islogin,
        isLoading,
        signInUsingGoogle,
        logOut,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        toggleLogin,
        handleNameChange,
        processLogin,
        registerNewUser
    }
}
export default useFirebase;
