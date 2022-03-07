import React from 'react';

import './styles/cabecalho.css'
import './styles/chamada.css'
import './styles/sobre.css'
import './styles/projetos.css'
import './styles/servicos.css'
import './styles/skills.css'
import './styles/trabalhar.css'
import './styles/rodape.css'
import './styles/botao.css'

import ConversorImg from './assets/conversor.png'
import BlogInterface from './assets/blogInterface.png'
import Dev from './assets/dev.png'
import Login from './assets/login.png'
import Comissoes from './assets/comissoes.png'
import CodeBurger from './assets/codeburger.png'
import Code from './assets/code.svg'
import Figma from './assets/figma.svg'
import Smartphone from './assets/smartphone.svg'
import Html from './assets/html.svg'
import Css from './assets/css.svg'
import JS from './assets/js.svg'
import Github from './assets/github1.svg'
import ReactJS from './assets/react.svg'
import Email from './assets/mail.svg'
import Linkedin from './assets/linkedin1.svg'
import Resume from './assets/Lucas-Rodrigues.pdf'








const App = () => {

    function backToTop() {
        window.scrollTo(0, 0)
    }


    return (
        <div className='containerAll'>
            <header className='cabecalho container'>
                    <h1 className='cabecalho__titulo'>Portfólio</h1>
                <nav className='cabecalho__nav'>
                    <ul className='cabecalho__list'>
                        <li className='cabecalho__li'><a className='cabecalho__link' href='#AboutMe'>Sobre mim</a></li>
                        <li className='cabecalho__li'><a className='cabecalho__link' href='#Projects'>Projetos</a></li>
                        <li className='cabecalho__li'><a className='cabecalho__link' href='#Services'>Serviços</a></li>
                        <li className='cabecalho__li'><a className='cabecalho__link' href='#Skills'>Minhas Skills</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <div className='chamada'>
                    <h2 className='chamada__titulo'>Olá, eu sou o Lucas Rodrigues</h2>
                    <p className='chamada__paragrafo'>Desenvolvedor Front-End</p>
                    <div className='chamada__container'>
                        <a className='chamada__link' href={Resume} download>Download CV</a>
                        <a className='chamada__link' href="https://api.whatsapp.com/send?phone=5511996987610" target="_blank" rel="noreferrer noopener">Entrar em contato</a>
                    </div>
                </div>

                <div className='about'>
                    <h2 className='about__subtittle' id='AboutMe'>Sobre mim</h2>
                    <div className='about__paragraph'>
                        <p>Olá, sou o Lucas Rodrigues, apaixonado por tecnologia, extremamente
                            motivado por desafios e sempre aprendendo durante minha jornada como desenvolvedor Front-End. Atualmente
                            venho desenvolvendo minhas habilidades nas tecnologias HTML5, CSS3, JavaScript e React.js. <br /> Além disso, com minha experiência em outras áreas pude desenvolver habilidades de gestão do tempo, comunicação efetiva e relacionamento com cliente.</p>
                    </div>
                </div>

                <div className='projects'>
                    <h2 className='projects__subtittle' id='Projects'>Projetos</h2>
                    <div className='projects__container'>
                        <a className='project__link' href="https://rodrlucas.github.io/ConvertMoney/" target="_blank" rel="noreferrer noopener">
                            <img className='project__image' src={ConversorImg} alt="Conversor" />
                            <h3 className='project__subtittle'>Conversor de Moedas</h3>
                            <p className='project__paragraph'>Tecnologias: HTML, CSS e JS.</p>
                        </a>
                        <a className='project__link' href="https://rodrlucas.github.io/BlogInterface/" target="_blank" rel="noreferrer noopener">
                            <img className='project__image' src={BlogInterface} alt="Blog Interface" />
                            <h3 className='project__subtittle'>Blog Interface - Desktop</h3>
                            <p className='project__paragraph'>Tecnologias: HTML, CSS.</p>
                        </a>
                        <a className='project__link' href="https://rodrlucas.github.io/DevContabil/" target="_blank" rel="noreferrer noopener">
                            <img className='project__image' src={Dev} alt="Dev Contábil" />
                            <h3 className='project__subtittle' >Dev Contábil - Desktop</h3>
                            <p className='project__paragraph' >Tecnologias: HTML, CSS.</p>
                        </a>
                        <a className='project__link' href="https://rodrlucas.github.io/Login-Interface/" target="_blank" rel="noreferrer noopener">
                            <img className='project__image' src={Login} alt="Login Interface" />
                            <h3 className='project__subtittle'>Login Interface</h3>
                            <p className='project__paragraph'>Tecnologias: HTML, CSS.</p>
                        </a>
                        <a className='project__link' href="https://rodrlucas.github.io/Comissoes/" target="_blank" rel="noreferrer noopener">
                            <img className='project__image' src={Comissoes} alt="Comissões" />
                            <h3 className='project__subtittle'>Comissões - Desktop</h3>
                            <p className='project__paragraph'>Tecnologias: HTML, CSS e JS.</p>
                        </a>
                        <a className='project__link' href="https://rodrlucas.github.io/CodeBurgerApp/" target="_blank" rel="noreferrer noopener">
                            <img className='project__image' src={CodeBurger} alt="Code-Burger" />
                            <h3 className='project__subtittle' >Code Burger App</h3>
                            <p className='project__paragraph'>Tecnologias: HTML, CSS e JS.</p>
                        </a>
                    </div>
                </div>

                <div className='services'>
                    <h2 className='services__subtittle' id='Services'>Serviços</h2>
                    <div className='services__container'>
                        <ul className='services__list' >
                            <li className='services__li'>
                                <img className='services__image' src={Code} alt="Code" />
                                Criação de sites
                            </li>
                            <li className='services__li'>
                                <img className='services__image' src={Figma} alt="Figma" />
                                UI Designer
                            </li>
                            <li className='services__li'>
                                <img className='services__image' src={Smartphone} alt="Smartphone" />
                                Sites Responsivos
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='skills'>
                    <h2 className='skills__subtittle' id='Skills'>Minhas Skills</h2>
                    <div className='skills__container'>
                        <ul className='skills__list'>
                            <li className='skills__li'>
                                <img className='skills__image' src={Html} alt='HTML' />
                            </li>
                            <li className='skills__li'>
                                <img className='skills__image' src={Css} alt='CSS' />
                            </li>
                            <li className='skills__li'>
                                <img className='skills__image' src={JS} alt='JavaScript' />
                            </li>
                            <li className='skills__li'>
                                <img className='skills__image' src={Github} alt='Github' />
                            </li>
                            <li className='skills__li'>
                                <img className='skills__image' src={ReactJS} alt='ReactJS' />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='work'>
                    <h2 className='work__subtittle'>Vamos trabalhar juntos...</h2>
                    <div className='work__container'>
                        <ul className='work__list'>
                            <li className='work__li'>
                                <div className='work__container-img'>
                                    <img className='work__image' src={Email} alt='Email' />
                                </div>
                                <a href="mailto:lucasrodriguessantos0@gmail.com" target="_blank" rel="noreferrer noopener">
                                    <p className='work__paragraph'>E-mail</p>
                                </a>
                                <span className='work__span'>lucasrodriguessantos0gmail.com</span>
                            </li>
                            <li className='work__li'>
                                <div className='work__container-img'>
                                    <img className='work__image' src={Linkedin} alt='Linkedin' />
                                </div>
                                <a href='https://www.linkedin.com/in/rodrlucas/' target="_blank" rel="noreferrer noopener">
                                    <p className='work__paragraph'>LinkedIn</p>
                                </a>
                                <span className='work__span' >@rodrLucas</span>
                            </li>
                            <li className='work__li'>
                                <div className='work__container-img'>
                                    <img className='work__image' src={Github} alt='Github' />
                                </div>
                                <a href='https://github.com/RodrLucas' target="_blank" rel="noreferrer noopener">
                                    <p className='work__paragraph'>Github</p>
                                </a>
                                <span className='work__span'>RodrLucas</span>
                            </li>
                            <li className='work__li'>
                                <div className='work__container-img'>
                                    <img className='work__image' src={Smartphone} alt='Smartphone' />
                                </div>
                                <a href="https://api.whatsapp.com/send?phone=5511996987610" target="_blank" rel="noreferrer noopener">
                                    <p className='work__paragraph'>Telefone</p>
                                </a>
                                <span className='work__span'>+55 11 996987610</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='btn' onClick={backToTop} id='backToTop'></div>
            </main>
            <footer>
                <div className='footer'>
                    <p className='footer__paragraph'>Orgulhosamente feito por <strong>Lucas Rodrigues</strong></p>
                </div>
            </footer>
        </div>
    )
}

export default App