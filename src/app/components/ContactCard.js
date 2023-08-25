import Link from 'next/link';
import {AiFillMail} from 'react-icons/ai';
import {PiChatsFill} from 'react-icons/pi';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {IoIosArrowDroprightCircle} from 'react-icons/io';

const ContactCard = () => {
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-10 my-10 md:text-center' >
            
            <div className='w-60 mx-auto space-y-3' >
                <p className='text-4xl mx-auto text-red-600' ><AiFillMail className='md:mx-auto' /></p>
                <h4 className='text-2xl font-semibold' >Email</h4>
                <p className='text-red-600' >Monday to Friday <br /> response time: 72 hours </p>
                <Link href={'/'} className='underline font-medium text-gray-500 flex items-center gap-2 md:justify-center' >Send Email <IoIosArrowDroprightCircle/> </Link>
            </div>
            
            <div className='w-60 mx-auto space-y-3' >
                <p className='text-4xl mx-auto text-red-600' ><BsFillChatDotsFill className='md:mx-auto' /></p>
                <h4 className='text-2xl font-semibold' >Live Chat</h4>
                <p className='text-red-600' >Weekdays: 9 AM — 6 PM ET  <br /> Weekends: 9 AM — 5 PM ET </p>
                <Link href={'/'} className='underline font-medium text-gray-500 flex items-center gap-2 md:justify-center' >Chat Now <IoIosArrowDroprightCircle/> </Link>
            </div>
            
            <div className='w-60 mx-auto space-y-3' >
                <p className='text-4xl mx-auto text-red-600' ><PiChatsFill className='md:mx-auto' /></p>
                <h4 className='text-2xl font-semibold' >Community Forum</h4>
                <p className='text-red-600' >Monday to Friday <br /> response time: 72 hours </p>
                <Link href={'/'} className='underline font-medium text-gray-500 flex items-center gap-2 md:justify-center' >Ask The Community<IoIosArrowDroprightCircle/> </Link>
            </div>
            
 

        </div>
    );
};

export default ContactCard;