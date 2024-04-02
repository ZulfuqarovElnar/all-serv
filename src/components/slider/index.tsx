import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "assets/images/slide1.jpg",
        "assets/images/slide2.jpg",
        "assets/images/slide3.jpg"
    ];

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [currentSlide, slides.length]);

    return (
        <div className="relative w-full h-[560px] overflow-hidden">
            {slides.map((slide, index) => (
                <img
                key={index}
                src={slide}
                className={`absolute left-0 top-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                alt={`Slide ${index + 1}`}
                />
            ))}
            <div className="absolute inset-y-0 left-10 top-20 flex items-center">
                <button onClick={prevSlide} className="absolute left-0 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full">
                    <FaChevronLeft />
                </button>
            </div>
            <div className="absolute inset-y-0 right-10 top-20 flex items-center">
                <button onClick={nextSlide} className="absolute right-0 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full">
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
}
  