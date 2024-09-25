import maxi from './images/maxi.mp4';
import coverImage from './images/logoo.jpg'; // Import de l'image de couverture
import './styles.css'; // Import de votre fichier CSS personnalisé

export default function Videoo() {
    return (
        <div className="video-container">
            <video className="custom-video" controls poster={coverImage}>
                <source src={maxi} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
