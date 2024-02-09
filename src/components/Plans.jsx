import { useState, useEffect } from 'react';
import { Plan } from './Plan';

const plan = [
    {
        src: '../src/images/plan-1.png',
        title: 'DUIS SED ODIO SIT AMET',
        info: 'Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
    },
    {
        src: '../src/images/plan-2.png',
        title: 'SAGITTIS SEM NIBHD',
        info: 'Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
    },
    {
        src: '../src/images/plan-3.png',
        title: 'DUIS SED ODIO SIT AMET',
        info: 'Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
    },
];

export function Plans () {
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
        <section id="PLANS" className="flex felx-row gap-[40px] w-full items-center justify-center max-[770px]:flex-col">
            <section className={`flex items-center justify-center w-[100%] h-[523px] mr-[10px] min-[771px]:max-w-[523px] max-[770px]:h-[800px] ${sectionClass}`}>
                <div className="rounded-[40px] flex items-center justify-center gap-[20px] flex-col w-[80%] h-[100%] max-[770px]:text-center ">
                    <p className='text-[200%] text-[#b28601]'>OUR PLANS</p>
                    <Plan plan={plan}/>
                </div>
            </section>
            <section className="m-0 p-0 flex flex-col px-2">
                <p className="text-[#865701] text-[180%] m-0 p-0 max-[500px]:text-[140%]">
                    POWERFUL CREATIVE  <strong className='text-[#b28601]'> DESIGN </strong>
                </p>
                <p className="text-[rgb(170,170,170)] text-[100%] max-w-[380px] max-[770px]:max-w-full m-0 p-0 max-[500px]:text-[100%]">
                    Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudinl dorem quis bibendum auctor, nisi elit consequat ipsum, nec sagit. tis
                </p>
            </section>
        </section>
    )
}
