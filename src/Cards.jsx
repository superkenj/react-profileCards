import "./Cards.css";

export function Cards({ photo, fullname, email }) {
  return (
    <div className="cardStyle">
      <img src={photo} alt="Profile" className="imageStyle" />
      <p>
        <strong>{fullname}</strong>
      </p>
      <p>
        <a href={`mailto:${email}`} className="emailLink">
          {email}
        </a>
      </p>
    </div>
  );
}
