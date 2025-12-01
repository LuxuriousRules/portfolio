import { motion } from "motion/react";



function Slaider() {
  const photos = ["/1dress.jpg", "/dress2.jpg", "/dress3.jpg"];

  return (
    <motion.div 
    className="slaider" 
    drag="x" 
    whileDrag={{ scale: 1.05 }}
    dragConstraints={{ left: -840, right: 0 }}
    >

      {photos.map((src, index) => (

        <motion.img
          className="slaider__img"
          key={index}
          src={src}
          alt={`photo-${index}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        />
      ))}
    </motion.div>
  );
}

export default Slaider;










