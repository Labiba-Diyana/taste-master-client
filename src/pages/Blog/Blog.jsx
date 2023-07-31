

const Blog = () => {
    return (
        <div className="pt-44 pb-32 grid grid-cols-2 gap-8">
            <div className="space-y-5"> 
                <h1 className="text-2xl font-bold">1. Tell us the differences between uncontrolled and controlled components.</h1>
                <p className="text-xl font-light italic">In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            </div>
            <div className="space-y-5"> 
                <h1 className="text-2xl font-bold">2. How to validate React props using PropTypes.</h1>
                <p className="text-xl font-light italic">Props Validation in React JS is a process of checking whether the data being passed to components as props meet certain criteria. we validate them by setting the propTypes property of the FooComponent component to an object that has the names of the props to validate as the keys.</p>
            </div>
            <div className="space-y-5"> 
                <h1 className="text-2xl font-bold">3. Tell us the difference between nodejs and express js.</h1>
                <p className="text-xl font-light italic">NodeJS is a javascript runtime environment for running JavaScript programs and is used to build server-side applications. ExpressJS is a web framework that enables you to design a web application to handle a variety of different HTTP demands. You can use NodeJS to build a multi-user, real-time web service.</p>
            </div>
            <div className="space-y-5"> 
                <h1 className="text-2xl font-bold">4. What is a custom hook, and why will you create a custom hook?</h1>
                <p className="text-xl font-light italic">A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function.</p>
            </div>
        </div>
    );
};

export default Blog;