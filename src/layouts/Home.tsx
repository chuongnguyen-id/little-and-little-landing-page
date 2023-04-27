import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  return (
    <>
      {/* <div className="absolute top-0 left-0 right-0 bg-bgGradient justify-center h-[100%] w-[100%]">
        <div className="flex justify-center items-center bg-box">
          <Header />
          <div className="absolute grid grid-cols-12 gap-x-[30px] border-2 w-[80%]">
            <div className="relative col-span-8">
              <div className="relative wrapper w-[100%]">
                <div className="box">adsaaaaaa</div>
              </div>
            </div>
            <div className="relative col-span-4">
              <div className="relative wrapper w-[100%]">
                <div className="box">asda</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container-box">
        <div className="bg-box-img flex justify-center">
          <Header />
          <div className="absolute grid grid-cols-12 gap-[30px] w-[1519px]  mt-[156px]">
            <img
              srcSet="LogoDamSen.png 2x"
              alt="LogoDamSen"
              className="col-span-2"
            />
            <div className="relative col-span-8 font-font2 text-7xl text-bgColor">
              Đầm Sen<br></br>Park
            </div>
            <div className="relative col-span-8">
              <div className="shadow-box w-[950px]"></div>
              <div className="wrapper w-[950px]">
                <div className="content-box w-[925.61px]">
                  <p className="absolute left-[4.47%] right-[40.92%] top-[8%] bottom-[67%] w-[830px] font-font1 text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse ac mollis justo. Etiam volutpat tellus quis
                    risus volutpat, ut posuere ex facilisis.
                    <br></br>
                    <br></br>
                    Suspendisse iaculis libero lobortis condimentum gravida.
                    Aenean auctor iaculis risus, lobortis molestie lectus
                    consequat a.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative col-span-4">
              <div className="shadow-box w-[539px]"></div>
              <div className="wrapper w-[539px]">
                <div className="content-box  w-[511.98px]">
                  <div className="absolute left-[4.47%] right-[40.92%] top-[8%] bottom-[67%] font-font1 text-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
