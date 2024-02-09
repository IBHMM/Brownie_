import { Desktop } from './Desktop.jsx';
import { MobTab } from './MobTab.jsx';
import { useState, useEffect} from 'react';
import { Link } from 'react-scroll';

export function Navbar() {
    const [wd, setWd] = useState('');
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const w = window.innerWidth < 770 ? 'mob&tab' : 'desktop';
        setWd(w);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const w = window.innerWidth < 770 ? 'mob&tab' : 'desktop';
            setWd(w);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

    }, []);

    return (
        
        <nav
            className={`${
                scroll ? 'h-[70px]' : ''
            } nav w-full transition-height easy-in-out duration-500 fixed top-0 z-[100000] flex flex-row items-end justify-evenly border-b-[1px] border-[#b28601]`}
        >
            {wd === 'desktop' ? <Desktop /> : <MobTab />}
        </nav>
    );
}
