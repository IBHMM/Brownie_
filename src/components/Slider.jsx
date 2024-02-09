import { useState } from "react";
const l = '<', r = '>';

export function Carousel({ data }) {
    const [index, setIndex] = useState(0);
    
    const handleLeftClick = () => {
        const newIndex = (index === 0) ? 0 : index - 1;
        setIndex(newIndex);
    }
    
    const handleRightClick = () => {
        const n_Index = (index === data.length - 1) ? index : index + 1;
        setIndex(n_Index);
    }
    
    const possition = i => -1 * (i * 33.3333333333);

    return (
        <>
            <ul className="flex w-[300%] ml-2 mr-2 absolute left-0 transition-transform duration-500 ease-in-out justify-start items-center" style={{ transform: `translateX(${possition(index)}%)` }}>
                {data.map((person, i) => (
                    <li key={i} className="w-[33%] flex flex-col items-center text-center">
                        {
                            person.about !== undefined ? 
                            <div className="pp p-[8px] w-[150px] h-[150px] flex items-center justify-center">
                                <img className="rounded-full" src={person.src} alt="" />
                            </div> :
                            <img className="" src={person.src} alt="" />
                        }
                        <p className="text-[#865701] text-[120%]">{person.position}</p>
                         {
                             person.about && 

                            <img className='' src="../src/images/underline.png" alt="" />
                        }
                        <p className="text-[rgba(190,190,190,0.8)] w-[90%]">{person.about}</p>

                        {
                             person.about ?

                            <p className="text-[#b28601]">{person.name}</p> :

                            <p className="text-[#b28601] text-[200%]">{person.name}</p>
                        }
                    </li>
                ))}
            </ul>
            {
                index > 0 && 
            <button onClick={handleLeftClick} className='absolute left-0 top-[44%] transform -translate-y-1/2 w-[30px] h-[30px] text-white font-bold rounded-full bg-[#b28601] opacity-100 transition-opacity duration-300 hover:opacity-70 focus:opacity-70 active:opacity-70'>{l}</button>
            }
            {
                index < 2 && 
            <button onClick={handleRightClick} className='absolute right-0 top-[44%] transform -translate-y-1/2 w-[30px] h-[30px] text-white font-bold rounded-full bg-[#b28601] opacity-100 transition-opacity duration-300 hover:opacity-70 focus:opacity-70 active:opacity-70'>{r}</button>
            }
        </>
    );
}
