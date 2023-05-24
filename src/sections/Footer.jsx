import React from "react";

const Footer = () => {
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el comentario
  };

  return (
    <div className="bg-gray-800 text-white py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center w-[80vw] mx-auto">
        <div>
          <h2 className="text-lg font-bold text-app-accent-500">Enlaces</h2>
          <ul className="mt-4">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Experiencia</a>
            </li>
            <li>
              <a href="#">Proyectos</a>
            </li>
            <li>
              <a href="#">Footer</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold text-app-accent-500">Redes Sociales</h2>
          <ul className="mt-4">
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold text-app-accent-500">Información de Contacto</h2>
          <p className="mt-4">Dirección: San juan de Pasto, Colombia</p>
          <p>Teléfono: +57 3128780111</p>
          <p>Email: sebasjoob21@gmail.com</p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2 text-app-accent-500">Comentarios</h2>
          <form onSubmit={handleCommentSubmit}>
            <textarea
              className="w-full h-20 p-2 border border-gray-300 rounded"
              placeholder="Escribe tu comentario..."
            ></textarea>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-2 rounded"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
