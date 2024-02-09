

export function Plan({plan}) {

    return (
        <>
            {
                plan.map((element,index) => {
                    return (
                        <div key={index} className="flex gap-[20px] items-center text-white max-[770px]:flex-col">
                                <div>
                                    <img className="w-[20%] min-w-[70px]" src={element.src} alt="" />
                                </div>
                                <div >
                                    <p className="text-[#865701]"> {element.title} </p>
                                    <p className="text-[rgba(190,190,190,0.8)]"> {element.info} </p>
                                </div>
                        </div>
                    )
                }) 
            }
        </>
    )
}