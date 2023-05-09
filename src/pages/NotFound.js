import travolta404 from '../images/travolta404.gif'
import AnimatedPage from '../components/AnimatedPage'

const NotFound = () => {
    return (
    <AnimatedPage>
        <div className='save-the-children'>
            <h1>404</h1>
            <h2>Her var det visst ingenting.</h2>
            <img className='travolta--img' src={travolta404} alt='John Travolta looking for the page you typed in.'/>
        </div>
    </AnimatedPage>
    )
}

export default NotFound