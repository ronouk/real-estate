import { Helmet } from "react-helmet-async";
import { FaGoogle } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
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
                            <form className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Your email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                </div>

                                <div className="form-control my-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>

                                <div className="flex items-center">
                                    <p className="font-semibold">Login with:</p>
                                    <div className="flex gap-4">
                                        <p className="cursor-pointer text-xl hover:text-[#4081EC] transition">
                                            <FaGoogle />
                                        </p>
                                        <p className="cursor-pointer text-xl">
                                            <FaGithub />
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 text-center font-semibold">
                                    <p>Don&apos;t have an account?<Link to='/register' className="ml-2 underline text-blue-600">Register</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;