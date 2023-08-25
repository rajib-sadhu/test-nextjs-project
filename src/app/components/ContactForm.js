"use client";
import { useState } from "react";


const ContactForm = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        message: "",
    });

    const [status, setStatus] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    message: user.message
                })
            })

            const data = await response.json();

            console.log(data);

            if (response.status === 200) {
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    message: ""
                })
                setStatus('success');
            } else {
                setStatus('error');
            }
        }
        catch (err) {
            console.log(err)
        }

    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }

    return (
        <form onSubmit={handleSubmit} className="w-80 mx-auto my-10 p-5 border border-slate-400" >

            <div>
                <label htmlFor="username" className="capitalize font-semibold my-2 block">
                    name
                </label>
                <input type="text" name="username"
                    placeholder="Enter name"
                    className=" bg-slate-200 w-full mx-auto px-2 py-1 inline-block"
                    autoComplete="off"
                    value={user.username}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="email" className="capitalize font-semibold my-2 block">
                    email
                </label>
                <input type="email" name="email"
                    placeholder="Enter email"
                    className=" bg-slate-200 w-full mx-auto px-2 py-1 inline-block"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="phone" className="capitalize font-semibold my-2 block">
                    Phone
                </label>
                <input type="number" name="phone"
                    placeholder="Enter phone no."
                    className=" bg-slate-200 w-full mx-auto px-2 py-1 inline-block"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="message" className="capitalize font-semibold my-2 block">
                    Message
                </label>
                <textarea type="text" name="message"
                    placeholder="Enter Message"
                    className=" bg-slate-200 w-full mx-auto px-2 py-1 inline-block"
                    rows="5"
                    value={user.message}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mt-2 text-center" >
                <div className="mb-3" >
                    {status === 'success' && <p className="text-green-800">Thank you for your message!</p>}
                    {status === 'error' && <p className="text-red-600">There was an error submitting your message. Please try again.</p>}
                </div>
                <input type="submit" value={'Submit'}
                    className="px-3 py-1 bg-slate-400 font-semibold hover:text-white cursor-pointer" />
            </div>
        </form>
    );
};

export default ContactForm;