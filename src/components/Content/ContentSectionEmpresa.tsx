import { Fade } from "react-awesome-reveal";

export const ContentSectionEmpresa = () => {
    const cards = [
        {
            img: "undraw_navigation_0q48.svg",
            text: "La planta industrial se encuentra ubicada en Montevideo, Uruguay. Esta posee 1100 m2 construidos, donde se encuentran los más avanzados elementos de diagnóstico disponibles en el país para atender las necesidades en el área de oleohidráulica."
        },
        {
            img: "undraw_construction-workers_z99i.svg",
            text: "Contamos con un banco de pruebas, marca Hidrosistemas, potenciado por un motor de 60 HP y otro de 5 HP que tiene la posibilidad de operar en tres rangos de velocidad, 850, 1050 y 1450 rpm, lo que le permite analizar la, casi, totalidad de la maquinaria que opera en el mercado nacional. Dispone, además, de banco de pruebas portátiles que permiten realizar evaluaciones en campo."
        },
        {
            img: "undraw_qa-engineers_kgp8.svg",
            text: "El personal se encuentra supervisado por un técnico en oleohidráulica con postgrados internacionales, que ha sido profesor del Instituto de Capacitación Profesional (COCAP) a nivel nacional."
        }
    ];

    return (
        <div className="bg-stone-300 w-full">
            <Fade triggerOnce direction="up" duration={1500}>
                <div className="grid grid-cols-2 items-center min-h-screen w-3/4 mx-auto">
                    <div className="text-center mx-auto">
                        <h2 className="text-9xl font-bold">Empresa</h2>
                    </div>
                    <div className="text-start mx-auto my-auto">
                        <p className="text-4xl">
                            <b><i>OLEOHIDRÁULICA CÁCERES</i></b> fundada hace más de 20 años, se presenta como
                            una empresa nacional especializada en oleohidráulica. Actualmente
                            sus principales actividades son: <i>importación</i>, <i>fabricación</i> y
                            <i> reparación</i> de máquinas con componentes hidráulicos…
                        </p>
                    </div>
                </div>
            </Fade>
            <Fade triggerOnce direction="up" duration={1500} delay={200}>
                <div className="w-full mx-auto mt-12 p-8 rounded-lg">
                    <div className="flex justify-center w-full">
                        <div className="grid grid-cols-3 gap-16 items-center py-4">
                            {cards.map((card, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col bg-white/60 p-8 h-128 w-full items-center justify-around rounded-xl shadow-lg"
                                >
                                    <img src={card.img} alt="Imagen" className="h-64 mb-4" />
                                    <p className="text-lg text-start my-4">
                                        <i>{card.text}</i>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};
