import bg from '../../../assets/custom-images/banner.png'

const Banner = () => {
    return (
        <div className="hero h-[900px]" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-thin">Welcome to Taste Master</h1>
                    <p className="mb-5 italic">We are here to provide you some amazing chef recipes.</p>
                    <button className="btn btn-outline border-4 rounded-none border-neutral-content text-white w-44">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;