import fbico from "./assets/fbico.png";
import instaico from "./assets/instaico.png";

export function Footer() {
  return (
    <>
      <p>Copyright 2025</p>
      <a href="http://www.facebook.com" target="_blank">
        <img src={fbico} />
      </a>
      <a href="http://www.instagram.com" target="_blank">
        <img src={instaico} />
      </a>
    </>
  );
}
