
const Ribbon = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="4000" data-aos-delay='500'>
            <div className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center text-center text-white bg-cover bg-fixed rounded-xl px-6 py-8 bg-[linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('https://ik.imgkit.net/3vlqs5axxjf/TAW/ik-seo/uploadedImages/All_Gateways/Hawaii/Hotel_Reviews/Pure%20Kauai_HERO/This-Kauai-Based-Vacation-Rental-Company-Offers-Lu.jpg?tr=w-1008%2Ch-567%2Cfo-auto')]">
                <div>
                    <img className="mx-auto mb-4" src="/src/assets/map-icon.png" alt="" />
                    <p>Select the location where you want your dream home</p>
                </div>
                <div>
                <img className="mx-auto mb-4" src="/src/assets/search-icon.png" alt="" />
                    <p>From our listing, look for the luxury home that suits you</p>
                </div>
                <div>
                <img className="mx-auto mb-4" src="/src/assets/comments-icon.png" alt="" />
                    <p>Our representative will contact with you to facilitate a exquisite tour to the location</p>
                </div>
                <div>
                <img className="mx-auto mb-4" src="/src/assets/keys-icon.png" alt="" />
                    <p>Leave the rest to us and enjoy your time in luxury</p>
                </div>
            </div>
        </div>
    );
};

export default Ribbon;