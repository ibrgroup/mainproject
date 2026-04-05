import React from "react";

const ServicesApp = () => {
  // Интерфейс для описания структуры услуги
  interface IService {
    title: string;
    price: number;
  }

  // Массив с услугами
  const servicesData: IService[] = [
    { title: "Парковка домена", price: 1000 },
    { title: "Парковка хостинга", price: 3000 },
    { title: "Развертывание CMS", price: 6000 },
    { title: "Логотип (сервисное создание)", price: 5000 },
    { title: "Установка favicon", price: 2000 },
    { title: "Создание отдельной страницы", price: 7000 },
    { title: "Форма обратной связи", price: 2000 },
    { title: "Слайдер и карусель", price: 2000 },
    { title: "Карта Google или Yandex", price: 3000 },
    { title: "Настройка отображений сайта в Google и Yandex	", price: 5000 },
    { title: "Установка SSL-сертификата", price: 2000 },
    { title: "Установка виджета, баннера или кода на сайт", price: 1000 },
    { title: "Доработка версии для слабовидящих", price: 3000 },
    { title: "Установка переводчика на на другие языки", price: 3000 },
    { title: "Подключение «быстрого» звонка (отправка текста в мессенджер)", price: 3000 },
    { title: "Создание простого специального блока", price: 2000 },
    { title: "Политика конфиденциальности и cookie", price: 2000 },
    { title: "Подключение нового домена", price: 2000 },

  ];

  return (
    <div
      id="app"
      className="max-container m-auto h-full overflow-auto gradient-bg p-8"
    >
      <div className="">
        {/* Заголовок */}
        <div className="text-center">
          <h1 id="table-title" className="text-5xl font-bold text-white mb-4">
            Наши услуги
          </h1>
          <div className="w-24 h-1 bg-white mx-auto opacity-80"></div>
        </div>

        {/* Таблица услуг */}
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-tiffany to-tiffany">
                  <th className="px-8 text-left font-sans font-bold py-3 text-lg text-white">
                  Индивидуальные услуги
                  </th>
                  <th className="px-8 text-right font-sans font-bold text-lg  text-white">
                    Цена
                  </th>
                </tr>
              </thead>
              <tbody id="services-body">
                {/* Генерируем строки таблицы через метод .map() */}
                {servicesData.map((service, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 !== 0 && "bg-gray-100"
                    } border-b border-gray-100`}
                  >
                    <td className="px-8">
                      <div className="flex items-center">
                        <span className="text-gray-800 text-md">
                          {service.title}
                        </span>
                      </div>
                    </td>
                    <td className=" text-right">
                      <span className="price-badge inline-block px-6 py-2 rounded-full text-gray-800 text-md">
                        {service.price.toLocaleString("ru-RU")} ₽
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Подпись о валюте */}
        <div className="text-center mt-8">
          <p className="text-white text-sm opacity-80">
            Все цены указаны в рублях
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesApp;
