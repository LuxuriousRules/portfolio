import { Link } from "react-router-dom";
import { motion } from "motion/react";

const MotionLink = motion(Link);

function Button ({children, onClick, type="button"}){
   return(
    <MotionLink  to="/Shop" className="ui-button"  type={type} onClick={onClick}  whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95, backgroundColor: "rgb(246, 207, 207)" }}
 >
        {children}
    </MotionLink>
   );
}

export default Button;