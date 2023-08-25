import Image from "next/image";
import Link from "next/link";


const MoviePage = async ({ params }) => {
    
    const id = params.id;
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd34ae77cf0msh14ff28c0d59bc88p149894jsn24bc694c6800',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data[0].details;


    return (
        <div className="my-10 md:px-40 px-5" >
            <div className="my-10" >
                <h1 className="text-2xl uppercase" ><Link href={'/movie'} >Netflix</Link> / <span className="font-bold text-red-600">{main_data?.type}</span> </h1>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1" >
                <div className="mx-auto" >
                    <Image src={main_data.backgroundImage.url || 'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg' } alt={main_data.title} width={600} height={350} />
                </div>
                <div>
                    <h1 className="text-4xl font-extrabold" >{main_data?.title}</h1>
                    <p>{main_data?.synopsis}</p>
                </div>
            </div>
        </div>
    );
};

export default MoviePage;