import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

import Newsletter from '../components/Newsletter';

const Home = () => {
    const featuredProducts = [
        { id: 1, name: 'Eternal Rose Ring', category: 'Rings', price: 129 },
        { id: 2, name: 'Sapphire Drop Earrings', category: 'Earrings', price: 249 },
        { id: 3, name: 'Gold Chain Necklace', category: 'Necklaces', price: 189 },
        { id: 4, name: 'Diamond Tennis Bracelet', category: 'Bracelets', price: 499 },
    ];



    return (
        <div className="bg-soft-white">
            <Hero />

            {/* Featured Products Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-secondary">Featured Collection</h2>
                    <p className="mt-4 text-gray-500">Handpicked pieces that radiate elegance and charm.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* Community Section */}
            <section className="bg-rose-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-serif font-bold text-secondary mb-6">
                        Join Our Community
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Become a part of the OSHINA family. We celebrate elegance, authenticity, and the stories that make you unique.
                    </p>
                    <a
                        href="/community"
                        className="inline-block px-8 py-3 bg-accent text-white rounded-full hover:bg-accent-hover transition-colors shadow-lg"
                    >
                        Know more about our community
                    </a>
                </div>
            </section>

            <Newsletter />
        </div>
    );
};

export default Home;
