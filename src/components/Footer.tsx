import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneIcon from '@mui/icons-material/Phone';
import FloatingButton from './FloatingButton/FloatingButton';

const Footer: React.FC = () => {
    return (
        <footer className="bg-lightRose">
            <div className="w-full max-w-screen-xl mx-auto px-4 py-8 md:px-8 md:py-12 flex flex-col items-center justify-center sm:flex-row sm:justify-between sm:items-center">
                <div className='flex flex-col items-center mb-6 sm:mb-0 sm:mr-12'>
                    <iframe
                        className='w-full h-32 sm:h-48 rounded-lg shadow-lg'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.578133854305!2d19.51483517587267!3d41.274520471314354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134fd9444272eae9%3A0xa5fdb777af3df20f!2sTortAlbania!5e0!3m2!1sru!2s!4v1707248045364!5m2!1sru!2s"
                        width="600" height="450" title="Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className="flex items-center justify-center mb-6 sm:mb-0 text-gray-500 text-lg">
                    <a href="https://www.instagram.com/tortalbania" className="hover:underline flex items-center mx-3">
                        <InstagramIcon sx={{ marginRight: 1, fontSize: '2rem' }} />
                    </a>
                    <a href="https://t.me/tortAlbania" className="hover:underline flex items-center mx-3">
                        <TelegramIcon sx={{ marginRight: 1, fontSize: '2rem' }} />
                    </a>
                    <a href="tel:+355677108312" className="hover:underline flex items-center mx-3">
                        <PhoneIcon sx={{ marginRight: 1, fontSize: '2rem' }} />
                    </a>
                </div>

                <p className="block text-sm text-center text-gray-500 dark:text-gray-400">© 2024 TortAlbania™. All Rights Reserved.</p>


            </div>
            <FloatingButton />
            <a href='https://github.com/cyanidium1' target='_blank' rel="noreferrer" className="block text-sm text-center text-gray-400 dark:text-gray-400">made on earth by cyanidium</a>
        </footer>
    );
};

export default Footer;
