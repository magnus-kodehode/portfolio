import AnimatedPage from '../components/AnimatedPage'
import html from '../images/logos_html-5.svg'
import css from '../images/logos_css-3.svg'
import javaScript from '../images/skill-icons_javascript.svg'
import react from '../images/skill-icons_react-dark.svg'
import figma from '../images/skill-icons_figma-dark.svg'

const AboutMe = () => {
    return (
        <AnimatedPage>
            <div className='save-the-children'>
                <section className='intro-p-wrapper'>
                    <h1 className='about-me-h1'>Om Meg</h1>
                    <p>Hei, mitt navn er Magnus og er 32 år gammel. For tiden er jeg deltaker på en kode-bootcamp kalt Kodehode. Jeg har tidligere jobbet med IT-support, og derfor var veien inn til koding ganske kort. 
                    På kurset har jeg fått bryne meg på HTML, CSS, JavaScript, React, samt oppsett av enkle backend løsninger med node.js/Express.
                    Jeg liker å bryne meg på kode og gir meg ikke før jeg har funnet løsningen.</p>



                    <div className='skills-wrapper'>
                        <img className='aboutMe--svg' src={html} alt='html icon' />
                        <img className='aboutMe--svg' src={css} alt='css icon' />
                        <img className='aboutMe--svg' src={javaScript} alt='javascript icon' />
                        <img className='aboutMe--svg' src={react} alt='react icon' />
                        <img className='aboutMe--svg' src={figma} alt='figma icon' />
                    </div>
                </section>
            </div>
        </AnimatedPage>
    )
}

export default AboutMe