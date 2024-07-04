import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="bg-[#020043] w-full mt-20 p-20">
        <div className="flex flex-col md:flex-row gap-6 justify-between md:items-center lg:items-end">
            <div className="">
                <img className="w-20 mb-6" src="https://i.postimg.cc/fLM5CbRx/logo-light.png" alt="" />
                <h1 className="text-white mb-6">123 Main Street Anytown, USA <br />Postal Code: 12345</h1>
                <p className="text-white">Support: support@gmai.com</p>
                <p className="text-white">Available: 10:00am To 7:00pm</p>
            </div>
            <div className="text-white list-none">
                <li>Home</li>
                <li>About Us</li>
                <li>Success Page</li>
                <li>Tearms and Condition</li>
            </div>

            <div className="text-white list-none">
                <li>Services</li>
                <li>Scheduling</li>
                <li>Contact Us</li>
                <li>Patient Portal</li>
            </div>

            <div className="text-white list-none">
               <h2 className="mb-2">Follow Us</h2>
               <div className="flex gap-3 cursor-pointer">
                    <li><FaFacebook /></li>
                    <li><FaSquareInstagram /> </li>
                    <li><FaLinkedin /></li>
                    <li><FaYoutube /></li>
               </div>
               <p className="mt-7">@Docplus 2024</p>
            </div>
        </div>
    </div>
  )
}

export default Footer