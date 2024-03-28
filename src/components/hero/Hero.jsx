import './Hero.css'
import darkArrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim sapiente magnam ipsum obcaecati doloremque vitae porro quasi quidem dicta sed.</p>
            <button className='btn'>Explore more <img src={darkArrow} alt="dark-arrow" /></button>
        </div>
    </div>
  )
}

export default Hero