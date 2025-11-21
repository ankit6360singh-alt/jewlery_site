import React from 'react';
import { ShoppingBag, Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
    return (
        <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-rose-50">
            {/* Image Container */}
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 relative">
                <div className="h-64 w-full bg-gray-100 flex items-center justify-center text-gray-300">
                    {/* Placeholder for Product Image */}
                    <span className="text-4xl">💍</span>
                </div>

                {/* Overlay Actions */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-accent hover:text-white transition-colors">
                        <Heart size={18} />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 text-center">
                <h3 className="text-lg font-serif font-medium text-secondary group-hover:text-accent transition-colors">
                    <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                    </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                <p className="mt-2 text-xl font-medium text-secondary">${product.price}</p>

                <button className="mt-4 w-full py-2 px-4 bg-primary text-secondary border border-secondary rounded-full hover:bg-secondary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                    <ShoppingBag size={16} /> Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
