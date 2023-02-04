import "./Header.css";
import headerimg from "../assets/images/logo.svg";
export default function Header() {
  return (
    <header>
      <div>
        <img className="headerimg" src={headerimg} alt="kasa" />
      </div>
      <nav>
        <ul>
          <li>
            <a href=""> Accueil </a>
          </li>
		  <li>
            <a href=""> A propos </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
