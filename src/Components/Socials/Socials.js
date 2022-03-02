import Twitter from './Twitter Icon.png';
import Facebook from './Facebook Icon.png';
import Instagram from './Instagram Icon.png';
import Github from './GitHub Icon.png';
import './Socials.css'

export default function Socials() {
    return (
        <div className="Socials">
            <a href="http://google.com"><img src={Twitter} alt="Something" /></a>
            <a href="http://google.com"><img src={Facebook} alt="Something" /></a>
            <a href="http://google.com"><img src={Instagram} alt="Something" /></a>
            <a href="http://google.com"><img src={Github} alt="Something" /></a>
        </div>
    );
}