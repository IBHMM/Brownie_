

export function Slide({person}) {
    return(
        <>
           
            <div className="pp flex text-center items-center justify-center p-3 rounded-[50%]"> 
                <img className="rounded-[50%] max-[400px]:w-[50%]" src={person.src} alt="" />
            </div>
            <p className="">
                {person.position}
            </p>
            <p>
                {person.about}
            </p>
            <p>
                {person.name}
            </p>
        </>
    )
}