/* 
Simple utility box component for re-using things like a close button,
not really part of this module but thought why not add this as well, with the passed down onClose()
*/

export function CloseButton({ onClick }: { onClick: () => void }) {

    return (
        <div className="absolute top-5 right-5">
            <button
                className="relative h-10 aspect-square flex justify-center items-center bg-white [&>*]:bg-black rounded-full border-black border-2 hover:bg-black hover:[&>*]:bg-white transition duration-300 cursor-pointer"
                onClick={onClick}
                aria-label="Close">
                <span className="absolute w-2/3 h-[2.5px] rotate-45 rounded" />
                <span className="absolute w-2/3 h-[2.5px] -rotate-45 rounded" />
            </button>
        </div>
    )
}