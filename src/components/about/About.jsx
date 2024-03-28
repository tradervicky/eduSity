import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} className="about-img" alt="about-img" />
            <img src={play_icon} className="play-icon" alt="play_icon" onClick={()=>setPlayState(true)} />
        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing toimmorrow's Leaders today</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A id reiciendis nam ducimus nisi dolor maxime pariatur ea in suscipit.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos totam numquam impedit sunt alias quasi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, mollitia?</p>
        </div>
    </div>
  )
}

export default About