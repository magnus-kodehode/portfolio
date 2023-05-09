import React from 'react'
import AnimatedPage from '../components/AnimatedPage'
import magnus from '../images/magnus.jpg'

const Intro = () => {
    return (
        <AnimatedPage>
            <main className='save-the-children'>
                <div className='intro-p-wrapper'>
                    <h1 className='intro-h1'>Hei! Jeg heter <br></br><span className='intro-span'>Magnus Larsen</span></h1>
                    <div>
                        <h2 className='intro-h2'>Frontend utvikler</h2>
                        <img className='image-headshot' src={magnus} alt='Magnus foran en vegg.' />
                    </div>
                </div>
            </main>
        </AnimatedPage>
    )
}

export default Intro