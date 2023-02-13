import React from 'react';
import ReactDOM from 'react-dom/client';
/*import App from './components/App';*/
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./pages/app";
import ApartmentPage from './pages/ApartmentPage';
import About from "./pages/about";
import ErrorPage from './pages/error404';
import "../src/assets/css/main.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path:"/logement",
    element:<ApartmentPage/> ,
  },
  {
    path: "/about",
    element: <About/>,
    errorElement: <ErrorPage/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Si vous souhaitez commencer à mesurer les performances de votre application, passez une fonction
// pour consigner les résultats (par exemple : reportWebVitals(console.log))
// ou envoyer à un point de terminaison d'analyse. En savoir plus : https://bit.ly/CRA-vitals
reportWebVitals();
