import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
function App() {
  //dok se ne doda react router, da se promijeni stranica samo treba promijenit npr. Reservation u Home, Login ili Register
  return <Reservation />;
}

export default App;
