import Sugestoes from "./Sugestoes";

export default function Sidebar() {
  return (
    <div class="sidebar">
      <Usuario username="ricardoomartins_" fullName="Ricardo Martins" />
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
