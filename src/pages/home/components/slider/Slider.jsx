import React,{useState,useEffect} from "react";
import "./slider.css";

function Slider() {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    getSliderImage();
  }, []);


  async function getSliderImage() {
    fetch("/slider.json")
      .then(res => res.json())
      .then(res => {
        setSlider(res);
      })
      .catch(err => { })
  }
  return (
    <>
      <section className="slider_container">
        <div className="slider_wrap">
          {
            slider.map((el,index)=>(
              <img   src={el.image} alt=""  />
            ))
          }
        </div>
      </section>
    </>
  );
}

export default Slider;
