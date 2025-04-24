import "./style.css";

const Cards = ({ produto }) => {

  return (
    <div className="card">
      <figure>
        <img src={produto.imagem} alt={produto.nome} />
      </figure>
      <div className="container-informacoes">
        <div>
          <h3>{produto.nome}</h3>
          <small>{produto.categoria}</small>
          <div><span className="prop-segmento">Segmento: {produto.segmento}</span></div>
          <p>{produto.descricao}</p>
        </div>
        <div className="detalhes-cards">
          <span>{new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(produto.preco)}</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;