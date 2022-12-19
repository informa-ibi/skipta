import './Banner.scss';
import banner from '../../assets/images/home-top-banner-bg.png';

function TopBanner() {
return (
    <div className='banner-container' style={{  
        backgroundImage: "url(" + banner + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }}>
        <div className='banner-content'>
            <h2>Skipta is the leading social network of specialized<br/>
    online medical communities</h2>
        <button>Register</button>
        </div>
    </div>
);
}

export default TopBanner;
