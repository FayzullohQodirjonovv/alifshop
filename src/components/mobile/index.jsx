import React from 'react';

const AppPromo = () => {
  return (
    <div className=' bg-[whitesmoke]'>
    <div className="container p-5 ">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
        <div className="w-full md:w-1/3">
          <div className="h-96 flex items-center justify-center rounded-lg">
           <img src="https://alifshop.uz/_ipx/f_webp,s_328x344/images/illustrations/alifshop-app-ru.png" alt="" /> 
          </div>
        </div>

        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-2xl font-bold mb-4">ВЫГОДНЫЕ ПРЕДЛОЖЕНИЯ <br /> ВСЕГДА РЯДОМ</h1>
          <p className="text-gray-600 mb-6">
            Заказывайте через приложение alif shop, узнайте о <br /> выгодных предложениях быстрее всех
          </p>
          <div className="mobbile flex justify-center md:justify-start gap-4 mb-6 items-center">
            <img src="https://alifshop.uz/_ipx/f_webp,s_141x38/images/play-market-icon.svg" alt="" />
          <img src="https://alifshop.uz/_ipx/f_webp,s_141x38/images/app-store-icon.svg" alt="" />
           <img src="https://alifshop.uz/_ipx/f_webp,s_141x38/images/app-gallery-icon.svg" alt="" />
           <div className="colormanie flex justify-center md:justify-start items-center gap-4 flex-col text-center ml-[100px]">
            <div className="bg-gray-300 w-24 h-24 flex items-center justify-center rounded-lg">
              <p className="text-gray-500"><img src="https://alifshop.uz/_ipx/f_webp,s_104x104/images/alifshop-qr-code.webp" alt="" /></p>
            </div>
            <p className="text-sm text-gray-600 ">
              Наведите камеру на <br /> QR-код, чтобы <br /> скачать
            </p>
          </div>
          </div>

       
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">alif shop</h2>
          <p className="text-gray-600 mb-4">
            alifshop.uz – маркетплейс, предоставляющий возможность покупки товаров прямо с удобством.
            На alifshop.uz вы сможете найти смартфон, компьютер, планшет
          </p>
          <button className="text-blue-500 flex items-center gap-2">
            Показать все
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Телефоны в рассрочку</h2>
          <p className="text-gray-600 mb-4">
            Сегодня, в эпоху высоких технологий, смартфон стал неотъемлемой частью нашей повседневной жизни. Благодаря партнеру современных телефонов, смартфон часто заменяет нам
          </p>
          <button className="text-blue-500 flex items-center gap-2">
            Показать все
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Ноутбуки в рассрочку</h2>
          <p className="text-gray-600 mb-4">
            ПК дает нам возможность качественно выполнять нашу работу и организовывать скучные часы. К примеру, при помощи ноутбука можно оперативно работать из любой точки мира, выполнять самую разную работу
          </p>
          <button className="text-blue-500 flex items-center gap-2">
            Показать все
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Техника в рассрочку</h2>
          <p className="text-gray-600 mb-4">
            Помимо электроники, на нашем маркетплейсе имеется широкий ассортимент бытовой техники: заводские дисплеи, холодильники, стиральные машины, утюги, кондиционеры и много других
          </p>
          <button className="text-blue-500 flex items-center gap-2">
            Показать все
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AppPromo;