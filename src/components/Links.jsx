import {useState} from 'react';
import { Link } from 'react-scroll';

const style = 'border-[#b28601] border-[1px] border-b-[0px] rounded-t-2xl p-3 transition duration-500 ease-in-out text-[#b28601] l'

export function Links() {

    const [s, setS] = useState(1);

    const handlestyle = index => {
        const n_s = index;
        setS(n_s);
    }

    return (
        <section className="h-full flex flex-row gap-7 justify-center items-center text-[#865701] cursor-pointer pt-3 mb-[-1px]">

           <Link  to="INFO" spy={true}  smooth={true}  offset={-120} duration={500}   onClick={() => handlestyle(1)} className={(s == 1) && style}>HOME</Link>
           <Link  to="TEAM" spy={true}  smooth={true}  offset={-120} duration={500}  onClick={() => handlestyle(2)} className={(s == 2) && style}>ABOUT</Link>
           <Link  to="PLANS" spy={true}  smooth={true}  offset={-120} duration={500} onClick={() => handlestyle(3)} className={(s == 3) && style}>SERVICES</Link>
           <Link  to="PRODUCTS" spy={true}  smooth={true}  offset={-120} duration={500}  onClick={() => handlestyle(4)} className={(s == 4) && style}>PRODUCTS</Link>
           <Link  to="CONTACT" spy={true}  smooth={true}  offset={-120} duration={500} onClick={() => handlestyle(5)} className={(s == 5) && style}>CONTACT</Link>

        </section>
    );
}
