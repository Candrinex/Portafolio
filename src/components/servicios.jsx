import Cartas from './cartas.jsx'

function Servicios() {
    const info=[{
        titulo1:'Diseños Web',
        texto1:'Creating visually appealing and user-friendly web designs.',
        read:'Read more',
    }]
    return(
        <>
            <div className="locura">
                <div className="servi">
                </div>
            </div>
        <div className="servicios">
            <div className='movida'>
                <h1>Mis servicios:</h1>
                <div className='cartas'>
                <Cartas titulo={'Diseños Web'} texto={'Creating visually appealing and user-friendly web designs.'} link={'read more'}></Cartas>
                <Cartas titulo={'Diseños Web'} texto={'Creating visually appealing and user-friendly web designs.'} link={'read more'}></Cartas>
                <Cartas titulo={'Diseños Web'} texto={'Creating visually appealing and user-friendly web designs.'} link={'read more'}></Cartas>
                </div>
                <div className='cartas'>
                <Cartas titulo={'Diseños Web'} texto={'Creating visually appealing and user-friendly web designs.'} link={'read more'}></Cartas>
                <Cartas titulo={'Diseños Web'} texto={'Creating visually appealing and user-friendly web designs.'} link={'read more'}></Cartas>
                <Cartas titulo={'Diseños Web'} texto={'Creating visually appealing and user-friendly web designs.'} link={'read more'}></Cartas>
                </div>
            </div>
        </div>
        </>
    )
}
export default Servicios