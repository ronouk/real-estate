import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase/firebase.init";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState('');

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log("Location in login page:", location)
    const auth = getAuth(app);

    //email password login
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get('password');
        console.log(email, password);

        //reset status message
        setLoginError('')

        signIn(email, password)
            .then(result => {
                console.log(result.user)

                //navigate after login
                navigate(location.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
            })
    }


    //third party login

    //google login
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {

        //reset status message
        setLoginError('')

        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                navigate(location.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
            })
    }

    //github login
    const githubProvider = new GithubAuthProvider();
    const handleGithubSignIn = () => {

        //reset status message
        setLoginError('')

        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result.user)
                navigate(location.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
            })
    }


    return (
        <div className="w-11/12 lg:w-3/4 mx-auto mb-12">
            <Helmet>
                <title>LRE | Login</title>
            </Helmet>

            <div>
                <div className="">
                    <div className="flex flex-col items-center gap-6">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">Login now!</h1>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm border border-yellow-500">
                            <form onSubmit={handleLogin} className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Your email" className="input input-bordered" required />
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
                                    <button className="btn btn-primary">Login</button>
                                </div>

                                <div className="flex items-center">
                                    <p className="font-semibold">Login with:</p>
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
                                    <p>Don&apos;t have an account?<Link to='/register' className="ml-2 underline text-blue-600">Register</Link></p>
                                </div>
                            </form>
                        </div>

                        {/* if error, show it */}
                        {
                            loginError && <p className="text-center text-red-600 font-bold">{loginError}</p>
                        }

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;