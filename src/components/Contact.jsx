import { useState, useEffect } from "react";


export function Contact() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sectionClass = windowWidth <= 770 ? "pl" : "rr";

  return (
    <section id="CONTACT" className="flex flex-col items-center gap-[40px] w-full max-[770px]:flex-col">
      <section className="flex flex-row gap-[40px] w-full gap-[40px0] items-center justify-center max-[770px]:flex-col">
        <section className={`flex p-6 items-center justify-center w-[523px] h-[770px] max-[770px]:w-full min-[770px]:max-w-[523px] min-[770px]:max-h-[523px] overflow-hidden ${sectionClass}`}>
          <div className="w-full rounded-[40px] flex items-start justify-center flex-col h-[100%] max-[770px]:text-center overflow-hidden ">
              <form action="#" className="w-full h-full flex flex-col gap-[30px] text-[#865701] p-10 items-center justify-center max-[770px]:p-0">
                  <input className="bg-[#1f1d1a] border-[#865701] border-[1px] w-full h-[33px] pl-5 rounded-2xl text-[#865701] " placeholder="Name..." type="text" />
                  <input className="bg-[#1f1d1a] border-[#865701] border-[1px] w-full h-[33px] pl-5 rounded-2xl text-[#865701]" placeholder="Email..." type="email" />
                  <input className="bg-[#1f1d1a] border-[#865701] border-[1px] w-full h-[33px] pl-5 rounded-2xl text-[#865701]" placeholder="Subject..." type="text" />
                  <textarea className="bg-[#1f1d1a] min-h-[120px] border-[#865701] border-[1px] w-full h-[33px] pl-5 rounded-2xl text-[#865701] h-[200px]" placeholder="Message..." type="" />
                  <div className="flex w-full  pl-1">
                    <button className="bg-[#865701] text-white w-[80px] h-[33px] rounded active:opacity-[0.3] hover:bg-[#b28601] hover:opacity-[0.7]">
                        Send
                    </button>
                  </div>
              </form>
          </div>
        </section>


        <section className="m-0 p-0 pl-2 pr-2 flex flex-col text-end items-start justify-center max-[770px]:w-full">
          <p className="text-[#865701] max-w-[230px] text-[180%] m-0 p-0 max-sm:text-[150%] ">
            GET IN <strong className="text-[#b28601]">TOUCH</strong>
          </p>
          <p className="text-white max-w-[380px] max-[770px]:max-w-full mt-10 p-0 max-sm:text-[90%] text-justify">
            Duis sed odio sit amet nibh vulputate cursus a sit amet
            mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
            tincidunt auctor a ornare odio nisi elit consequat ipsum, 
            nec sagittis sem nibh id elit. .
          </p>
          <img className="mt-10" src="../src/images/social_platforms.png" alt="" />

        </section>
      </section>

      <section>
        <p className="mb-10 text-[#865701] text-[14px]">
          COPYRIGHT © 2084 <a className="text-[#b28601]"> COMPANY NAME </a> DESIGN: <a className="text-[#b28601]"> TEMPLATED </a>
        </p>
      </section>

    </section>
  );
}
