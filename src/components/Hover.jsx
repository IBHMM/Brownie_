

export function Hover() {

    return(
        <section className="flex flex-col items-center justify-center w-full h-full rounded-[65px] z-10 absolute bg-[rgba(40,40,40,0.8)] animate-[wiggle_1s_ease-in-out_infinite]">
            <div className="w-[20%] h-[20%] bg-[#b28601] rounded-[50%] flex items-center justify-center">
                <img className="w-[35px] h-[35px]" src="../src/icons/search.svg" />
            </div>
            <p className="text-[#b28601] mt-1">
                THE STRET
            </p>
            <p className="text-[rgba(255,255,255,0.4)] mt-2">
                SIOUTIS MAURIS JUSTO
            </p>
        </section>
    )
}