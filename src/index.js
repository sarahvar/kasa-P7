import React from "react";
import ReactDOM from "react-dom/client";
/*import App from './components/App';*/
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Logements from "./pages/Logements";
import About from "./pages/about";
import ErrorPage from "./pages/error404";
import "../src/assets/css/main.css";
import Logement from "./pages/Logement";

//Créer une const router avec createBrowserRouter qui utilise l' API DOM History pour mettre à jour l'URL et gérer la pile d'historique.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Logements />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/logement/:id",
    element: <Logement />,
    errorElement: <ErrorPage />,
  },
]);
//API de données fourni par react router pour créer les routes
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Si vous souhaitez commencer à mesurer les performances de votre application, passez une fonction
// pour consigner les résultats (par exemple : reportWebVitals(console.log))
// ou envoyer à un point de terminaison d'analyse. En savoir plus : https://bit.ly/CRA-vitals
reportWebVitals();
