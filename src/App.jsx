import './App.css';
import { NavbarComponent, ItemListContainerComponent } from './componentes';


//GREETING - NOMBRE DE LA MARCA

function Welcome(props) {
  return <h1>Bienvenido a, {props.brand}</h1>;
}


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Welcome brand="PetShop Mi Mascota Preferida" />
      <ItemListContainerComponent marcasContainer={"Todas las marcas"}/>

    </div>
  );
}

export default App;
