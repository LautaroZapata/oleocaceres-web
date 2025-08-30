import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContentSectionContacto = () => {
    const form = useRef<HTMLFormElement>(null);
    const [enviado, setEnviado] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        if (!form.current) return;

        emailjs.sendForm(
            "TU_SERVICE_ID", // Reemplaza por tu Service ID
            "TU_TEMPLATE_ID", // Reemplaza por tu Template ID
            form.current,
            "TU_PUBLIC_KEY"   // Reemplaza por tu Public Key
        )
        .then(() => {
            setEnviado(true);
        }, (err) => {
            setError("Hubo un error al enviar el mensaje.");
        });
    };

    return (
        <div className="bg-stone-300 min-h-screen flex items-center">
            <div className="w-3/4 mx-auto">
                <h2 className="text-4xl font-bold mb-4">Contacto</h2>
                <p className="mb-8">Envíanos tu consulta y te responderemos a la brevedad.</p>
                {enviado ? (
                    <div className="text-green-700 font-bold">¡Mensaje enviado correctamente!</div>
                ) : (
                    <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white/60 p-8 rounded-xl shadow-lg w-full  mx-auto">
                        <label className="font-semibold">Nombre
                            <input type="text" name="user_name" required className="w-full p-2 rounded mt-2 bg-gray-200"/>
                        </label>
                        <label className="font-semibold">Email
                            <input type="email" name="user_email" required className="w-full p-2 rounded mt-2 bg-gray-200"/>
                        </label>
                        <label className="font-semibold">Mensaje
                            <textarea name="message" required className="w-full p-2 rounded mt-2 h-32 bg-gray-200"/>
                        </label>
                        <button type="submit" className="bg-yellow-500 text-white font-bold py-5 px-6 rounded hover:bg-yellow-600 transition w-2/4 mx-auto cursor-pointer ">Enviar</button>
                        {error && <div className="text-red-600">{error}</div>}
                    </form>
                )}
            </div>
        </div>
    );
}
