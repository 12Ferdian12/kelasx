// import LoadingModal from "@/components/loadingModal";
import React, { useEffect } from "react";
// import { useMediaQuery } from "@/hooks";
// import { poppins } from "@/app/layout";

function Hero() {
  //   const isMobile = useMediaQuery("(max-width: 768px)");
  // console.log(poppins);
  // useEffect(() => {
  //   console.log("isMobile", isMobile);
  // }, [isMobile]);

  return (
    <section className="flex bg-gradient-to-b from-slate-700/50 to-Coklat min-h-[100vh]  md:min-h-[60vh] bg-opacity-50 bg-cover lg:min-h-[100vh]">
      {/* Height/ width Mobile Version */}
      <div
        className="absolute -z-10 sm:bg-center bg-[-00px] "
        // style={{
        //   backgroundImage: `${
        //     isMobile
        //       ? "url(./img/MobileHero.jpg)"
        //       : "url(./img/FotoKerenFerdi.jpg)"
        //   }`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        //   width: "100%",
        //   height: "120%",
        //   zIndex: -10,
        //   opacity: 0.5,
        // }}
      ></div>
      {/* <div
        className="absolute -z-10 block sm:hidden  "
        style={{
          backgroundImage: `url("./img/MobileHero.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "120%",
          zIndex: -10,
          opacity: 0.5,
        }}
      ></div> */}
      <div
        data-aos="fade-right"
        className="md:pt-[250px] pt-[100px] pl-[50px] lg:pl-[100px] "
      >
        <h1
          className={`text-white   font-outline-2 font-extrabold  mb-5 w-[200px] sm:w-[550px]   md:text-6xl lg:w-full text-5xl lg:text-6xl`}
        >
          START <span className="text-Green ">PLANTING?</span> START
          <br /> WITH
          <span className="text-Brown2 "> OLATIVITY</span>
        </h1>
        <p className="container px-4 py-2 border-2 border-black bg-Brown2  rounded-3xl font-semibold w-[300px] sm:w-[350px] md:w-[650px] lg:w-[750px] text-Yellow text-lg md:text-lg ">
          Masa dua tahun yang akan datang akan terjadi berbakai krisis, oleh
          karena itu dengan cara melestarikan tanaman dan tumbuhan maka akan
          mencegah hal tersebut terjadi. Maka Ayo Bersama kami melakukan
          perubahan dunia dengan cara menanam pohon.
        </p>
        <div className="pt-[25px] mb-5 w-4  ">
          <button className="transition z-10 ease-in-out delay-150 shadow-xl hover:-translate-y-1 hover:scale-110 hover:bg-Yellow mx-2 border-2 w-[95px] h-[50px] bg-Yellow border-black rounded-full flex items-center justify-center">
            <a href={"#about"} className="font-bold ">
              Continue
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
