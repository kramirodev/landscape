import imagemDev from "./imagens/dev.png"
import iconeGithub from "./imagens/github.png"
import iconeLinkedin from "./imagens/linkedin.png"

function App() {
  return (
    <main>
      <section>
        <p>
          Olá! Seja bem-vindo(a) ao meu portfólio!
        </p>

        <p>Meu nome é <span>Susan(nome social)</span> e eu sou um desenvolvedor WEB.</p>

        <div id="redes-sociais">
          <a href="#">
            <img src={iconeGithub} alt="" srcset="" id="imagens"></img>
          </a>
          <a href="#">
            <img src={iconeLinkedin} alt="" srcset="" id="imagens"></img>
          </a>
        </div>

        <a href="#sobreMim">
          <button id="botao">Conheça mais sobre mim</button>
        </a>
      </section>

      <section>
        <img id="imagemDev" src={imagemDev} alt=""  id="imagens2"/>
      </section>
    </main>
  )
}

export default App
