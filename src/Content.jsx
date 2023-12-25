import { useEffect, useState } from "react";
import Product from "./Product";

const Content = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.log("Error fetching data:", error));
    }, []);

    // Filter products based on selected category
    let filteredProducts = products;
    if (category) {
        filteredProducts = products.filter(item => item.category === category);
    }

    const uniqueCategories = [...new Set(products.map(item => item.category))];

    const handleCategoryClick = (selectedCategory) => {
        setCategory(selectedCategory);
    };

    return (
        <div className="mt-10">
            <div>
                {/* Display category buttons */}
                <div className="flex items-center justify-center gap-5">
                    <button className="btn" onClick={() => setCategory('')}>All</button>
                    {uniqueCategories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryClick(cat)}
                            className={category === cat ? 'selected btn' : 'btn'}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 place-items-center gap-5 mt-10">
                {/* Render filtered products */}
                {filteredProducts.map(item => (
                    <Product key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Content;
