

const Footer = () => {
    return (
        <div className="h-40 bg-blue-200 grid place-content-center">
            <div className="text-center flex justify-center items-center md:flex-row flex-col" >
                <h1 className="md:text-3xl text-2xl font-bold text-violet-800 mb-2" >MovieTime</h1>
                <span
                className="md:block hidden h-6 bg-black w-[1px] mx-5"
                ></span>
                <p>Copyright &copy; Rajib Sadhu </p>
            </div>
        </div>
    );
};

export default Footer;