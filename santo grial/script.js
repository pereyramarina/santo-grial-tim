// Función para cargar contenido según la ruta
function loadContent() {
    const content = document.getElementById('content');
    const hash = window.location.hash || '#home';
  
    switch (hash) {
      case '#home':
        content.innerHTML = `
          <h2>Bienvenido al Mundo de Burton</h2>
          <p>Entra en un universo oscuro y surrealista, donde la fantasía se mezcla con lo macabro.</p>
          <img src="/img/tim-burton-the-medizine-pelis-500x333.jpg" alt="Mundo de Burton" style="width: 100%;">`;
        break;
      case '#services':
        content.innerHTML = `
          <h2>Servicios Inspirados</h2>
          <p>Ofrecemos diseño gráfico, animaciones y desarrollos web con una estética inspirada en el estilo único de Tim Burton.</p>
          <img src="tim_burton_style_image2.jpg" alt="Servicios" style="width: 100%;">`;
        break;
      case '#contact':
        content.innerHTML = `
          <h2>Contáctanos</h2>
          <p>¿Tienes una idea oscura y creativa? Escríbenos y juntos daremos vida a tus proyectos.</p>
          <img src="tim_burton_style_image3.jpg" alt="Contacto" style="width: 100%;">`;
        break;
      default:
        content.innerHTML = `
          <h2>Página no encontrada</h2>
          <p>Lo sentimos, esta página no existe en nuestro oscuro universo.</p>`;
    }
  }
  
  // Cargar contenido cuando la página se carga
  window.addEventListener('load', loadContent);
  
  // Cargar contenido cuando la ruta cambia
  window.addEventListener('hashchange', loadContent);
  