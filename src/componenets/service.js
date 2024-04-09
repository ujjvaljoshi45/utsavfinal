import MyNavbar from "./header";
import sp1 from "../images/sp1.png";
import sp2 from "../images/sp2.png";
import marine from "../images/m.png";
export default function Service() {
    return (
        <>
        <MyNavbar/>
        <div className="h-[calc(100vh-64px)] bg-[#F0EADE] grid grid-cols-2 place-items-center">
            <div className="h-full flex items-center px-5 py-5 text-justify ">
                <div>
                <h1 className="text-[#6D6A65] text-7xl font-bold">Our</h1>
                <h1 className="text-black text-7xl font-bold">Services</h1><br/>
                <p className="text-2xl">
                Stay connected and at ease with Utsav
                Electrotech. We specialise in top-quality sales. and service of electronic devices, encompassing <b>TVs, Air Conditioners, and Refrigerators.</b> Our team of experts delivers exemplary customer service and support, aiding you in product selection and delivering reliable repairs and maintenance. Rely on us for innovative and cost-effective solutions.
                </p>
                </div>
            </div>
           
            <div className=" flex items-center text-black">
                <div className="grid grid-rows-2 flex place-items-center">
              
                    <img src={sp1} className="h-64 px-5 py-5"></img>
               
                    <img src={sp2} className="h-64  "></img>
                
                </div>
            </div>
        </div>
        <div className="h-full bg-[#F0EADE] grid grid-cols-2 place-items-center">
            <div className="h-full flex items-center px-5 py-5 text-justify ">
                <div>
                <h1 className="text-[#6D6A65] text-7xl font-bold">Marine</h1>
                <h1 className="text-black text-7xl font-bold">Services</h1><br/>
                <p className="text-2xl">
                In the realm of <b> marine electronics </b>,
experience is paramount. At Utsav Electrotech, our seasoned professionals possess the requisite expertise. With years of hands-on experience in managing diverse electronic devices within marine environments, we adeptly navigate the unique challenges therein. Count on us for dependable service and customized solutions ensuring seamless connectivity and a competitive edge.
                </p>
                </div>
            </div>
            <div className=" w-full flex items-center ">
                
                   <img src={marine} className="p-5 m-5"></img>
                
            </div>
        </div>
        </>
    )
    }