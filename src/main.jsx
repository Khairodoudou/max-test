import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Test from "./Test.jsx";
import "./index.css";
import axios from "axios";

function RootComponent() {
  const [isNorthAfricanUser, setIsNorthAfricanUser] = useState(null);

  useEffect(() => {
    const checkLocation = async () => {
      try {
        // Appel à l'API ip-api.com
        const response = await axios.get("http://ip-api.com/json/");
        console.log("Response from API:", response.data); // Log des données reçues
        const countryCode = response.data.countryCode; // Récupérer le code du pays

        // Vérifiez si le code du pays est pour l'Algérie (DZ), la Tunisie (TN) ou le Maroc (MA)
        if (
          countryCode === "DZ" ||
          countryCode === "TN" ||
          countryCode === "MA"
        ) {
          setIsNorthAfricanUser(true);
        } else {
          setIsNorthAfricanUser(false);
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération de l'adresse IP : ",
          error
        );
        setIsNorthAfricanUser(false); // Par défaut, afficher <Test /> en cas d'erreur
      }
    };

    checkLocation();
  }, []);

  if (isNorthAfricanUser === null) {
    // Afficher une page de chargement pendant que la vérification a lieu
    return <div>Chargement...</div>;
  }

  return isNorthAfricanUser ? <App /> : <Test />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RootComponent />
  </StrictMode>
);
