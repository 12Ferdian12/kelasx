// import LoadingModal from "@/components/loadingModal";
import React, { useEffect } from "react";
// import { useMediaQuery } from "@/hooks";
// import { poppins } from "@/app/layout";
import Typewriter from "typewriter-effect";

function Hero() {
  //   const isMobile = useMediaQuery("(max-width: 768px)");
  // console.log(poppins);
  // useEffect(() => {
  //   console.log("isMobile", isMobile);
  // }, [isMobile]);

  return (
    <section className="flex bg-gradient-to-b from-slate-700/50 to-Coklat min-h-[100vh] md:min-h-[60vh] lg:min-h-[100vh] relative">
      {/* Height/ width Mobile Version */}
      <div
        className=" absolute left-0 top-0 w-full h-full bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url(./img/ARKA.jpeg)",
          // backgroundSize: "contain",
          zIndex: -10,
          opacity: 0.5,
        }}
      ></div>
      {/* <div
        className="absolute -z-10 sm:hidden md:flex"
        style={{
          backgroundImage: `url("./img/ARKA2.jpeg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

          width: "100%",
          height: "120%",
          zIndex: -10,
          opacity: 0.5,
        }}
      ></div> */}
      {/* py-[240px] */}
      <div
        data-aos="fade-right"
        // pt-[400px]
        className="text-center mx-auto pt-[200px] md:pt-[400px] md:py-[240px] lg:py-[350px] "
      >
        <div className="flex  ">
          <img
            className="w-[200px] top-0 mx-auto rounded-full h-[210px] animate-spin-slow"
            src="./img/ARKA3.jpeg"
            alt="ARKASPin"
          />
        </div>
        <h1
          className={`text-white mx-auto  font-extrabold pt-[100px] mb-5 w-[200px] sm:w-[550px]   md:text-6xl lg:w-full text-5xl lg:text-7xl`}
        >
          SELAMAT
        </h1>
        {/* w-[200px] */}
        <h2 className="text-white font-extrabold mx-auto  mb-5 w-[300px] sm:w-[550px]   md:text-2xl lg:w-full text-3xl lg:text-3xl">
          <Typewriter
            options={{
              strings: [" Ulang Tahun Prof.Arka!!!"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        <div className="border-[3px] mx-auto w-[250px] md:w-[300px] h-[500px] md:h-[450px] lg:w-[400px] border-orange-400 rounded-xl bg-white mt-20">
          <img
            className="mx-auto mt-[25px] rounded-md w-[200px]"
            src="./img/ARKA2.jpeg"
            alt="ARKA"
          />
          <p className="text-2xl font-bold text-black">
            Semoga panjang umur dan sehat selalu serta diberkahi dengan ilmu
            yang bermanfaat
          </p>
        </div>
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
