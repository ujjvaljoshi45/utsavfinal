import MyNavbar from "./header";
import callIcon from "../images/call.png";
import emailIcon from "../images/mail.png";
export default function ContactUs() {
    return (
        <>
        <MyNavbar/>
        <div className="h-[calc(100vh-65px)] grid grid-cols-2  bg-[#F0EADE] flex-cols items-center">
            <div className=" h-[calc(100vh-65px)] flex items-center px-8">
                <div className="space-y-5">
                <h1 className="text-8xl font-bold">CONTACT<br/>US</h1>
                <div className="">
                    <h3 className="text-5xl font-bold">Address</h3>
                    <p className="text-justify text-2xl">725, Shreeji Tower Opp. kamala park 360575 164/5, Rajiv Gandhi Rd, Chhaya, Porbandar,Gujarat 360575</p>
                </div>
                <div className="grid grid-cols-7 flex items-center text-start">
                <img className="col-span-1 w-12 h-12" src={callIcon}></img>
                <div className="col-span-6 w-full"><h3 className="text-2xl">+91 94272 12869 | +91 98252 19413</h3></div>
                
                </div>
                <div className="grid grid-cols-7 flex items-center text-start">
                <img className="col-span-1 w-12 h-12" src={emailIcon}></img>
                <div className="col-span-6 w-full"><h3 className="text-2xl" href="mailto:utsavelectrotech@gmail.com">utsavelectrotech@gmail.com</h3></div>
                
                </div>
                
                </div>
            </div>
            <div className="flex justify-center w-full">
            
            <iframe className="w-full p-5 border-2 rounded-3xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4369.696000225698!2d69.62358234619137!3d21.63794849237318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395634f62265fad1%3A0xb2e4c56c5517ab90!2sUtsav%20Electrotech!5e0!3m2!1sen!2sin!4v1683804839951!5m2!1sen!2sin" width="350" height="450" allowfullscreen="no" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    
          
            </div>
        </div>
        </>
    )
    }