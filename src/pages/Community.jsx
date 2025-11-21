import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Community = () => {
    return (
        <div className="min-h-screen bg-soft-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <Link to="/" className="inline-flex items-center text-accent hover:text-accent-hover mb-8 transition-colors">
                    <ArrowLeft className="mr-2" size={20} />
                    Back to Home
                </Link>

                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-rose-100">
                    <h1 className="text-4xl font-serif font-bold text-secondary mb-6">The OSHINA Community</h1>

                    <div className="prose prose-rose max-w-none text-gray-600 space-y-6">
                        <p className="text-lg leading-relaxed">
                            Welcome to the OSHINA family. We are more than just a jewelry brand; we are a collective of individuals who believe that style is a personal narrative.
                        </p>

                        <p>
                            Our community is built on the pillars of elegance, authenticity, and shared inspiration. By joining us, you become part of a movement that celebrates unique expression and timeless beauty.
                        </p>

                        <h3 className="text-2xl font-serif text-secondary mt-8 mb-4">Why Join Us?</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Exclusive early access to new collections.</li>
                            <li>Invitations to private styling events and showcases.</li>
                            <li>A platform to share your own OSHINA moments and stories.</li>
                            <li>Special member-only rewards and experiences.</li>
                        </ul>

                        <p className="mt-8 font-medium text-secondary">
                            Together, let's redefine what it means to wear your story.
                        </p>
                    </div>

                    <div className="mt-10 pt-8 border-t border-gray-100">
                        <button className="w-full sm:w-auto px-8 py-3 bg-secondary text-white rounded-full hover:bg-primary hover:text-secondary transition-all duration-300 shadow-lg">
                            Sign Up for Updates
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;
