import Image from "next/image";
import logo from "@/assets/images/logo-light.svg";


const Footer = () => {
    return (
        <div>
            <div className="columns-4 h-72 bg-neutral-900 text-white p-14">
                <div className="mt-3 mb-14">
                    <Image
                        alt="Logo"
                        src = {logo}
                    ></Image>
                </div>
                <div>
                    <p className="font-bold mb-5">Explore</p>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Services</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <p className="font-bold mb-5">Categories</p>
                    <ul>
                        <li><a>Rent a Home</a></li>
                        <li><a>List your Homes</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <div>
                    <p className="font-bold mb-5">You Can Also Visit</p>
                    <ul>
                        <li><a>Top Real Estate Brokerage in Dubai</a></li>
                        <li><a>Top Property Management in Dubai</a></li>
                        <li><a>Top Interior Design Company in Dubai</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;