
import MovieCard from "../components/MovieCard";


const Movie = async () => {

    await new Promise(resolve=>setTimeout(resolve,2000))

    const url = process.env.RAPID_KEY;
    const options = {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': 'd34ae77cf0msh14ff28c0d59bc88p149894jsn24bc694c6800',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;

    return (
        <div>
            <h1 className="mt-10 text-center font-extrabold text-3xl uppercase">Movie Page</h1>
            <div className="md:w-[70%] md:px-0 px-5 mx-auto grid md:grid-cols-4 grid-cols-1 gap-5 my-10" >
                {
                    main_data.map((v) => {
                        return <MovieCard key={v.id} {...v} />
                    })
                }
            </div>
        </div >
    );
};

export default Movie;