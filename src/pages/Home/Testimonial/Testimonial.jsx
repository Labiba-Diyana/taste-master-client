import { FaStar } from 'react-icons/fa';
import SectionTitle from '../../../components/SectionTitle';

const Testimonial = () => {
    return (
        <div className="text-center my-20 lg:my-36 w-10/12 mx-auto">
            <SectionTitle heading="Customer Review" subHeading="Here are some of our satisfied customer review."></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="card shadow-xl rounded-none border border-stone-200">
                    <div className="avatar flex justify-center">
                        <div className="w-24 rounded-full ring-4 ring-stone-200 ring-offset-base-100 shadow-lg ring-offset-2 mt-[-40px]">
                            <img className="h-[83px] lg:h-[100px]" src="https://imgv3.fotor.com/images/slider-image/a-woman-in-a-suit-with-a-white-background.png" />
                        </div>
                    </div>
                    <div className="card-body mt-5 space-y-3 lg:space-y-5 text-center">
                        <div>
                            <h2 className="text-lg font-thin italic">
                                Has some great recipes easy to use for quick dinners. I tried some of their recipes which was so good and perfect. Really recommending.
                            </h2>
                            <div className="mt-7 space-y-2">
                                <h4 className="text-2xl font-extrabold">Anna Mary</h4>
                                <p className='font-thin'>anna12@gmail.com</p>
                                <div className='flex justify-center pt-3'>
                                    <FaStar className='w-8 text-[#DAA425]'></FaStar>
                                    <FaStar className='w-8 text-[#DAA425]'></FaStar>
                                    <FaStar className='w-8 text-[#DAA425]'></FaStar>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card shadow-xl rounded-none border border-stone-200">
                    <div className="avatar flex justify-center">
                        <div className="w-24 rounded-full ring-4 ring-stone-200 ring-offset-base-100 shadow-lg ring-offset-2 mt-[-40px]">
                            <img className="h-[83px] lg:h-[100px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlRc2TQsepIQ6hndf_5uPGqGJFH9aXEbm5Sg&usqp=CAU" />
                        </div>
                    </div>
                    <div className="card-body mt-5 space-y-3 lg:space-y-5 text-center">
                        <div>
                            <h2 className="text-lg font-thin italic">
                                If you are searching for doing better at your cooking. This gonna be a really useful for you amd it is so easy to understand.
                            </h2>
                            <div className="mt-7 space-y-2">
                                <h4 className="text-2xl font-extrabold">Josef Miller</h4>
                                <p className='font-thin'>josef38@gmail.com</p>
                                <div className='flex justify-center pt-3'>
                                    <FaStar className='w-8 text-[#DAA425]'></FaStar>
                                    <FaStar className='w-8 text-[#DAA425]'></FaStar>
                                    <FaStar className='w-8 text-[#DAA425]'></FaStar>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;