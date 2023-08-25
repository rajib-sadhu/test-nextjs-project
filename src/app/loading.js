import styles from '@/app/globals.css';
import Image from 'next/image';

const Loading = () => {
    return (
        <section className="grid place-content-center h-[35rem]" >
            <div>
                <Image src={"https://i.gifer.com/ZKZg.gif"} alt="" width={50} height={50} />
            </div>
        </section>
    );
};

export default Loading;