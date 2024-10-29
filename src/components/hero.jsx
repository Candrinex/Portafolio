import video from '../assets/Video1.mp4';
import foto from "../assets/foto.png";
import About from "./abaut";
import Servicios from "./servicios";
import Proyectos from './proyectos';
import Contactos from './contacto';


function Hero() {
    const info=[{
        Nombre:'Sara Zizzetta, programador Full-stak',
        eslogan:'Me especializo en base de datos, y diseño web.',
    }]
    return(
        <>
            <video src={video} autoplay="true" muted="true" loop="true" ></video>
            <div className='orden'>
                <img className='foto' src={foto} alt="" />
                <h1 className='letras'>{info[0].Nombre}</h1>
                <h4>{info[0].eslogan}</h4>
            </div>
            <About></About>
            <Servicios></Servicios>
            <Proyectos></Proyectos>
            <Contactos></Contactos>
        </>
    )
}
export default Hero