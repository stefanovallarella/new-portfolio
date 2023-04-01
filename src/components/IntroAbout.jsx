import Avatar from "../assets/img/stefano-avatar.svg";

export default function IntroAbout() {
  return (
    <div className="intro__about-container">
      <div className="intro__about-content">
        <p className="intro__about-title intro__about-title--mobile">¡Hola!</p>
        <div className="intro__about-text">
          <p className="intro__about-title intro__about-title--desktop">
            ¡Hola!
          </p>
          <p className="intro__about-description">
            Soy Stefano, FullStack Developer establecido en Rosario, Argentina.
          </p>
        </div>

        <img className="intro__about-avatar" src={Avatar} />
      </div>
    </div>
  );
}
