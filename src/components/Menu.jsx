import { useState } from 'react';
import { Link } from 'react-scroll';

const a_style = 'w-full rounded-l cursor-pointer gap-4 pl-2 h-[55px] bg-[rgb(40,40,40)] text-[#865701] flex items-center transition-opacity bg-[rgba(70,70,70,0.8)]';
const n_style = 'w-full rounded-l cursor-pointer gap-4 pl-2 h-[55px] bg-[rgb(40,40,40)] text-[#865701] flex items-center transition-opacity hover:opacity-75';

export function Menu({menu, handleM}) {

    const [active, setActive] = useState();
    const [M, setM] = useState(menu)

    const handleActive = element => {
        setActive(element);
        setTimeout( () => handleM(!M) , 300);
    }

    return (
        <section className={`fixed flex flex-col cursor-pointer items-start text-[13px] gap-2 p-0 pt-[5px] absolute right-0 top-0 w-[70%] max-w-[300px] h-screen z-[100] bg-[#fde29054] p-0 m-0`}>
            <Link  to="INFO" spy={true}  smooth={true}  offset={-120} duration={500}  onClick={() => handleActive('home')} className={active === 'home' ? a_style : n_style}>
                <img src="../src/icons/home.svg" alt="" />
                <p>Home</p>
            </Link>
            <Link  to="TEAM" spy={true}  smooth={true}  offset={-120} duration={500}  onClick={() => handleActive('about')} className={active === 'about' ? a_style : n_style}>
                <img src="../src/icons/suitcase.svg" alt="" />
                <p>About</p>
            </Link>
            <Link  to="PLANS" spy={true}  smooth={true}  offset={-120} duration={500}  onClick={() => handleActive('service')} className={active === 'service' ? a_style : n_style}>
                <img src="../src/icons/gears.svg" alt="" />
                <p>Service</p>
            </Link>
            <Link  to="PRODUCTS" spy={true}  smooth={true}  offset={-120} duration={500}  onClick={() => handleActive('product')} className={active === 'product' ? a_style : n_style}>
                <img src="../src/icons/mmenu.svg" alt="" />
                <p>Product</p>
            </Link>
            <Link to="CONTACT" spy={true}  smooth={true}  offset={-120} duration={500}  onClick={() => handleActive('contact')} className={active === 'contact' ? a_style : n_style}>
                <img src="../src/icons/letter.svg" alt="" />
                <p>Contact</p>
            </Link>
        </section>
    )
}
