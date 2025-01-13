import Image from "next/image";
import styles from "./page.module.css";
import apa from "../assets/images/apa.svg";
import apaText from "../assets/images/apa-text.svg";
import Form from '@/components/Form';
import Footer from "@/components/Footer";
import know1 from "@/public/images/know1.png";
import know2 from "@/public/images/know2.jpg";
 
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
}

const HomePage = () => {
    return (
        <div className=" bg-[url('/hero-image.png')] bg-cover bg-center h-screen">
            <div className="h-96 w-[100%] flex" >
                <div className="flex-auto pl-[7%]">
                    <p className={styles.herotext} >List Your Property<br />With Key One<br />Holiday Homes</p>
                    <p className={styles.subtext} >Maximize your investment and let our dedicated team at Key One<br /> Holiday Homes handle the details, ensuring a seamless renting<br /> experience for both you and your guests.</p>
                </div>
                <div className="flex-auto w-[80px] pt-[25%] pr-[0px]">
                    <div className="flex">    
                        <Image 
                            alt="APA logo"
                            src={apa}
                            className="h-[90px] w-auto flex-auto mr-[-250px]">
                        </Image>
                        <Image 
                            alt="APA Text"
                            src={apaText}
                            className="h-[60px] w-auto flex-auto mt-[20px]">
                        </Image>
                    </div>
                    <div className={styles.apaSubtext}>
                        <p className={styles.heading}>BEST LETTING AGENCY<br />
                            <span className={styles.subheading}>DUBAI & ARABIA</span><br />
                            <span className={styles.trailer}>2024-2025</span></p>
                    </div>
                </div>
            </div>
            <div className="bg-white w-[80%] h-[45%] mt-[15%] rounded-lg ml-[11%] p-10">
                <p className="text-xl"><span className="font-extrabold">Earn more</span> by converting your property into a holiday home. Request Evaluation</p>
                <Form />
            </div>
            <div className="mt-28 ml-48 mb-28">
                <div className="flex">
                    <div className="flex-auto mr-20">
                        <Image
                            alt="prop image 1"
                            src={know1}
                            className="h-80 w-auto rounded-2xl">
                        </Image>
                        <div className={styles.absImage}>
                            <Image
                                alt="prop image 2"
                                src={know2}
                                className="h-40 w-auto rounded-2xl absolute">
                            </Image>
                        </div>
                    </div>
                    <div className="flex-auto">
                        <p className="text-6xl font-bold">Premier Property<br /> Management for<br /> the Chosen Ones</p>
                        <p className="font-normal mt-4 text-base">
                        Experience exceptional property management tailored exclusively for<br /> discerning property owners. We elevate your investment with<br /> unparalleled professionalism and personalized attention, ensuring<br /> your property reaches its fullest potential. Trust us to provide the<br /> finest care that only the select few can appreciate.
                        </p>
                        <button
                            className="mt-5 w-96 h-11 rounded-lg bg-black px-3 py-2 text-m font-semibold text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Know More
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;