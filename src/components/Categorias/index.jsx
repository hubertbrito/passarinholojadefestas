import "./style.css";


import icone1 from "../../assets/toalhas.png";
import icone2 from "../../assets/juninos-fantasias.png";
import icone3 from "../../assets/icone-temas.png";
import icone4 from "../../assets/icone-pecas.png";
import icone5 from "../../assets/icone-fantasias.png";
import icone6 from "../../assets/sobremesa.png";
import icone7 from "../../assets/velas-biscuit.png"; 
import icone8 from "../../assets/casamento.png";


const Categorias = ({ handleFiltro, botaoClicado }) => {
  return (
    <section className="secao-categorias">
      <div className="container-botoes">

        <button
          className={botaoClicado === "Casamentos" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Casamentos")}
        >
          <img src={icone8} alt="ícone" />Casamentos
        </button>

        <button
          className={botaoClicado === "Juninos e Fantasias" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Juninos e Fantasias")}
        >
          <img src={icone2} alt="ícone" />Juninos e Fantasias
        </button>

        <button
          className={botaoClicado === "Temas e Decorações" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Temas e Decorações")}
        >
          <img src={icone3} alt="ícone" />Temas e Decorações
        </button>
        <button
          className={botaoClicado === "Decoração/peças" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Decoração/peças")}
        >
          <img src={icone4} alt="ícone" />Decoração/peças
        </button>

        <button
          className={botaoClicado === "Bolo fake" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Bolo fake")}
        >
          <img src={icone5} alt="ícone" />Bolo fake
        </button>

        <button
          className={botaoClicado === "Toalhas" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Toalhas")}
        >
          <img src={icone1} alt="ícone" />Toalhas
        </button>

        <button
          className={botaoClicado === "Buffet" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Buffet")}
        >
          <img src={icone6} alt="ícone" />Buffet
        </button>

        <button
          className={botaoClicado === "Velas de Biscuit" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Velas de Biscuit")}
        >
          <img src={icone7} alt="ícone" />Velas de Biscuit
        </button>
      </div>
    </section>
  );
};

export default Categorias;