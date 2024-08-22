function Footer() {
  return (
    <footer className="bg-BB bottom-0 px-3 pb-3 pt-5 text-Yellow border-t-2 border-Yellow">
      {/* Mobile View */}
      <div className="hidden md:flex md:flex-col space-y-0 md:space-y-6 ">
        <div className="flex-row space-y-5 md:space-y-0 justify-around md:flex">
          <div className="">
            <h1 className="border-b-2 mb-2 w-[150px] font-semibold border-Yellow text-center">
              Follow Us
            </h1>
            <div className="flex justify-center items-center">
              <a className="" href="#"></a>
              <a className="" href="#"></a>
            </div>
          </div>
          <div className="">
            <h1 className="border-b-2 mb-2 w-[150px] font-semibold border-Yellow text-center">
              Buy Our Product
            </h1>
            <div className="flex justify-center items-center">
              <a className="" href="">
                <img src="/img/TOKPED.svg" alt="" />
              </a>
              <a className="" href="https://shopee.co.id/olativity"></a>
            </div>
          </div>
        </div>
        <div className=" p-2">
          <p className="font-">
            Jl.Wijaya Kusuma No.48, Kec.Genteng, Suarabaya, Jawa Timur 60272
          </p>
          <a className="font-bold" href="mailto:olativity@gmail.com">
            olativity@gmail.com
          </a>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex-col md:hidden space-y-0 md:space-y-6 text-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="border-b-2 mb-2 w-[150px] font-semibold border-Yellow text-center ">
            Follow Us
          </h1>
          <div className="flex">
            <a
              className=""
              href="https://www.instagram.com/olativity.sc/?igshid=MmU2YjMzNjRlOQ%3D%3D"
            ></a>
            <a className="" href="https://www.tiktok.com/@olativitysc"></a>
          </div>

          <div className="">
            <h1 className="border-b-2 mb-2 w-[150px] font-semibold border-Yellow text-center">
              Buy Our Product
            </h1>
            <div className="flex justify-center items-center">
              <a
                className=""
                href="https://www.tokopedia.com/olativity?utm_source=salinlink&utm_medium=share&utm_campaign=Shop-234040852-16507904-081023-contextual_image&_branch_match_id=1221394042606513497&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL8nPzi9ITclM1MvJzMvWL69KNy5LLUvxckkCAGKT7PgiAAAA"
              >
                <img src="/img/TOKPED.svg" alt="" />
              </a>
              <a className="" href="https://shopee.co.id/olativity"></a>
            </div>
          </div>
        </div>

        <div className=" p-2">
          <p className="">
            Jl.Wijaya Kusuma No.48, Kec.Genteng, Suarabaya, Jawa Timur 60272
          </p>
          <a className="font-bold" href="mailto:olativity@gmail.com">
            olativity@gmail.com
          </a>
        </div>
      </div>
      <div className="flex justify-center text-Yellow">
        © {new Date().getFullYear()} By Ferdian
      </div>
    </footer>
  );
}

export default Footer;
