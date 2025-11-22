import ProductCard from "../ui/ProductCard";

function Shop () {
    const products = [
        {
            id:1,
            title: "Пальте Coca",
            price: 2500,
            image: "src/images/1dress.jpg",
            description: "Платье топ 2026",
            category: "платье"
        },
        {
            id:2,
            title: "Костюм Coca",
            price: 4500,
            image: "src/images/suit.png",
            description: "Костюм топ 2026",
            category: "костюмы"
        },
        {
           id:3,
           title: "Палье Coca",
           price: 2300,
           image: "src/images/coca1.jpg",
           description: "Платье New Year",
           category: "Платье"
        }
    ];

    const visibleIds = [1, 2, 3];

    return(
        <div className="Shop">
        {products.filter(product => visibleIds.includes(product.id))
        .map(product => (
            <ProductCard key={product.id} product={product} />

        ))}
         
       
        </div>
         
    );
}

export default Shop;