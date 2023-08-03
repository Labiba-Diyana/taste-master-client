

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="space-y-5 mt-10 mb-16">
           <h2 className="text-2xl lg:text-3xl font-extrabold text-[#DAA425]">{heading}</h2> 
           <p className="text-base italic">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;