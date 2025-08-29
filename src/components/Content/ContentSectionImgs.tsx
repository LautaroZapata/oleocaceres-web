import { useState } from "react";

export const ContentSectionImgs = () => {
    const cardsInfo = [
        {
            imgSrc: "/img004.jpg",
            alt: "Imagen 1",
            desc: "lorem ipsum dolor sit amet"
        },
        {
            imgSrc: "/img005.jpg",
            alt: "Imagen 2",
            desc: "lorem ipsum dolor sit ameasdddddddddddddddddddddddddddddt"
        },
    ];

    const [current, setCurrent] = useState(0);

    const prevImage = () => {
        setCurrent((prev) => (prev === 0 ? cardsInfo.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setCurrent((prev) => (prev === cardsInfo.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative h-dvh flex items-center justify-center bg-stone-300 overflow-hidden">
            {/* Controles en los bordes de la pantalla */}
            <button
                onClick={prevImage}
                className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/10 text-white w-16 h-16 flex items-center justify-center rounded-full z-20 border border-white/30 transition text-3xl hover:bg-white hover:text-black"
            >
                &#8592;
            </button>
            <button
                onClick={nextImage}
                className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/10 text-white w-16 h-16 flex items-center justify-center rounded-full z-20 border border-white/30 transition text-3xl hover:bg-white hover:text-black"
            >
                &#8594;
            </button>
            {/* Imagen y contenido centrados */}
            <div className=" flex flex-col items-center w-full h-full">
                <div className="relative w-full flex items-center justify-center object-cover">
                    <img
                        src={cardsInfo[current].imgSrc}
                        alt={cardsInfo[current].alt}
                        className="object-cover w-full h-full rounded-lg"
                    />
                </div>
                <p className="text-center mt-4">{cardsInfo[current].desc}</p>
            </div>
            <div className="absolute  bg-black/10 backdrop-blur-sm text-white px-6 py-4 rounded-lg text-center shadow-lg w-3/4 h-3/4">
                <p className="m-0">{cardsInfo[current].desc}</p>
            </div>
        </div>
    );
};
