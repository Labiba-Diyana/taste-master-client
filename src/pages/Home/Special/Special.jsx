import SectionTitle from "../../../components/SectionTitle";


const Special = () => {
    return (
        <div className="mt-22 mb-44 w-10/12 mx-auto text text-center">
            <SectionTitle heading="Special Arrangement" subHeading="We set a special arrangement for you guys."></SectionTitle>
            <div className="hero place-items-start items-center h-full lg:h-[400px]" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/top-view-creative-coffee-arrangement_23-2148623221.jpg?w=1380&t=st=1690773432~exp=1690774032~hmac=23b464c848414210c896bb0de7b6e666ccda9c4ba681f382bf6fc4e30230e7aa)' }}>
                <div className="hero-overlay h-full bg-opacity-60"></div>
                <div className="hero-content text-left text-neutral-content p-8 lg:p-20">
                    <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-6  lg:space-y-0 italic">
                        <h1 className="text-3xl lg:text-6xl font-thin ">Get your <br /> leisure time <br /> work.</h1>
                        <p className="text-xl lg:text-3xl font-thin w-full lg:w-1/2">Here we are starting a new project to give you guys an opportunity to meet with your favorite chef and attending their classes. And more surprisingly we are giving 10 days free classes.</p>
                        <div className="space-y-1">
                            <p>From: 10th August, 2023.</p>
                            <p>Every week: Fri-Sun</p>
                            <p className="pb-5">At: 10.00pm to 12.00am</p>
                            <button className="btn btn-outline border-4 rounded-none border-neutral-content text-white w-32 lg:w-44">See More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Special;