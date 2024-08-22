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
    <section className="flex bg-black  md:min-h-[60vh]  lg:min-h-[100vh]">
      {/* Height/ width Mobile Version */}
      <div
        className="absolute -z-10 sm:bg-center bg-[-00px] "
        style={{
          // backgroundImage: "url(./img/BG1",
          // `${
          //   isMobile
          //     ? "url(./img/MobileHero.jpg)"
          //     : "url(./img/FotoKerenFerdi.jpg)"
          // }`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "120%",
          zIndex: -10,
          opacity: 0.5,
        }}
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
      <div data-aos="fade-right" className="text-center mx-auto  py-[240px] ">
        <h1
          className={`text-white mx-auto  font-extrabold  mb-5 w-[200px] sm:w-[550px]   md:text-6xl lg:w-full text-5xl lg:text-7xl`}
        >
          Welcome to Sesepuh 72
        </h1>
        <h2 className="text-white   font-extrabold  mb-5 w-[200px] sm:w-[550px]   md:text-2xl lg:w-full text-3xl lg:text-3xl">
          Class XI-10 from SMA NEGERI 2 SURABAYA 2024/2025
        </h2>

        {/* <div className="pt-[25px] mb-5 w-4  ">
          <button className="transition z-10 ease-in-out delay-150 shadow-xl hover:-translate-y-1 hover:scale-110 hover:bg-Yellow mx-2 border-2 w-[95px] h-[50px] bg-Yellow border-black rounded-full flex items-center justify-center">
            <a href={"#about"} className="font-bold ">
              Continue
            </a>
          </button>
        </div> */}
      </div>
      {/* <div className="flex ml-[200px] mt-[30px] w-[900px]">
        <div className="bg-KuPut border rounded-lengkung w-[350px] h-[522px] border-black"></div>
        <div className="pl-[30px]">
          <div className="bg-KuPut border  rounded-lengkung w-[300px] h-[123px] border-black"></div>
          <div className="bg-KuPut border mt-[15px] rounded-lengkung w-[300px] h-[252px] border-black"></div>
          <div className="bg-KuPut border mt-[15px] rounded-lengkung w-[300px] h-[112px] border-black"></div>
        </div>
      </div> */}
    </section>
  );
}

export default Hero;
