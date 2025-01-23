import "./bio.css";

export default function Bio() {
  return (
    <header>
      <div className="bio-upside">
        <div className="bio-image">
          <img className="kuromi" src="src\assets\kuromi.png" alt="witch kuromi" />
        </div>

        <div className="bio-text">
          <h1>Alice Campos</h1>
          <p>Full-stack dev 🦆</p>
        </div>
      </div>
      <div className="bio-downside">
        <div className="bio-links">
            <button className="button-github" onClick={() => window.open('https://github.com/alicecamposdev', '_blank')}>
              <p>Github</p>
            </button>
            <button className="button-linkedin" onClick={() => window.open('https://linkedin.com/in/alicecamposdev', '_blank')}>
              <p>Linkedin</p>
            </button>
            <button className="button-youtube" onClick={() => window.open('https://www.youtube.com/@alicecamposdev', '_blank')}>
              <p>YouTube</p>
            </button>
        </div>
        <div className="bio-info">
          <p>idioms: English and portuguese</p>
          <p>Pronouns: She/Her</p>
          <p>Location: Brazil</p>
          <p>Age: 21yo</p>
        </div>
      </div>
    </header>
  );
}
