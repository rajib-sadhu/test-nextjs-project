import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";


const Contact = () => {
    return (
        <div>
            <h1 className="my-10 text-center font-extrabold text-3xl uppercase">Contact</h1>
            <ContactCard />
            <section className="">
                <h2 className="text-center md:text-3xl text-xl font-bold" >We'd love to hear <span className="text-red-600" > from you </span></h2>
                <ContactForm />
            </section>
            <section>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14731.959558257084!2d88.42012244887201!3d22.61685272900798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e25e6597d69%3A0xf2a8229a9b93e1b8!2sBaguiati%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1692961425697!5m2!1sen!2sin" width={600} height={400} loading="lazy" className="w-full"
                ></iframe>
            </section>
        </div>
    );
};

export default Contact;