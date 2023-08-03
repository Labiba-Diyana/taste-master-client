import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import GoogleLogin from "../../components/SocialLogin/GoogleLogin";
import GitHubLogin from "../../components/SocialLogin/GitHubLogin";
import bg from "../../assets/custom-images/login-bg.png"
import img from "../../assets/custom-images/login.png"


const Login = () => {
    const [error, setError] = useState('');
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div style={{backgroundImage: `url(${bg})`}} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full pb-6 max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                    <h3 className="text-center text-3xl font-bold mb-6 mt-6">Login</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <p className="text-red-600">{error}</p>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn bg-[#DAA425] border-none" value="Login" />
                        </div>
                    </form>
                    <p className="px-10 mt-[-20px] text-[#DAA425] text-base font-semibold"><Link to="/register">New here? Create a new account</Link></p>
                    <div className="divider px-8">OR</div>
                    <div className="flex items-center justify-center space-x-5">
                        <GoogleLogin></GoogleLogin>
                        <GitHubLogin></GitHubLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;