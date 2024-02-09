import { Hover } from "./Hover" 
import {useState} from 'react';


export function Info () {

    const [hover, setHover] = useState(false);

    const Enter = () => setHover(true);

    const Leave = () => setHover(false);

    return (
        <section id="INFO" className="flex felx-row gap-[40px] w-full items-center justify-center max-[770px]:flex-col" >

            <section className="flex items-center justify-center w-[100%] h-auto min-[771px]:max-w-[523px]" onMouseEnter={Enter} onMouseLeave={Leave}>
                <div className="relative w-[100%] rr max-[770px]:p-[50px] max-[350px]:p-[30px] rounded-[40px] flex items-center justify-center p-[30px]">
                        <img className="min-w-[220px] w-[100%] rounded-[40px]" src="../src/images/bicycle.jpg" alt="" />
                        { hover && <Hover /> }
                </div>
            </section>

            <section className="m-0 p-0 flex flex-col px-2 max-[770px]:w-full">
                <p className="text-[#865701] w-full text-[180%] m-0 p-0 max-[500px]:text-[140%]">
                    DUIS SED ODIO AMET
                </p>
                <p className="text-[#b28601] w-[100%] text-[120%] min-[770px]:max-w-[380px] m-0 p-0 max-[500px]:text-[100%]">
                    CLASS APENT TACIT SIOUTIS MAURIS JUST OLMORBI
                </p>
                <p className="text-white max-w-[380px] max-[770px]:max-w-full mt-10 p-0 max-[500px]:text-[90%]"> 
                    The Brownie is free responsive template 
                    from templatemo.com website. You can use this 
                    layout for any of your website. Please spread 
                    a word about us. Thank you. This template uses 
                    CSS Flexbox, which is supported on IE 10+ and 
                    recent versions of all other ut caniuse.com for detailed browser support
                    information.major browsers. 
                    Check o
                </p>
                <button className="w-[150px] h-[33px] bg-[#865701] text-white rounded mt-5 hover:bg-yellow-500 active:outline-none active:ring-2 active:ring-yellow-400">
                    LOREM IPSUM
                </button>
                <div>
                    
                </div>
            </section>
        </section>
    )
}