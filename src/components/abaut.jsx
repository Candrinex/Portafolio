import foto from '../assets/foto.png'
import Progreso from './progreso';

function About() {
    const info=[{
        componente:'Sobre mi',
        texto:'I am a passionate full-stack developer with a focus on building modern and responsive web applications. With a strong foundation in both frontend and backend technologies, I strive to create seamless and efficient user experiences.',
        html:'HTML:',
        css:'CSS:',
        react:'REACT:',
        javascript:'JAVASRIPT:',
        sql:'SQL',
        python:'PYTHON',
        django:'DJANGO',
        dos:'Años de experiencia',
        diez:'Proyectos',
        diez2:'Clientes felices'
    }]
    return(
        <div className='about'>
            <h1>{info[0].componente}</h1>
            <div className='about-orden'>
                <img className='about-foto' src={foto}></img>
                <div className='about-text'>
                    <h5>{info[0].texto}</h5>
                    <br></br>
                    <h5>{info[0].python}</h5>  <Progreso variant="info" numero={96}></Progreso>
                    <h5>{info[0].sql}</h5>  <Progreso variant="info" numero={95}></Progreso>
                    <h5>{info[0].django}</h5>  <Progreso variant="info" numero={95}></Progreso>
                    <h5>{info[0].html}</h5>  <Progreso variant="info" numero={94}></Progreso>
                    <h5>{info[0].css}</h5>  <Progreso variant="info" numero={80}></Progreso>
                    <h5>{info[0].react}</h5>  <Progreso variant="info" numero={50}></Progreso>
                    <h5>{info[0].javascript}</h5>  <Progreso variant="info" numero={40}></Progreso>
                    <div className='orden2'>
                        <div>
                            <h5>2+</h5><h6>{info[0].dos}</h6>
                        </div>
                        <div>
                            <h5>10+</h5><h6>{info[0].diez}</h6>
                        </div>
                        <div>
                            <h5>10+</h5><h6>{info[0].diez2}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;