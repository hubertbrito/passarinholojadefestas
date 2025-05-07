import "./style.css";

const Cards = ({ produto }) => {
  // Número de WhatsApp do Brasil (DDD 31)
  const numeroWhatsApp = '553188220171';
  const mensagemWhatsApp = `Olá, gostaria de saber mais sobre o produto: ${produto.nome}`;
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemWhatsApp)}`;

  return (
    <div className="card">
      <figure>
        <img src={produto.imagem} alt={produto.nome} />
      </figure>
      <div className="container-informacoes">
        <div>
          <h4>{produto.nome}</h4>
          <small>{produto.categoria}</small>
          <div><span className="prop-segmento">Segmento: {produto.segmento}</span></div>
          <p>{produto.descricao}</p>
        </div>
        <div className="detalhes-cards">
          <a
            href={linkWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="botao-whatsapp"
          >
            Saiba Mais
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;