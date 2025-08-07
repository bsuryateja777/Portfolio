import React, { useEffect, useState } from 'react';

export default function ImageSlider({ photos, cardHovered, cardInView }) {
    const [current, setCurrent] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const shouldSlide = isMobile ? cardInView : cardHovered;

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!shouldSlide) return;
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % photos.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [shouldSlide, photos.length]);

    return (
        <div className="relative w-full h-48 overflow-hidden rounded-xl">
            <div className="flex w-full h-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }} >
                {photos.map((photo, i) => (
                    <img key={i} src={photo} alt={`slide-${i}`} className="w-full flex-shrink-0 object-cover h-48 rounded-xl px-1 py-0.5" />
                ))}
            </div>

            {(shouldSlide || cardHovered) && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                    {photos.map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${current === i ? 'bg-white/90' : 'bg-white/40'}`} />
                    ))}
                </div>
            )}
        </div>
    );
}
