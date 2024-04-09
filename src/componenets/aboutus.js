import MyNavbar from "./header";
import about from "../images/about.png";
export default function AboutUs() {
    return (
        <>
        <MyNavbar/>
        
        <div className="
            bg-[#F0EADE] text-black text-center text-8xl font-bold ">ABOUT US
            </div>
            <div className="h-[calc(100vh-160px)]  grid grid-cols-5 bg-[#F0EADE] flex items-center">
                
                    <History/>
                    <div className="bg-black text-white col-span-1 flex items-center">
                        <img src={about}></img>
                    </div>
                    <Mission/>
            </div>

        </>
    )
}

function History() {
    return (
        <div className="col-span-2 bg-orange-500 text-center h-full flex items-center border-2 rounded-3xl px-8 mx-8 ">
        <div>
        <div className="text-4xl font-bold">
        FROM WHERE WE COME
        </div>
        <div className="text-2xl text-justify-center">
        Originating in 2002 through the visionary initiative of Kamal Mehta and Prakash Joshi, Utsav Electrotech has evolved into a paragon of excellence. Over the years, we have consistently delivered unparalleled quality services and top-tier products to our esteemed clientele. While our inventory may be selective, each offering exudes reliability and excellence. Presently, we proudly stand as the epitome of trust and reliability in the realms of Electronics and Engineering.
        </div>
        </div>
        </div>
    )
}

function Mission() {
    return (
        <div className="col-span-2 bg-orange-500 text-center h-full  flex items-center border-2 rounded-3xl px-8 mx-8 ">
        <div>
        <div className="text-4xl font-bold">
        OUR MISSION
        </div>
        <div className="text-2xl text-justify-center">
        Our sole mission revolves around the satisfaction of our customers, reflected in their smiling faces. We are steadfast in our commitment to showcasing the essence of reliable service. Our unwavering focus remains on delivering optimal solutions and contributing meaningfully to the industry. We pledge to provide cost-effective and dependable resolutions to our esteemed clientele. The hallmark of our endeavors lies not only in the quality of our work but also in our enduring legacy.
        </div>
        </div>
        </div>
    )
}