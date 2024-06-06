import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";

const UpdateUser = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="w-11/12 lg:w-3/4 mx-auto mb-12">
        <Helmet>
            <title>LRE | Update User</title>
        </Helmet>

        <div>
            <div className="">
                <div className="flex flex-col items-center gap-6">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">Update User</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm border border-yellow-500">
                        <form className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={user.displayName} className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" defaultValue={user.email} className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="url" name="photoUrl" defaultValue={user.photoURL} className="input input-bordered" />
                            </div>

                            <div className="text-center mt-4">
                                <button className="btn border border-yellow-500 bg-transparent hover:bg-yellow-600 hover:text-white">Update</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default UpdateUser;