import './portfolio.css'
import IMG1 from '../../assets/IMG1.webp'
import IMG2 from '../../assets/IMG2.webp'
import IMG3 from '../../assets/IMG3.webp'
import IMG4 from '../../assets/IMG4.webp'
import IMG5 from '../../assets/IMG5.webp'
import IMG6 from '../../assets/IMG6.webp'
const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h5>My Recent Project</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className='portfolio_items'>
            <div className="portfolio_item-image">
              <img src={IMG1} alt="" />
            </div>  
              <h3>Calculator</h3>
              <div className="portfolio_items-cta">
                <a href="https://github.com/maharshi027/Calculator-using-React" className='btn'>Github</a>
                <a href="https://calculator-using-react-seven.vercel.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
              </div>
        </article>
        <article className='portfolio_items'>
            <div className="portfolio_item-image">
              <img src={IMG2} alt="" />
            </div>
              <h3>Currency Converter</h3>
              <div className="portfolio_items-cta">
                <a href="https://github.com/maharshi027/Currency-Converter" className='btn'>Github</a>
                <a href="https://currency-converter-three-ecru.vercel.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
              </div>
        </article>
        <article className='portfolio_items'>
            <div className="portfolio_item-image">
              <img src= {IMG3} alt="" />
            </div>  
              <h3>MBBS Abroad Study</h3>
              <div className="portfolio_items-cta">
                <a href="https://github.com/maharshi027/mbbs-abroad-landing-page" className='btn'>Github</a>
                <a href="https://mbbs-abroad-landing-page.vercel.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
              </div>
        </article>
        <article className='portfolio_items'>
            <div className="portfolio_item-image">
              <img src={IMG4} alt="" />
            </div>  
              <h3>To Do List</h3>
              <div className="portfolio_items-cta">
                <a href="https://github.com/maharshi027/To-Do-List" className='btn'>Github</a>
                <a href="https://do-it-now-one.vercel.app/" target='_blank' className='btn btn-primary'>Live Demo</a>  
              </div>
        </article>
        <article className='portfolio_items'>
            <div className="portfolio_item-image">
              <img src={IMG5} alt="" />
            </div>  
              <h3>Wedding Planner</h3>
              <div className="portfolio_items-cta">
                <a href="https://github.com/maharshi027/Event-management-college-project" className='btn'>Github</a>
                <a href="https://event-management-ten-sooty.vercel.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
              </div>
        </article>
        <article className='portfolio_items'>
            <div className="portfolio_item-image">
              <img src={IMG6} alt="" />
              </div>  
              <h3>Nivaran</h3>
              <div className="portfolio_items-cta">
                <a href="https://github.com/maharshi027/nivaran" className='btn'>Github</a>
                <a href="https://nivaran-ashen.vercel.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
              </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
