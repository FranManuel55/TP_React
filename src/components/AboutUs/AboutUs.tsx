import { Button, Card} from "react-bootstrap";
import './AboutUs.css';
const AboutUs = () => {
    return (
      <>
      <div className="nosotros">
        <h2> ¿Quienes Somos? </h2>
        <p> En Pet World Shop, compartimos una profunda pasión por los amigos peludos, emplumados y escamosos que llenan nuestros hogares de amor y alegría. Desde que abrimos nuestras puertas, nos hemos comprometido a brindar a nuestras comunidades el mejor cuidado y atención para sus queridas mascotas. </p>
        <h3> Nuestra Historia</h3> 
        <p> Nuestra historia comenzó con un amor inquebrantable por los animales. Pet World Shop, un amante de los animales de toda la vida, decidió convertir su pasión en una misión. Con el deseo de proporcionar un lugar donde los dueños de mascotas pudieran encontrar todo lo que necesitaban para sus amigos peludos, Pet World Shop nació con un propósito claro: ser más que una tienda, ser un recurso y un refugio para los amantes de los animales.</p>     
        <h3> Nuestro Compromiso </h3>
        <p> En Pet Wold Shop, nuestro compromiso es ofrecer a nuestros clientes y sus mascotas la más alta calidad en productos y servicios. Nos esforzamos por mantener un inventario diverso de alimentos premium, juguetes, accesorios y suministros esenciales que se adaptan a las necesidades individuales de cada mascota. Además, nuestro personal altamente capacitado está siempre dispuesto a brindar asesoramiento y orientación para garantizar que sus amigos peludos estén felices y saludables. </p>
      </div>
      <div className="container">
      <div className="container2">
          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src="src/assets/images/Correa1.jpg" />
            <Card.Body>
              <Card.Title>Correa de Cuero</Card.Title>
              <Card.Text>
                Correa de Cuero Sintetico de alta Resistencia
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
      </div>
      <div className="container2">
          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src="src/assets/images/Pretal1.webp" />
            <Card.Body>
              <Card.Title>Pretal para Gatos</Card.Title>
              <Card.Text>
                Pretal para gatos de 1m de alta resistencia, con tecnologia Sproft
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
      </div>
      <div className="container2">
          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src="src/assets/images/Poppykong.png" />
            <Card.Body>
              <Card.Title>Poppy Kong</Card.Title>
              <Card.Text>
                Juguete Siliconado de entrenamiento
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
      </div>
      <div className="container2">
          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src="src/assets/images/rascador1.jpg" />
            <Card.Body>
              <Card.Title>Rascador Giratorio</Card.Title>
              <Card.Text>
                Rascador de 40cm, con base de madera Australiana
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
      </div>
      </div>
      </>
    )

}

export default AboutUs;