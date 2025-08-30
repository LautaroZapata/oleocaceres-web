export const ContentHome = () => {
    const clientes = [
        { img: "/anp.png", alt: "Cliente 1" },
        { img: "/bomberos.png", alt: "Cliente 2" },
        { img: "/logoafe.png", alt: "Cliente 3" },
        { img: "/logoANCAP.png", alt: "Cliente 4" },
        { img: "/logoArmadaNacional.png", alt: "Cliente 5" },
        { img: "/logoicanelones.png", alt: "Cliente 6" },
        { img: "/logoiColonia.png", alt: "Cliente 7" },
        { img: "/logoIM.png", alt: "Cliente 8" },
        { img: "/logoiMaldonado.png", alt: "Cliente 9" },
        { img: "/logoInstitutoAntartico.png", alt: "Cliente 10" },
        { img: "/logoiPaysandu.png", alt: "Cliente 11" },
        { img: "/logoiSalto.png", alt: "Cliente 12" },
        { img: "/ute.png", alt: "Cliente 13" },
    ];

    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
            {/* Imagen de fondo */}
            <img
                src="/img006.jpg"
                alt="Imagen"
                className="absolute inset-0 w-full h-full object-cover -z-10"
            />
            {/* Overlay negro con baja opacidad */}
            <div className="absolute inset-0 bg-black opacity-80 -z-10"></div>
            {/* Texto centrado */}
            <h1 className="text-9xl text-center w-3/4 text-white z-10 mt-32 mb-16">
                Tu <b className="text-yellow-500">SOLUCIÓN</b> en Oleohidráulica
            </h1>
            {/* Footer de clientes */}
            <div className="absolute bottom-12 w-3/4 z-10">
                <h3 className="text-xl text-white mb-6 text-center"><i>Nuestros Clientes</i></h3>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {clientes.map((cliente, idx) => (
                        <img
                            key={idx}
                            src={cliente.img}
                            alt={cliente.alt}
                            className="h-12 w-auto object-contain bg-white rounded-lg p-2 shadow"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
