import AccordionItem from "../ui/Acardion";
import Footer from "./Footer"
import Slaider from "../ui/Slaider"



function Accordion() {
  return (
     <>
    <div className="accordion">
      <div data-aos="zoom-out">
      <Slaider/>
      </div>
      <h1 className="accordion__title" data-aos="fade-down">Faq</h1>
      <AccordionItem data-aos="fade-up" title="Условия сотрудничества">
        Предлагаем удобные условия:
- Работа без необходимости закупки и хранения товара — мы берём на себя логистику и отправку заказов.
      </AccordionItem>
     
       <AccordionItem  data-aos="fade-left" title="Оплата и доставка">
        Motion.dev — это библиотека анимаций для React, Vue и JS.
      </AccordionItem>

      <AccordionItem data-aos="fade-right" title="Возврат обмен">
        Да, стили полностью задаются через CSS или Tailwind.
      </AccordionItem>
     
     <AccordionItem data-aos="fade-up" title="О нас">
      О нас

Наш магазин — это пространство для женщин, которые ценят элегантность, качество и вечную классику.  
Мы создаём коллекции, вдохновлённые гармонией стиля и комфорта, чтобы каждая деталь подчеркивала индивидуальность и уверенность.  

Что мы предлагаем:
- Классические платья, костюмы и блузы, которые остаются актуальными вне времени.  
- Высокое качество тканей и пошива, чтобы вещи служили долго и выглядели безупречно.  
- Универсальные модели, подходящие как для работы, так и для особых случаев.  
- Внимание к деталям и современный взгляд на традиционный стиль.  

Мы верим, что классика — это не скучно, а стильно и женственно.  
Наши вещи помогают создавать образ, который говорит о вас больше, чем слова.
     </AccordionItem>
      
    </div>
    
    <Footer/>
    </>
  );
}

export default Accordion;