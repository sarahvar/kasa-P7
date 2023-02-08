import homeimg from "../../assets/images/accueil-banner.jpg";

export default function Homebanner() {
  return (
    <div className="layout">
      <h1>Chez vous, partout et ailleurs</h1>
      <img src={homeimg} alt="ocean " />
    </div>
  );
}
