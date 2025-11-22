import Button from "../ui/Button"
import Swal from 'sweetalert2'

function ProductCard ({product}) {

  const handleBuy = () => {
   Swal.fire({
    text: `Товар "${product.title}" Добавлен в крозину`,
    icon: 'success',
    confirmButtonColor: "black",
   });
  };

 return (
 
    <div key={product.id} className="Shop__product-card" data-aos="fade-up" data-aos-delay={product.id * 100}>
        <h1 className="Shop__title">{product.title}</h1>
        <img className="Shop__img" src={product.image} alt={product.description} />
        <p className="Shop__description">{product.description}</p>
        <span className="Shop__price">{product.price} uah</span>
        <Button  onClick={handleBuy}>Buy</Button>
    </div>

 );
}

export default ProductCard;



