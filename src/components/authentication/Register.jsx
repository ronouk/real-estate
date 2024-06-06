import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { FaGoogle, FaRegEye } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import app from "../../firebase/firebase.init";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaRegEyeSlash } from "react-icons/fa";

const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const auth = getAuth(app);

    const { createUser } = useContext(AuthContext)

    //email password authetication

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoUrl = form.get('photoUrl');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photoUrl, email, password);

        //reset status message
        setRegisterError('')
        setSuccess('')

        if (password.length < 6) {
            setRegisterError("Password should have at least 6 characters");
            return
        }

        else if (!/^(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
            setRegisterError("Password must have at least an uppercase and a lowercase character");
            return
        }

        //create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('Registration Successfull')
            })
            .catch(error => {
                console.log(error.message)
                setRegisterError(error.message);
            })
    }

    //third party authentication

    //google login
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {

        //reset status message
        setRegisterError('')
        setSuccess('')

        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user.photoURL)
            })
            .catch(error => {
                console.log(error)
                setRegisterError(error.message);
            })
    }

    //github login
    const githubProvider = new GithubAuthProvider();
    const handleGithubSignIn = () => {

        //reset status message
        setRegisterError('')
        setSuccess('')

        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
                setRegisterError(error.message);
            })
    }

    return (
        <div className="w-11/12 lg:w-3/4 mx-auto mb-12">
            <Helmet>
                <title>LRE | Register</title>
            </Helmet>

            <div>
                <div className="">
                    <div className="flex flex-col items-center gap-6">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">Register now!</h1>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm border border-yellow-500">
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Your email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="url" name="photoUrl" placeholder="Profile photo link" className="input input-bordered" required />
                                </div>

                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                        required />
                                    <span onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-[52px]">
                                        {
                                            showPassword ?
                                            <FaRegEye /> : <FaRegEyeSlash />
                                        }
                                    </span>
                                </div>

                                <div className="form-control my-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>

                                <div className="flex items-center">
                                    <p className="font-semibold">Register with:</p>
                                    <div className="flex gap-4">
                                        <p onClick={handleGoogleSignIn} className="cursor-pointer text-xl hover:text-[#4081EC] transition">
                                            <FaGoogle />
                                        </p>
                                        <p onClick={handleGithubSignIn} className="cursor-pointer text-xl">
                                            <FaGithub />
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 text-center font-semibold">
                                    <p>Already an user?<Link to='/login' className="ml-2 underline text-blue-600">Login</Link></p>
                                </div>
                            </form>
                        </div>

                        {
                            registerError && <p className="text-center text-red-600 font-bold">{registerError}</p>
                        }

                        {
                            success && <p className="text-center text-green-500 font-bold">{success}</p>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;