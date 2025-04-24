import "./style.css";
import Lupa from '../../assets/lupa.png'

const CampoDeBusca = ({ textoBuscaDigitado, handleBusca }) => {
  return (
    <div className="barra-de-pesquisa">
      <img src={Lupa} alt="icone"/>
      <input
        type="text"
        value={textoBuscaDigitado}
        onChange={(event) => handleBusca(event.target.value)}
        placeholder="Pesquise aqui por nome dos items de festa"
      />
    </div>
  );
};

export default CampoDeBusca;