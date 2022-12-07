import Card from 'react-bootstrap/Card';
import imageWelcomeCard from "../assets/WelcomeCard.png"
import SideBarMovile from './SideBarMovile';

function WelcomeCard() {
  return (
    <Card className="text-white w-90 p-1 bg-transparent">
      <Card.Img className="cardImg" src={imageWelcomeCard} alt="Card image" /> 
      <Card.ImgOverlay>
        <Card.Title id="uncontrolledDropdown">Bienvenidx</Card.Title>
        <Card.Text id="uncontrolledDropdown" className="w-50">
          Conclusiones y estadisticas de nuestra pagina web
        </Card.Text>
        <Card.Text id="uncontrolledDropdown">Actualizado 08-2022</Card.Text>
        <SideBarMovile></SideBarMovile>
      </Card.ImgOverlay>
    </Card>
  );
}

export default WelcomeCard;