

function ShopCollection ({PhotoIndex, ...props}) {

 const images = [
    { src:"/1dress.jpg",
      name:"dress",
      description:"1 item"
    },
    { src:"/coca1.jpg",
      name:"dress",
      description:"2 item"
    },
    { src:"/wintsale.jpg",
      name:"jacket",
      description:"1 item"

    }   
 ];

 const image = images[PhotoIndex];
 
 return(
    
    <img src={image.src} {...props} alt="dress"/>
    
 );



 
}
export default ShopCollection;



 
