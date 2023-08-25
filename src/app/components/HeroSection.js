import Image from "next/image";
import Link from "next/link";
import '@/app/styles/heroStyle.css';


const HeroSection = ({ title, imageURL }) => {
    return (
        <>
            <div className="md:h-[35rem] h-screen bg-gradient-to-br from-pink-200 to-blue-300 relative" >
                <div className="grid md:grid-cols-2 grid-cols-1 items-center md:h-full md:w-[65%] md:p-0 p-4 mx-auto" >
                    <div className="md:ms-auto space-y-4" >
                        <h1 className="text-4xl font-bold uppercase">{title}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium in, excepturi nam deserunt soluta ut at. Eaque necessitatibus, quidem iste dicta, quis quas suscipit odio, nihil consequuntur similique recusandae consectetur!
                        </p>
                        <Link href={'/movie'} className="px-8 py-1 bg-black text-white rounded-full inline-block hover:bg-white hover:text-black hover:outline hover:font-bold" >
                            Explore
                        </Link>
                    </div>
                    <div className="md:ms-auto mx-auto">
                        <Image src={imageURL} alt="Home page image" width={400} height={500} className="object-contain md:w-[400px] md:h-[500px] w-[300px] h-[350px]" />
                    </div>
                </div>
                <div className="custom-shape-divider-bottom-1692942186">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
        </>
    );
};

export default HeroSection;