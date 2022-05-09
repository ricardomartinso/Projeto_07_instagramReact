import React from "react";

export default function Posts() {
  return (
    <div class="posts">
      {postObject.map((post) => (
        <Post
          usernameTop={post.usernameTop}
          imgTop={post.imgTop}
          imgContent={post.imgContent}
          imgBottom={post.imgBottom}
          likedFrom={post.likedFrom}
          likedMany={post.likedMany}
        />
      ))}
    </div>
  );
}
const VALOR_INICIAL_CORACAO = "heart-outline";
const VALOR_INICIAL_COR = "black";

function Post(props) {
  const [coracao, setCoracao] = React.useState(VALOR_INICIAL_CORACAO);
  const [cor, setCor] = React.useState(VALOR_INICIAL_COR);

  function likePost(heartOutline, corPadrao) {
    if (coracao === heartOutline && cor === corPadrao) {
      setCoracao("heart");
      setCor("red");
    } else {
      setCoracao("heart-outline");
      setCor("black");
    }
  }

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imgTop} />
          {props.usernameTop}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img
          src={props.imgContent}
          onClick={() => likePost("heart-outline", "black")}
        />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              name={coracao}
              onClick={() => likePost("heart-outline", "black")}
              style={{ color: cor }}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imgBottom} />
          <div class="texto">
            Curtido por <strong>{props.likedFrom} </strong> e outras
            <strong> {props.likedMany}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

const postObject = [
  {
    usernameTop: "meowed",
    imgTop: "assets/img/meowed.svg",
    imgContent: "assets/img/gato-telefone.svg",
    imgBottom: "assets/img/respondeai.svg",
    likedFrom: "respondeai",
    likedMany: "101.529 pessoas",
  },
  {
    usernameTop: "barked",
    imgTop: "assets/img/barked.svg",
    imgContent: "assets/img/dog.svg",
    imgBottom: "assets/img/adorable_animals.svg",
    likedFrom: "adorable_animals",
    likedMany: "99.159 pessoas",
  },
];
