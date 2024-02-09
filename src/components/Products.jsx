import { useState, useEffect } from "react";
import { Carousel } from "./Slider";

const data = [
  {
    src: '../src/images/product-1.png',
    name: 'Table'
  },
  {
    src: '../src/images/product-2.png',
    name: 'Smart Phone'
  },
  {
    src: '../src/images/product-3.png',
    name: 'COGS'
  },
];

export function Products() {
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
    <section id="PRODUCTS" className="flex flex-row gap-[40px] w-full gap-[40px0] items-center justify-center max-[770px]:flex-col">
      <section className="m-0 p-0 pl-1 pr-1 flex flex-col text-end items-end justify-end max-[770px]:w-full">
        <p className="text-[#865701] max-w-[230px] text-[180%] m-0 p-0 max-sm:text-[150%] pl-[0%]">
          MEET OUR CREATIVE <strong className="text-[#b28601]">TEAM</strong>
        </p>
        <p className="text-white max-w-[380px] max-[770px]:max-w-full mt-10 p-0 max-sm:text-[90%] text-justify">
          Lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh
          id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi
          accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
        </p>
      </section>

      <section className={`flex p-6 bg-green items-center justify-center w-[523px] h-[770px] max-[770px]:w-full min-[770px]:max-w-[523px] min-[770px]:max-h-[523px] overflow-hidden ${sectionClass}`}>
        <div className="relative w-full rounded-[40px] flex items-center justify-center flex-col h-[100%] max-[770px]:text-center overflow-hidden ">
          <Carousel data={data} />
        </div>
      </section>
    </section>
  );
}
