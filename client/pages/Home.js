import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import a1 from './Images/a1.jpeg';
import a2 from './Images/a2.jpeg';
import a3 from './Images/a3.jpeg';
import a4 from './Images/a4.jpeg';

import b1 from './Images/b1.jpeg';
import b2 from './Images/b2.jpeg';
import b3 from './Images/b3.jpeg';
import b4 from './Images/b4.jpeg';

import c1 from './Images/c1.jpeg';
import c2 from './Images/c2.jpeg';
import c3 from './Images/c3.jpeg';
import c4 from './Images/c4.jpeg';

import s1 from './Images/s1.jpeg';
import s2 from './Images/s2.jpeg';
import s3 from './Images/s3.jpeg';

const Home = () => {

  const cardsA = [
    { img: a1, price: "₹1,299", rating: 4 },
    { img: a2, price: "₹1,499", rating: 5 },
    { img: a3, price: "₹999", rating: 3 },
    { img: a4, price: "₹1,799", rating: 4 },
  ];

  const cardsB = [
    { img: b1, price: "₹1,999", rating: 5 },
    { img: b2, price: "₹2,499", rating: 4 },
    { img: b3, price: "₹1,899", rating: 4 },
    { img: b4, price: "₹2,299", rating: 5 },
  ];

  const cardsC = [
    { img: c1, price: "₹2,999", rating: 5 },
    { img: c2, price: "₹3,499", rating: 4 },
    { img: c3, price: "₹3,999", rating: 5 },
    { img: c4, price: "₹2,799", rating: 4 },
  ];

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} style={{ color: i < count ? "gold" : "#ccc", fontSize: "18px" }}>
          ★
        </span>
      );
    }
    return stars;
  };

  const renderCards = (cards) => (
    <div className="row text-center mt-4">
      {cards.map((item, index) => (
        < div className="col-md-3 mb-4" key={index}>
          <div className="card" style={{ width: "100%" }}>
            <img src={item.img} className="card-img-top" alt={`Card ${index + 1}`} />
            <div className="card-body">
              <h5 className="card-title">Piece {index + 1}</h5>

              {/* Ratings */}
              <div>{renderStars(item.rating)}</div>

              {/* Price */}
              <h5 className="mt-2" style={{ color: "green", fontWeight: "bold" }}>
                {item.price}
              </h5>

              <p className="card-text">Best quality. Best price.</p>

              {/* <a href="" className="btn btn-primary">View Details</a> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container-fluid mt-4">
      <center><h1>KANCHIPURAM SAREES</h1></center>

      {/* Carousel */}
      <div id="carouselExample" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={s1} className="d-block w-100" alt="Slide 1" />   
                 <div class="carousel-caption d-none  d-md-block">
                    <h5>Bridal Saree</h5>
                </div>

          </div>
          <div className="carousel-item">
            <img src={s2} className="d-block w-100" alt="Slide 2" />
            <div class="carousel-caption d-none  d-md-block">
                    <h5>Cotton Saree</h5>
                </div>
          </div>
          <div className="carousel-item">
            <img src={s3} className="d-block w-100" alt="Slide 3" />
            <div class="carousel-caption d-none  d-md-block">
                    <h5>Normal Saree</h5>
                </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Card Rows */}
      <center><h4>Fancy Crepe Saree</h4></center>
      {renderCards(cardsA)}

      <center><h4>Patola Silk Saree</h4></center>
      {renderCards(cardsB)}

      <center><h4>Bride Fancy Saree</h4></center>
      {renderCards(cardsC)}



    </div>
  );
};
export default Home;
