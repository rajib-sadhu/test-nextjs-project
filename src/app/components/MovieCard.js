import Image from "next/image";
import Link from "next/link";


const MovieCard = (v) => {

    const { id, type, title, synopsis, backgroundImage } = v.jawSummary;


    return (
        <div className="mx-auto mt-10 relative">
            <div>
                <Image src={backgroundImage?.url || '/default.jpg'} alt={title} width={250} height={200} className="object-cover h-[200px] w-full" />
            </div>
            <div className="">
                <h3 className="text-lg uppercase font-bold mt-1" >{title.substring(0, 18)}</h3>
                <p>{synopsis.length > 110 ? synopsis.substring(0, 110) + '...' : synopsis}</p>
                <div className="mt-5 absolute -bottom-8" >
                    <Link href={`/movie/${id}`}
                        className="px-5 bg-black text-white rounded-full inline-block hover:bg-white hover:text-black border-black border hover:font-bold"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;