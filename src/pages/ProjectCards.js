import { prosjekter } from '../data/prosjekter'
import AnimatedPage from '../components/AnimatedPage'

const ProjectCards = () => {
const data = prosjekter

    return (
        <AnimatedPage>
          <div className='save-the-children'>
            <h1 className='project--card--h1'>Prosjekter</h1>
            {data.map((data) => (
              <div key={data.id} className='card mobile--card'>
                <h2>{data.prosjektNavn}</h2>
                <img className='thumbnails' src={data.prosjektThumbnail} alt={data.altTekst}/>
                <div className='card-links--wrapper'>
                  <a className='card-links' target='_blank' rel='noreferrer' href={data.prosjektUrl}>Prøv siden</a>
                  <a className='card-links' target='_blank' rel='noreferrer' href={data.github}>Github</a>
                </div>
                <p className='card-p'>{data.prosjektBeskrivelse}</p>
              </div>
            ))}
          </div>
      </AnimatedPage>
    )
  }
        
            
        
    

export default ProjectCards