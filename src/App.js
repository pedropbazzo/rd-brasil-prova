import React from 'react'; 
import { Provider } from 'react-redux';
import store from './store';
import logo from './assets/logo.png';
import mobile from './assets/mobile.png';
import desktop from './assets/desktop.png';
import tablet from './assets/tablet.png';
import logo_drogaraia from './assets/logo_drogaraia.png';
import logo_drogasil from './assets/logo_drogasil.png';
import logo_farmasil from './assets/logo_farmasil.png';
import logo_univers from './assets/logo_univers.png';
import logo_4bio from './assets/logo_4bio.png';
import { Background } from './styles';
import Global from "./styles/global";
import Home from "./pages/Home/Home";
import { HTML } from './styles';

const lorem =
  "Quando pressionado o botão Leia mais... o restante da informação deverá aparecer em...";

  const data = [

{
      id: Math.random(),
      title: "Desktop",
      text: lorem,
      bgColor: "#EDA9A9"
    },

    {
      id: Math.random(),
      title: "Tablet",
      text: lorem,
      bgColor: "#FCDA92"
    },
    {
      id: Math.random(),
      title: "Mobile",
      text: lorem,
      bgColor: "#9C8CB9"
    },
  ];


export default function App() {
 return (
   <Provider store={store}>
     <Background>
           <div className="row">
        <div className="logo">
          <img src={logo} />
        </div>
      </div>
      <HTML>
      <div className="ul"><center>
      <ul>HTML</ul>
      <ul>CSS</ul>
      <ul>Javascript</ul>
      <ul>React</ul>
      <ul>Styled Components</ul>
      </center></div></HTML>
      <>
      <Global />
      <img src={desktop} />
      <center><img src={tablet} /></center>
      <img src={mobile} />
      <Home boxData={data} />
    </>
    <img src={logo_drogaraia} />
    <img src={logo_drogasil} />
    <img src={logo_farmasil} />
    <img src={logo_univers} />
    <img src={logo_4bio} />



</Background>
  </Provider>

  
 );
}
