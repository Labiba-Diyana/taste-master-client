import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext, useState } from "react";
import bg from "../../assets/custom-images/login-bg.png"
import img from "../../assets/custom-images/login.png"


const Registration = () => {
    const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError('Password must be in 6 characters');
        }

        else {
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    updateUserProfile(name, photo)
                    .then(() => {})
                    setError('')
                })
            logOut()
                .then(() => {
                    navigate('/login')
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <div style={{backgroundImage: `url(${bg})`}} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full pb-10 max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                    <h3 className="text-center text-3xl font-bold mb-6 mt-6">Register You Account</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required type="password" name="password" placeholder="password" className="input input-bordered" />
                            <p className="text-red-600">{error}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn bg-[#DAA425] border-none" value="Register" />
                        </div>
                    </form>
                    <p className="px-10 mt-[-20px] text-[#DAA425] text-base font-semibold"><Link to="/login">Already have an account? Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Registration;