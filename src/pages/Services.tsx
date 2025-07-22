import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // very important!
import aiml from "../assets/aiml.jpg"
import webdev from "../assets/webdev.jpg"
import cyber from "../assets/cyber.jpg"

function Services() {
  return (
    <div >
        <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} animationHandler={"fade"} showThumbs={false}>
              <div>
                <img src={webdev} alt="" />
                 <p className="legend">Websites on Demand</p>
            </div>
            <div>
                <img src={aiml} alt="" />
                <p className="legend">Artificial Intelligence Solutions</p>
            </div>
              <div>
                <img src={cyber} alt="" />
                 <p className="legend">Websites on Demand</p>
            </div>
              <div>
                <img src={webdev} alt="" />
                 <p className="legend">Websites on Demand</p>
            </div>
          
        </Carousel>
    </div>
  )
}

export default Services