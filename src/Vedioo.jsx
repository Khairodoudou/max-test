import maxi from './images/maxi.mp4';


export default function Videoo() {
    return (
        <div className="w-full md:px-12 md:py-12 text-center flex items-center justify-center">
            <video className="text-center md:w-3/5 rounded-3xl p-5 flex items-center justify-center" controls>
                <source src={maxi} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
