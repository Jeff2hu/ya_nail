import { useEffect, useState } from "react";

interface Props {
  images: string[];
}

const Slide = ({ images }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(currentSlide);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, [images]);

  return (
    <div className="carousel-item w-full h-[100%] flex justify-center items-center relative">
      <img
        src={images[currentSlide]}
        className="w-[360px] h-[360px] object-cover "
      />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button className="btn btn-circle" onClick={prevSlide}>
          ❮
        </button>
        <button className="btn btn-circle" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Slide;
