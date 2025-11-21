import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-primary/80 backdrop-blur-md sticky top-0 z-50 border-b border-rose-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="font-serif text-2xl font-bold text-secondary tracking-wider">
                            LuxeGems
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link to="/" className="text-secondary hover:text-accent transition-colors font-medium">Home</Link>
                        <Link to="/shop" className="text-secondary hover:text-accent transition-colors font-medium">Shop</Link>
                        <Link to="/about" className="text-secondary hover:text-accent transition-colors font-medium">About</Link>
                        <Link to="/contact" className="text-secondary hover:text-accent transition-colors font-medium">Contact</Link>
                    </div>

                    {/* Icons */}
                    <div className="hidden md:flex items-center space-x-6">
                        <button className="text-secondary hover:text-accent transition-colors">
                            <Search size={20} />
                        </button>
                        <button className="text-secondary hover:text-accent transition-colors">
                            <User size={20} />
                        </button>
                        <button className="text-secondary hover:text-accent transition-colors">
                            <Heart size={20} />
                        </button>
                        <button className="text-secondary hover:text-accent transition-colors relative">
                            <ShoppingBag size={20} />
                            <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-secondary hover:text-accent focus:outline-none">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-primary border-t border-rose-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className="block px-3 py-2 text-secondary hover:text-accent font-medium">Home</Link>
                        <Link to="/shop" className="block px-3 py-2 text-secondary hover:text-accent font-medium">Shop</Link>
                        <Link to="/about" className="block px-3 py-2 text-secondary hover:text-accent font-medium">About</Link>
                        <Link to="/contact" className="block px-3 py-2 text-secondary hover:text-accent font-medium">Contact</Link>
                    </div>
                    <div className="px-4 py-3 border-t border-rose-100 flex justify-around">
                        <button className="text-secondary hover:text-accent"><Search size={20} /></button>
                        <button className="text-secondary hover:text-accent"><User size={20} /></button>
                        <button className="text-secondary hover:text-accent"><Heart size={20} /></button>
                        <button className="text-secondary hover:text-accent"><ShoppingBag size={20} /></button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
