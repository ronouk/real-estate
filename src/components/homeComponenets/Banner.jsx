
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px] mb-12">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://images.mansionglobal.com/im-552743?width=1299&height=866" className="w-full object-cover rounded-xl" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute w-7/12 top-[40%] left-[20%]">
                        <div className="flex text-center justify-center text-2xl lg:text-4xl bg-[#1a1a1a80] text-white font-bold px-6 lg:px-12 py-4 lg:py-8  rounded-xl">Choose your favourite destination</div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://www.travelandleisure.com/thmb/181yagnEsM84ITqhxIgTveFqzOM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-montage-cay-FULLTIMERESORT0823-4f91604fae9340d18c5f6226ea612439.jpg" className="w-full object-cover rounded-xl" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute w-7/12 top-[40%] left-[20%]">
                        <div className="flex text-center justify-center text-2xl lg:text-4xl bg-[#1a1a1a80] text-white font-bold px-6 lg:px-12 py-4 lg:py-8  rounded-xl">Select any exquisite properties</div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://www.richmonts.com/application/files/7416/9451/3834/Luxury_Beachside_Villa1.jpg" className="w-full object-cover rounded-xl" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute w-7/12 top-[40%] left-[20%]">
                        <div className="flex text-center justify-center text-2xl lg:text-4xl bg-[#1a1a1a80] text-white font-bold px-6 lg:px-12 py-4 lg:py-8  rounded-xl">Have a luxury tour to the location</div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://d15zjc2r4e8kr7.cloudfront.net/8346/blog/Beach%20View-1A.png" className="w-full object-cover rounded-xl" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute w-7/12 top-[40%] left-[20%]">
                        <div className="flex text-center justify-center text-2xl lg:text-4xl bg-[#1a1a1a80] text-white font-bold px-6 lg:px-12 py-4 lg:py-8  rounded-xl">Leave the formalities to us</div>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src="https://traveler.marriott.com/wp-content/uploads/2021/02/HuatulcoOaxaca_6VillaEscondida_9.jpg" className="w-full object-cover rounded-xl" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute w-7/12 top-[40%] left-[20%]">
                        <div className="flex text-center justify-center text-2xl lg:text-4xl bg-[#1a1a1a80] text-white font-bold px-6 lg:px-12 py-4 lg:py-8  rounded-xl">Enjoy your dream time</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;