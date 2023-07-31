import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";


const GoogleLogin = () => {
    const { googleLogin } = useContext(AuthContext);

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="text-center mt-5 ">
            <button onClick={handleGoogleLogin} className="btn btn-circle  mb-4 btn-outline text-[#DAA425] font-bold ">
                <FaGoogle></FaGoogle>
            </button>
        </div>
    );
};

export default GoogleLogin;