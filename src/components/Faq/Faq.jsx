import { Helmet } from "react-helmet-async";

const Faq = () => {

    return (
        <div className="w-11/12 lg:w-3/4 mx-auto mb-12">
            <Helmet>
                <title>LRE | FAQ</title>
            </Helmet>
            
            <h1 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h1>
            <div>
                <h1 className="text-2xl font-bold text-center mb-6">General Queries</h1>
                <div className="join join-vertical w-full mb-12">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-lg font-medium">
                            What services does Luxury Real Estates offer?
                        </div>
                        <div className="collapse-content">
                            <p>Luxury Real Estates specializes in the sale and rental of high-end properties, including luxury apartments, villas, and exclusive estates around the world.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-lg font-medium">
                            How can I contact Luxury Real Estates for more information?
                        </div>
                        <div className="collapse-content">
                            <p>You can contact us via our contact form on the website, email us at <i>info@luxuryrealestates.com</i>, or call our customer service at <i>+880 1234 567890</i>.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-2xl font-bold text-center mb-6">Buying Properties</h1>
                <div className="join join-vertical w-full mb-12">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-lg font-medium">
                            How do I search for properties to buy?
                        </div>
                        <div className="collapse-content">
                            <p>Use our search tool on the homepage to filter properties by location, type, price range, and other criteria to find your perfect luxury home.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-lg font-medium">
                            What is the process of buying a property through Luxury Real Estates?
                        </div>
                        <div className="collapse-content">
                            <p>Once you find a property you like, you can schedule a viewing, consult with one of our real estate agents, and get assistance with negotiations and paperwork to complete the purchase.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-lg font-medium">
                            Are there any additional fees when buying a property?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, there may be additional fees such as legal fees, property taxes, and agent commissions. Our agents will provide a detailed breakdown of all costs involved.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-2xl font-bold text-center mb-6">Renting Properties</h1>
                <div className="join join-vertical w-full mb-12">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-lg font-medium">
                            How do I search for rental properties?
                        </div>
                        <div className="collapse-content">
                            <p>Similar to buying, you can use our search tool to filter rental properties based on your preferences, including location, type of property, and budget.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-lg font-medium">
                            What are the lease terms for renting a property?
                        </div>
                        <div className="collapse-content">
                            <p>Lease terms vary by property. Typically, leases can range from short-term (a few months) to long-term (a year or more). Specific terms will be detailed in the property listing.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-lg font-medium">
                            Are utilities included in the rent?
                        </div>
                        <div className="collapse-content">
                            <p>It depends on the property. Some rentals include utilities, while others do not. This information will be specified in the property listing.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-2xl font-bold text-center mb-6">International Clients</h1>
                <div className="join join-vertical w-full mb-12">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-lg font-medium">
                            Can I buy or rent a property if I am not currently in the country?
                        </div>
                        <div className="collapse-content">
                            <p>Absolutely. We offer comprehensive services for international clients, including virtual tours, remote consultations, and assistance with legal requirements.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-lg font-medium">
                            Do you provide relocation assistance?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, we provide relocation services to help you move and settle into your new luxury home, including moving services, local area information, and more.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-2xl font-bold text-center mb-6">Payment and Financing</h1>
                <div className="join join-vertical w-full mb-12">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-lg font-medium">
                            What payment methods are accepted?
                        </div>
                        <div className="collapse-content">
                            <p>We accept various payment methods, including bank transfers, credit/debit cards, and cryptocurrency. Specific methods may vary based on the property and location.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-lg font-medium">
                            Do you offer financing options?
                        </div>
                        <div className="collapse-content">
                            <p>We work with various financial institutions to offer competitive mortgage and financing options for qualified buyers. Please contact us for more details.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Faq;