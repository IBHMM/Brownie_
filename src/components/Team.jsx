import { useState, useEffect } from 'react';
import { Carousel } from './Slider.jsx';

const data = [
    {
        src: '../src/images/team-member-1.jpg',
        position: 'AENEAN SOLLICITUDIN',
        about: 'Ribendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
        name: 'DUISED ODIO',
    },
    {
        src: '../src/images/team-member-2.jpg',
        position: 'RIBENDUM AUCTOR',
        about: 'Aenean sollicitudin, nisi elit consequat ipsum, nec sagittis sem nibh id elit',
        name: 'NISI ELIT',
    },
    {
        src: '../src/images/team-member-3.jpg',
        position: 'SAGITTIS SEM',
        about: 'Ribendum auctornisi elit consequat ipsum, nisi elit sem nibh id elit.',
        name: 'DUISED ODIO',
    }
];

export function Team() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const sectionClass = windowWidth <= 770 ? 'pl' : 'rr';

    return (
        <section id="TEAM" className="flex flex-row w-full gap-[40px] items-center justify-center max-[770px]:flex-col">
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

            <section className={`flex items-center justify-center w-[100%] h-[523px] min-[771px]:max-w-[523px] max-[770px]:h-[800px] overflow-hidden ${sectionClass}`}>
                <div className="relative rounded-[40px] flex items-center justify-center flex-col w-[90%] h-[100%] max-[770px]:text-center overflow-hidden">
                    <Carousel data={data} />
                </div>
            </section>
        </section>
    );
}
