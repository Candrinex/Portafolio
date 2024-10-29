import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dulce from '../assets/DulcesHelados.png'
import Bob from '../assets/BobEsponja.png'
import Calcu from '../assets/Calculadora.png'

function Carta({link,foto,titulo,texto}) {
  return (
    <Card className='proyecto-card'>
      <Card.Img variant="top" src={foto} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {texto}
        </Card.Text>
        <Button variant="dark" href={link}>Repositorio de GitHub</Button>
      </Card.Body>
    </Card>
  );
}


function Proyectos() {
  const info=[{
    titulo:'Dulces Helados',
    titulo2:'CalcuBob',
    titulo3:'Calculadora',
    texto:'Página de una heladería ficticia utilizando Python, Django y más',
    texto2:'Calculadora de bob espoja utilizando html, css y js',
    texto3:'Calculadora funcion lineal utilizando js, react y más',
  }]
    return(
        <div className="servicios">
            <div className="proyectos">
                <h1>Algunos de mis proyectos</h1>
                <div className='ordennn'>
                  <Carta foto={Dulce} titulo={info[0].titulo} texto={info[0].texto} link={'https://github.com/Candrinex/Heladeria'}></Carta>
                  <Carta foto={Bob} titulo={info[0].titulo2} texto={info[0].texto2} link={'https://github.com/Candrinex/Calculadora'}></Carta>
                  <Carta foto={Calcu} titulo={info[0].titulo3} texto={info[0].texto3} link={'https://github.com/Candrinex/Funcion-lineal'} ></Carta>
                </div>
            </div>
            <div className='fondo'></div>
        </div>
    )
}
export default Proyectos;