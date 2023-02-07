import homeimg from "../../assets/images/accueil-banner.jpg";

export default function Homebanner() {
	return (
		<div className="layout">
			<img className="homeimg" src={homeimg} alt="ocean " />

			<h1 className="title-ocean">Chez vous, partout et ailleurs</h1>
		</div>
	);
}