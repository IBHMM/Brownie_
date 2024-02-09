import { Logo } from './Logo';
import {useState} from 'react'; 
import {Menu} from './Menu.jsx'

export function MobTab() {

    const [menu, setMenu] = useState(false);

    const handleM = () => {
        const n_m = !menu;
        setMenu(n_m);
    }


    return (
        <section className='flex flex-row w-full justify-between items-center mx-4 p-2'>
            <Logo />
            <div onClick={handleM} className='w-[50px] h-[50px] flex justify-center items-center fixed right-5 z-[100000] bg-[#b28601] rounded-2xl max-[400px]:w-[40px] max-[400px]:h-[40px]'>
                <img className='w-[70%] ' src="../src/icons/menu.svg" alt="" />
            </div>

            {
                menu && <Menu a={'home'} handleM={handleM} menu={menu}/> 
            }

        </section>
    );
}
