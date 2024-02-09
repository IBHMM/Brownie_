import {Navbar} from '../components/Navbar.jsx';
import {Info} from '../components/Info.jsx';
import {Team} from '../components/Team.jsx';
import {Plans} from '../components/Plans.jsx';
import {Products} from '../components/Products.jsx';
import {Contact} from '../components/Contact.jsx';

export function Home() {
    return(
        <>
            <Navbar />
            <Info />
            <Team />
            <Plans />
            <Products />
            <Contact />
        </>
    )
}