import React from "react";
import "./App.css";

function App() {

  return (
    <div id="row" style={{ height: "100vh", width: "100vw" }}>
      <div className="titulo">
        <img src="/media/banner.webp" alt="banner" />
        <div className="titulo-texto">
          <p><u>ESPECIALISTAS EN DISENO Y CONSTRUCCION DE ESTRUCTURAS EN CONCRETO Y ACERO</u></p>
          <p>SPECIALISTS IN DESIGN AND CONSTRUCTION OF CONCRETE AND STEEL STRUCTURES</p>
        </div>
      </div>

      <div className="plano">
        <img src="/media/plano.webp" alt="Plano" />
      </div>

      <div className="image-gallery" id="gallery">
        <img src="/media/img1.webp" alt="Mampostería" />
        <img src="/media/img2.webp" alt="Losa" />
        <img src="/media/img3.webp" alt="Bombeo bodega" />
      </div>

      <div className="texto-intermedio">
        <img src="/media/Banner_2.webp" alt="banner" />
        <img src="/media/img7.webp" alt="Render bodega" />
      </div>

      <div className="image-gallery" id="gallery">
        <img src="/media/img4.webp" alt="Estructura Bodega" />
        <img src="/media/img5.webp" alt="Fachada" />
        <img src="/media/img6.webp" alt="Techo bodega" />
      </div>

      <div className="objetivo">
        <div className="Titulo-objetivo">
          <p><b><u>OBJETIVOS DE NUESTRO SISTEMA</u></b></p>
          <p><b>ADVANTAGES OF OUR SYSTEM</b></p>
        </div>
        <div className="lista-objetivos">
          <p> <b>1-</b> PRECISION EN LAS CANTIDADES DE MATERIALES Y PRESUPUESTO DEL PROYECTO / PRECISION IN THE QUANTITIES OF MATERIALS AND WORK BUDGET.</p>
          <p> <b>2-</b> CONTROL TECNICO DE CALIDAD / TECHNICAL QUALITY CONTROL.</p>
          <p> <b>3-</b> PRECIO CERRADO EN LA ETAPA CONSTRUCTIVA DEL PROYECTO / TOTAL COST.</p>
          <p> <b>4-</b> REDUCCION DE TIEMPOS DE EJECUCION ENTRE UN 30% Y UN 50% / REDUCTION OF EXECUTION TIMES BETWEEN 30% AND 50%.</p>
          <p> <b>5-</b> COMPROMISO CON EL MEDIO AMBIENTE / COMMITMENT TO THE ENVIROMENT.</p>
          <p> <b>6-</b> INCORPORAMOS UN SISTEMA DE DISENO Y CONSTRUCCION BIM / WE INCORPORATE A BIM DESIGN AND CONSTRUCTION SYSTEM.</p>
        </div>
      </div>

      <div className="footer">
        <img src="/media/img8.webp" alt="Render final" />
          <div className="información">
            <div className="parrafo">
              <p>DISENADORES ESTRUCTURALES</p>
              <p><u>STRUCTURAL DESIGNERS</u></p>
              <p>ESTUDIO DE ARQUITECTURA</p>
              <p><u>ARCHICTECTURE STUDIO</u></p>
              <p>CONSTRUCTORES DE ESTRUCTURAS</p>
              <p><u>STRUCTURE BUILDERS</u></p>
            </div>
            <div className="contacto">
              <a href="https://www.instagram.com/terraniaconstructora/" target="_blank" rel="noreferrer">@TERRANIACONSTRUCTORA</a>
              <p>+57 312 636 5298</p>
              <p>+57 305 227 5731</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
