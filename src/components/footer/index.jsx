import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="lern container flex justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-4">ДОКУМЕНТЫ</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Общие условия продажи
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Устав
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Свидетельство
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Возврат
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">СЕРВИС</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Время намаза
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Рассрочка в Исламе
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Продайте на alif shop!
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">КАТАЛОГ ТОВАРОВ</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Смартфоны и телефоны
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Гаджеты
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Аксессуары для телефонов
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Часы и аксессуары
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Смартфоны в рассрочку
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">МЫ В СОЦ. СЕТЯХ</h3>
          <div className="flex space-x-4 mb-[10px]">
            <img src="https://alifshop.uz/_ipx/s_40x40/images/media/instagram.webp" alt="" />
         <img src="https://alifshop.uz/_ipx/s_40x40/images/media/facebook.svg" alt="" />
          <img src="https://alifshop.uz/_ipx/s_40x40/images/media/telegram.svg" alt="" />
          <img src="https://alifshop.uz/_ipx/s_40x40/images/media/ok.svg" alt="" />
         <img src="https://alifshop.uz/_ipx/s_40x40/images/media/tiktok.svg" alt="" />
            
          </div>
          <div>
          <h3 className="text-lg font-semibold mb-4">СПРАВОЧНАЯ СЛУЖБА</h3>
          <p className="text-gray-400 mb-2">
            <a href="mailto:@alifshop.uz" className="hover:text-white">
              @alifshop.uz
            </a>
          </p>
          <p className="text-gray-400">
            <a href="tel:+998555121212" className="hover:text-white">
              +998 555 12 12 12
            </a>
          </p>
        </div>
        </div>

   
      </div>
    </footer>
  );
};

export default Footer;