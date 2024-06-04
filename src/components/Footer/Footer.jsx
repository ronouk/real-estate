
const Footer = () => {
    return (
        <div id="footer" className="bg-[#151B2E] text-white">
            <footer className="w-11/12 lg:w-3/4 mx-auto footer py-12 lg:py-24 text justify-center lg:justify-between items-center">
                <aside className="flex flex-col font-bold text-yellow-700 items-center border p-4 rounded-lg">
                    <img src="/logo_luxury_estate_small.png" width={96} alt="" />
                    <p className="uppercase text-yellow-400">Luxury Real Estate</p>
                    <p className="text-[12px] text-center text-yellow-600 font-semibold">Satisfying you Luxury need<br />since 1992</p>
                </aside>
                <nav className="flex flex-col w-full items-center lg:items-end">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Luxury Buildings</a>
                    <a className="link link-hover">Luxury Lands</a>
                    <a className="link link-hover">Sales/Rent/Lease</a>
                    <a className="link link-hover">Consultations</a>
                </nav>
                <nav className="flex flex-col w-full items-center lg:items-end">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="flex flex-col w-full items-center lg:items-end">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                    <a className="link link-hover">GDPR Compliance</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;