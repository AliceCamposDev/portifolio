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
            <button className="button-github">
              <p>Github</p>
            </button>
            <button className="button-linkedin">
              <p>Linkedin</p>
            </button>
            <button className="button-youtube">
              <p>YouTube</p>
            </button>
        </div>
        <div className="bio-info">
          <p>Pronouns: She/Her</p>
          <p>Location: Brazil</p>
          <p>Age: 21yo</p>
          <p>Hobbies: TTRPG and programming</p>
        </div>
      </div>
    </header>
  );
}
