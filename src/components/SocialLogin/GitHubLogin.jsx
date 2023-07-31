import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGithub } from "react-icons/fa";


const GitHubLogin = () => {
    const { githubLogin } = useContext(AuthContext);

    const handleGitHubLogin = () => {
        githubLogin()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="text-center mt-5 ">
        <button onClick={handleGitHubLogin} className="btn btn-circle mb-4 btn-outline text-[#DAA425] font-bold">
            <FaGithub></FaGithub>
        </button>
    </div>
    );
};

export default GitHubLogin;