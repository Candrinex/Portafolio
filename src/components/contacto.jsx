
function Contacto() {
    return(
        <div className="contacto"> 
            <h1>Contactame</h1>
            <div className="orden3">
                <div className="info">
                    <h2>Hablemos</h2>
                    <br></br>
                    <p>Hola!, tengo más proyectos que puedes ver en mi GitHub :D</p>
                    <a href="https://github.com/Candrinex"><img src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000" alt="Github" /> Candrinex</a>
                    <p>zizzettasara@gmail.com</p>
                    <p>+3541 335889</p>
                    <p>Córdoba, Argentina</p>
                    <a href="https://www.instagram.com/sara_zizz/"><img class="ima" src="https://img.icons8.com/?size=100&id=85154&format=png&color=000000" alt="Instagram" /> @Sara_Zizz</a>
                </div>
                <div className="formulario">
                    <label>Tu nombre:</label>
                    <input></input>
                    <label>Email:</label>
                    <input></input>
                    <label>Mensaje:</label>
                    <input></input>
                    <br></br>
                    <button>Enviar</button>
                </div>
            </div>
            <div className='linea'></div>
        </div>
    )
}
export default Contacto;