import React from 'react';

const Newsletter = () => {
    return (
        <section className="bg-rose-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 -ml-16 -mt-16 w-64 h-64 rounded-full bg-rose-100 opacity-50 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 -mr-16 -mb-16 w-64 h-64 rounded-full bg-accent opacity-10 blur-3xl"></div>

            <div className="max-w-3xl mx-auto text-center relative z-10">
                <h2 className="text-3xl font-serif font-bold text-secondary mb-4">
                    Join Our Exclusive Circle
                </h2>
                <p className="text-gray-600 mb-8">
                    Subscribe to receive updates on new collections, special offers, and style inspiration directly to your inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 justify-center">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="px-6 py-3 rounded-full border border-rose-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent flex-grow max-w-md bg-white/80 backdrop-blur-sm"
                    />
                    <button
                        type="submit"
                        className="px-8 py-3 bg-secondary text-white rounded-full hover:bg-accent transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
