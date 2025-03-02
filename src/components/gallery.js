import '../styles.css';
import img1 from '../assets/Images/Img-1.jpg';
import img2 from '../assets/Images/Img-2.jpg';
import img3 from '../assets/Images/Img-3.jpg';
import img4 from '../assets/Images/Img-4.jpeg';
import img5 from '../assets/Images/Img-5.jpg';
import img6 from '../assets/Images/Img-6.jpg';
import img7 from '../assets/Images/Img-7.jpg';
import img8 from '../assets/Images/Img-8.jpg';



function Gallery() {
    return (
      <div className='Gallery'>
        <h1>Gallery</h1>
      <div className='Gallery-img'>
        <div className='img'>
          <img src={img1} alt='img1'></img>
          <p>Audi Super Sport</p>
        </div>
        <div className='img'>
          <img src={img2} alt='img2'></img>
          <p>Nissan GT-R</p>
        </div>
        <div className='img'>
          <img src={img3} alt='img3'></img>
          <p>Mercedes-BenZ</p>
        </div>
        <div className='img'>
          <img src={img4} alt='img4'></img>
          <p>Mahaindra Thar</p>
        </div>
        <div className='img'>
          <img src={img5} alt='img5'></img>
          <p>Rolls Royce Phaniom</p>
        </div>
        <div className='img'>
          <img src={img6} alt='img6'></img>
          <p>Audi R7 Couple</p>
        </div>
        <div className='img'>
          <img src={img7} alt='img7'></img>
          <p>Jeep Wrangler</p>
        </div>
        <div className='img'>
          <img src={img8} alt='img8'></img>
          <p>Skoda Superb Sportline</p>
        </div>
      </div >
      </div>
    );
}

export default Gallery
