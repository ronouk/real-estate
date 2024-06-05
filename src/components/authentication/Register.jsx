import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { FaGoogle } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import app from "../../firebase/firebase.init";

const Register = () => {

    const auth = getAuth(app);

    //google login
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    //github login
    const githubProvider = new GithubAuthProvider();
    const handleGithubSignIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
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
                        <form className="card-body">
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

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
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
                </div>
            </div>
        </div>
    </div>
);
};

export default Register;