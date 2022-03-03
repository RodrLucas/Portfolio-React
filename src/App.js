import React from 'react';
import './styles/styles.css'
import { Container, Header, H1, LI, Main, H2, P, Button, Subtittle, Project, Services, Skills, Work, Footer, Btn } from './styles';

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
        <Container>
            <Header>
                <nav>
                    <H1>Portfólio</H1>
                    <ul>
                        <LI><a href='#AboutMe'>Sobre mim</a></LI>
                        <LI><a href='#Projects'>Projetos</a></LI>
                        <LI><a href='#Services'>Serviços</a></LI>
                        <LI><a href='#Skills'>Minhas Skills</a></LI>
                    </ul>
                </nav>
            </Header>

            <Main>
                <div className='first-card'>
                    <H2>Olá, eu sou o Lucas Rodrigues</H2>
                    <P>Desenvolvedor Front-End</P>
                    <div>
                        <Button><a href={Resume} download>Download CV</a></Button>
                        <Button><a href="https://api.whatsapp.com/send?phone=5511996987610" target="_blank" rel="noreferrer noopener">Entrar em contato</a></Button>
                    </div>
                </div>

                <div className='seccond-card'>
                    <Subtittle id='AboutMe'>Sobre mim</Subtittle>
                    <div className='seccond-card-paragraph'>
                        <p>Olá, sou o Lucas Rodrigues, apaixonado por tecnologia, extremamente
                            motivado por desafios e sempre aprendendo durante minha jornada como desenvolvedor Front-End. Atualmente
                            venho desenvolvendo minhas habilidades nas tecnologias HTML5, CSS3, JavaScript e React.js. <br /> Além disso, com minha experiência em outras áreas pude desenvolver habilidades de gestão do tempo, comunicação efetiva e relacionamento com cliente.</p>
                    </div>
                </div>

                <div className='third-card'>
                    <Subtittle id='Projects'>Projetos</Subtittle>
                    <div className='container-Projects'>
                        <Project href="https://rodrlucas.github.io/ConvertMoney/" target="_blank" rel="noreferrer noopener">
                            <img src={ConversorImg} alt="Conversor" />
                            <h3>Conversor de Moedas</h3>
                            <p>Tecnologias: HTML, CSS e JS.</p>
                        </Project>
                        <Project href="https://rodrlucas.github.io/BlogInterface/" target="_blank" rel="noreferrer noopener">
                            <img src={BlogInterface} alt="Blog Interface" />
                            <h3>Blog Interface</h3>
                            <p>Tecnologias: HTML, CSS.</p>
                        </Project>
                        <Project href="https://rodrlucas.github.io/DevContabil/" target="_blank" rel="noreferrer noopener">
                            <img src={Dev} alt="Dev Contábil" />
                            <h3>Dev Contábil</h3>
                            <p>Tecnologias: HTML, CSS.</p>
                        </Project>
                        <Project href="https://rodrlucas.github.io/Login-Interface/" target="_blank" rel="noreferrer noopener">
                            <img src={Login} alt="Login Interface" />
                            <h3>Login Interface</h3>
                            <p>Tecnologias: HTML, CSS.</p>
                        </Project>
                        <Project href="https://rodrlucas.github.io/Comissoes/" target="_blank" rel="noreferrer noopener">
                            <img src={Comissoes} alt="Comissões" />
                            <h3>Comissões</h3>
                            <p>Tecnologias: HTML, CSS e JS.</p>
                        </Project>
                        <Project href="https://rodrlucas.github.io/CodeBurgerApp/" target="_blank" rel="noreferrer noopener">
                            <img src={CodeBurger} alt="Code-Burger" />
                            <h3>Code Burger App</h3>
                            <p>Tecnologias: HTML, CSS e JS.</p>
                        </Project>
                    </div>
                </div>

                <div className='fourth-card'>
                    <Subtittle id='Services'>Serviços</Subtittle>
                    <div className='container-services'>
                        <ul>
                            <Services>
                                <img src={Code} alt="Code" />
                                Criação de sites
                            </Services>
                            <Services>
                                <img src={Figma} alt="Figma" />
                                UI Designer
                            </Services>
                            <Services>
                                <img src={Smartphone} alt="Smartphone" />
                                Sites Responsivos
                            </Services>
                        </ul>
                    </div>
                </div>

                <div className='fifth-card'>
                    <Subtittle id='Skills'>Minhas Skills</Subtittle>
                    <div className='container-skills'>
                        <ul>
                            <Skills>
                                <img src={Html} alt='HTML' />
                            </Skills>
                            <Skills>
                                <img src={Css} alt='CSS' />
                            </Skills>
                            <Skills>
                                <img src={JS} alt='JavaScript' />
                            </Skills>
                            <Skills>
                                <img src={Github} alt='Github' />
                            </Skills>
                            <Skills>
                                <img src={ReactJS} alt='ReactJS' />
                            </Skills>
                        </ul>
                    </div>
                </div>

                <div className='sixth-card'>
                    <Subtittle>Vamos trabalhar juntos...</Subtittle>
                    <div className='container-work'>
                        <ul>
                            <Work>
                                <div className='container-img'>
                                    <img src={Email} alt='Email' />
                                </div>
                                <a href="mailto:lucasrodriguessantos0@gmail.com" target="_blank" rel="noreferrer noopener">
                                    <p>E-mail</p>
                                </a>
                                <span>lucasrodriguessantos0gmail.com</span>
                            </Work>
                            <Work>
                                <div className='container-img'>
                                    <img src={Linkedin} alt='Linkedin' />
                                </div>
                                <a href='https://www.linkedin.com/in/rodrlucas/' target="_blank" rel="noreferrer noopener">
                                    <p>LinkedIn</p>
                                </a>
                                <span>@rodrLucas</span>
                            </Work>
                            <Work>
                                <div className='container-img'>
                                    <img src={Github} alt='Github' />
                                </div>
                                <a href='https://github.com/RodrLucas' target="_blank" rel="noreferrer noopener">
                                    <p>Github</p>
                                </a>
                                <span>RodrLucas</span>
                            </Work>
                            <Work>
                                <div className='container-img'>
                                    <img src={Smartphone} alt='Smartphone' />
                                </div>
                                <a href="https://api.whatsapp.com/send?phone=5511996987610" target="_blank" rel="noreferrer noopener">
                                    <p>Telefone</p>
                                </a>
                                <span>+55 11 996987610</span>
                            </Work>
                        </ul>
                    </div>
                </div>

                <Btn onClick={backToTop} id='backToTop'></Btn>
            </Main>
            <Footer>
                <div className='footer'>
                    <p>Orgulhosamente feito por <strong>Lucas Rodrigues</strong></p>
                </div>
            </Footer>
        </Container>
    )
}

export default App