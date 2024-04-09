import MyNavbar from "./header";
import ss1 from "../images/ss1.png"
import ss2 from "../images/ss2.png";
import ss3 from "../images/ss3.png";
import ss4 from "../images/ss4.png";

export default function Home() {
return (
    <>
    <MyNavbar/>
    {/* Create a grid view where there are two columns insdie a row using tailwind css */}
    {/* Center the column */}
    
    <div className="h-[calc(100vh-64px)] 
    
    bg-[#F0EADE] grid grid-cols-2   ">
        <div className="h-full flex
    items-center text-[#4F4D49] font-bold text-3xl px-5 py-5  text-justify ">For those in pursuit of top-tier sales and service for electronic devices, look no further than Utsav Electrotech. Our dedicated team provides innovative solutions for marine electronics issues, ensuring superior quality products and services that surpass expectations. Whether you seek new devices or repairs, we're your one-stop solution. Don't let technical obstacles hinder your progress. Trust Utsav Electrotech to keep you connected and ahead of the curve. Contact us today to discover more!
        </div>
        <div className="h-full flex flex-col justify-center">
            <div className="grid grid-cols-2 ">
                <div className=""><img src={ss1} className="h-64"></img></div>
                <div className=""><img src={ss2} className="h-64"></img></div>
            </div>
            <div className="grid grid-cols-2 ">
                <div className=""><img src={ss3} className="h-64"></img></div>
                <div className=""><img src={ss4} className="h-64"></img></div>
            </div>
        </div>
    
    </div>
    
    </>
)
}