import {motion} from "motion/react";
import {useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AccordionItem( {title, children, ...aos}) {
 
  const [open, setOpen] = useState(false);

  return (
      <div className="blockAccordion"{ ...aos}>

        <motion.button className="blockAccordion__btn"
         onClick={() => setOpen (!open)}
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.95, backgroundColor: "rgb(246, 207, 207)"}}
         >

         {title}
        </motion.button>
        
        <motion.div
           className="accordion-content"
           initial={false}
           animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
           transition={{ duration: 0.3 }}
          >
           <div className="accordionInsade">
            {children}
           </div>
          </motion.div>
      </div>
  );
}

export default AccordionItem;
















