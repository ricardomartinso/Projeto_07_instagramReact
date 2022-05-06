import Sugestoes from "./Sugestoes";

export default function Sidebar() {
  let username = prompt("Qual o seu username?");
  let nameLastname = prompt("Qual o seu nome e sobrenome?");
  return (
    <div class="sidebar">
      <Usuario username={username} fullName={nameLastname} />
      <Sugestoes />
      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2022 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}

function Usuario(props) {
  return (
    <div class="usuario">
      <img src="assets/img/catanacomics.svg" alt="" />
      <div class="texto">
        <strong>{props.username}</strong>
        {props.fullName}
      </div>
    </div>
  );
}
