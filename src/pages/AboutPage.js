
import me from './me.jpg'



const AboutPage = () => {







    return (
        <>
            <div className="About">

                <div className="About__title">
                    <h1 className="About__title-h1">Juan Bernal </h1>
                    <br />
                    <h2 className="About__title-h2"> Full stack Developer by Make It Real</h2>
                </div>

                <div className="About__content">

                    <div className="About__image">
                        <img src={me} alt="" className="About__image-1" />
                    </div>

                    <div className="About__description">

                        <div className="description__head">
                            <h2>Hello, world!</h2>
                            <h3>a bit about me</h3>
                        </div>


                        <div className="description__paragraph">
                            <span className="init">Soy</span> un joven <span className="passion">apasionado</span> por las Ciencias de la Computacion y futuro gran ingeniero de Software, ademas de ser musico que es mi otro arte <span className="dev">(considero la programacion como ciencia y como arte)</span>, soy de Colombia y egresado de la Tecnica en Programacion de Software del <span className="sena">SENA</span>.
                            <br />
                            Mi meta en este momento es ser lo suficientemente competente en el desarrollo de software para poder laboral en lo que mas me gusta que es la programacion.

                            se de <span className="front">Frontend</span>, pero mi fuerte es el Backend, bases de datos. me gusta la musica de piano y el rock, y se que aunque son diferentes, siento que el uno equilibra al otro en mi sentir musical...
                            <br /><br />
                            hay mucho mas que quisiera contar...
                        </div>



                    </div>

                </div>


            </div>

            <div className="description__circles">

                {/* ··············· */}
                <h2 className="things__title">Cosas Aprendidas en el Bootcamp de Make It Real</h2>
                {/* ··············· */}


                {/* ··············· */}
                <p className="things__paragraph">
                    cuando decides a que te vas a dedicar se torna dificil, el mundo ofrece tanto que te confundes es saber si eres bueno en algo o no. y cuando lo decides te enfrentas a varios obstaculos principalmente en estar lo suficientemente preparado en conocimientos y habilidades para ejercer esa profesion <br /><br /> Antes de iniciar este Bootcamp, tenia ciertas expectativas, y digo tenia porque <span>Make <span className="it">It</span> real</span> las supero; sus mentores son geniales enseñando y comprendiendo nuestro actual estado de querer ser tan habilidosos y competentes como ellos<br /><br /> es dificil escribir solo 3 cosas que he aprendido con ellos, ya que son muchas mas y ninguna menos importante <br /><br /> Pero hare mi mejor esfuerzo
                </p>
                {/* ··············· */}



                {/* ··············· */}
                <div className="things">

                    {/* ****************** */}
                    <div className="first_thing">
                        <div className="circle-1">
                            <span>1</span>
                        </div>

                        <p className="circle-1__paragraph">
                            <span>REACT</span>
                            <br /> <br /> 
                            Un framework javascript Frontend que me gusta bastante <br /> aqui he aprendido cosas importantes como:
                            <br /><br />
                            <ul>
                                <li>Ciclo de vida de los componentes</li>
                                <li>Styled components</li>
                                <li>Hooks</li>
                                <li>Testing library</li>
                            </ul>
                        </p>
                    </div>
                    {/* ****************** */}


                    {/* ****************** */}
                    <div className="second_thing">
                        <div className="circle-2">
                            <span>2</span>
                        </div>

                        <p className="circle-2__paragraph">
                            <span>HABILIDADES BLANDAS</span>
                            <br /><br />
                            Como seres Humanos, las habilidades blandas son muy necesarias para tener una vida laboral de alta calidad, tanto para la empresa como para el empleado, y claramente influye en su ambiente laboral <br /> con MIR he potenciado habilidades tales como:
                            <br /><br />
                            <ul>
                                <li>Trabajo en Equipo</li>
                                <li>comunicacion continua con el Equipo</li>
                                <li>Preparacion para busqueda de empleo</li>
                            </ul>

                        </p>
                    </div>
                    {/* ****************** */}


                    {/* ****************** */}
                    <div className="third_thing">
                        <div className="circle-3">
                            <span>3</span>
                        </div>

                        <p className="circle-3__paragraph">
                            <span>GUSTO POR EL FRONT-END</span>
                            <br /> <br />
                            Gracias al Bootcamp y al apoyo de los mentores, mi habilidad para el front-end mejoro por mucho, ahora siento mas confort y diversion trabajar con front...
                            <br /><br />
                            <ul>
                                <li>CSS</li>
                                <li>Styled components</li>
                                <li>JSX</li>
                            </ul></p>
                    </div>
                    {/* ****************** */}
                </div>
                {/* ··············· */}
            </div>

        </>





    )
}

export default AboutPage
