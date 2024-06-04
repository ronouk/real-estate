import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    return (
        <div className='flex flex-col min-h-[100vh]'>
            <Helmet>
            <title>LRE | Error</title>
            </Helmet>
            <Header></Header>
            <div className='flex flex-col flex-grow items-center justify-center gap-4 m-12'>
                <h1 className='text-2xl font-bold'>You are in the middle of nowhere</h1>
                <NavLink to='/' className="btn uppercase mx-auto border border-yellow-700 bg-transparent hover:bg-yellow-600 hover:text-white">Go Somewhere</NavLink>
            </div>
            <Footer className='mt-auto'></Footer>
        </div>
    );
};

export default ErrorPage;