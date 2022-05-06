export default function Sugestoes() {
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {arraySugestions.map((sugestao) => (
        <Sugestao username={sugestao.username} url={sugestao.url} />
      ))}
    </div>
  );
}

function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.url} alt="" />
        <div class="texto">
          <div class="nome">{props.username}</div>
          <div class="razao">Segue você</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}
const arraySugestions = [
  {
    username: "bad.vibes.memes",
    url: "assets/img/bad.vibes.memes.svg",
  },

  { username: "chibirdart", url: "assets/img/chibirdart.svg" },

  {
    username: "razoesparaacreditar",
    url: "assets/img/razoesparaacreditar.svg",
  },

  { username: "adorable_animals", url: "assets/img/adorable_animals.svg" },

  { username: "smallcutecats", url: "assets/img/smallcutecats.svg" },
];
