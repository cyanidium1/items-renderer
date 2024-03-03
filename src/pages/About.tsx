import React from "react";
import Container from "@mui/material/Container";
import img from "../images/about.jpg";
import icon1 from "../images/benefits.svg";
import icon2 from "../images/cooking.svg";
import icon3 from "../images/calendar.svg";
import icon4 from "../images/cooling.svg";

const About: React.FC = () => {
  return (
    <section className="pt-2 pb-2 sm:pt-[64px] sm:pb-[72px] bg-about bg-no-repeat bg-cover bg-center">
      <Container
        sx={{ paddingTop: "16px", paddingBottom: "16px" }}
        maxWidth="xl"
      >
        <h1 className="font-semibold text-xl md:text-3xl text-center mb-6">
          О нас
        </h1>
        <div className="xl:flex items-center mb-20 gap-10 rounded-[20px] p-4 bg-white md:mb-6">
          <div className=" md:min-w-[426px] mx-auto max-w-[426px] overflow-hidden rounded-[20px] mb-4 xl:mb-0">
            <img
              className="w-full"
              src={img}
              alt="cook"
              width="329"
              height="315"
            />
          </div>
          <div className="grow">
            <p className="text-sm font-medium mb-3 md:text-xl">
              Приветствуем вас в "Tort Albania" – вашем путеводителем по миру
              изысканных домашних полуфабрикатов и любимых продуктов питания из
              лучших магазинов Германии, Польши, Украины, Греции…. , которые мы
              с радостью доставим вам с теплотой и вниманием.
            </p>
            <p className="text-sm font-medium mb-3 md:text-xl">
              Наш широкий ассортимент замороженой продукции удивит любого
              гурмана. Ассортимент из магазина - продукция вкусных и любимых
              нами продуктов . Сердце нашего предприятия – собственный цех, где
              производятся замороженные угощения, и каждый ингредиент
              подвергается внимательному отбору, начиная от свежего мяса до
              овощей, которые мы сами аккуратно выбираем на рынке.
            </p>
            <p className="text-sm font-medium md:text-xl">
              А для истинных ценителей сладкого "Tort Albania" готовы предложить
              индивидуальные торты на заказ. Позвольте нам привнести в ваши
              праздники не только вкус, но и эстетическое наслаждение с тортами,
              ставшими настоящими произведениями искусства. В "Tort Albania" мы
              не просто предлагаем продукты, мы создаем уникальный кулинарный
              опыт для вас.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-[20px] py-2 px-1">
            <img
              width="45"
              height="45"
              src={icon1}
              alt="benefits icon"
              className="block md:w-[79px] md:h-[79px] mb-4 md:mb-6 mx-auto"
            />
            {/* <Icon
              component="img"
              src="/images/benefits.svg"
              alt="benefits icon"
              className="block md:w-[79px] md:h-[79px]"
            /> */}
            <p className="text-center text-xs font-medium md:text-lg">
              На рынке с 2018 года
            </p>
          </div>
          <div className="bg-white rounded-[20px] py-2 px-1">
            <img
              width="45"
              height="45"
              src={icon2}
              alt="icon"
              className="block md:w-[79px] md:h-[79px] mb-4 md:mb-6 mx-auto"
            />
            <p className="text-center text-xs font-medium md:text-lg">
              Собственный цех по изготовлению замороженных полуфабрикатов
            </p>
          </div>
          <div className="bg-white rounded-[20px] py-2 px-1">
            <img
              width="45"
              height="45"
              src={icon3}
              alt="icon"
              className="block md:w-[79px] md:h-[79px] mb-4 md:mb-6 mx-auto"
            />
            <p className="text-center text-xs font-medium md:text-lg">
              Следим за сроком годности
            </p>
          </div>
          <div className="bg-white rounded-[20px] py-2 px-1">
            <img
              width="45"
              height="45"
              src={icon4}
              alt="icon"
              className="block md:w-[79px] md:h-[79px] mb-4 md:mb-6 mx-auto"
            />
            <p className="text-center text-xs font-medium md:text-lg">
              Храние продукции в больших морозильных камерах
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
