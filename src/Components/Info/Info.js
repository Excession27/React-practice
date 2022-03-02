import photo from './photo.jpg';
import email from './email.png';
import linkedin from './linkedin.png';
import './Info.css';

export default function Info() {
    return (
        <div className="Info">
            <img src={photo} alt="" />

            <div className="name-role-site">
                <h1 className="name">Veljko Muratovic</h1>
                <h4 className="role">Fullstack Developer</h4>
                <a href="www.github.com/Excession27" className="site">github.com/Excession27</a>
            </div>

            <div className="buttons">
                
                <a className="email" href="mailto:veljkomuratovic27@gmail.com"><img src={email} alt="" /> Email</a>
                <a className="linkedin" href="https://google.com"><img src={linkedin} alt="" /> LinkedIn</a>
                
            </div>
        </div>
    );
}
