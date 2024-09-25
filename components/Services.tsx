"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Flame, ArrowRight, Loader2, X } from "lucide-react";

export default function Service() {
    const [chatMessages] = useState([
        { role: 'bot', content: `Hi! Welcome to Shashank's page, how can I help you today?` },
        { role: 'user', content: 'Hi! Can you add an AI chatbot to my website?' },
        { role: 'bot', content: 'Yes, I can help with that. What features do you need?' },
        { role: 'user', content: 'I need it to answer customer questions and help with bookings. Is that possible?' },
        { role: 'bot', content: 'Absolutely. Could you please provide your email to get started?' },
        { role: 'user', content: 'Sure, here is my email: john_03@gmail.com' },
        { role: 'bot', content: `Perfect. I'll be in touch soon to discuss the next steps. Have a great day!` },
    ]);

    const [showBooking, setShowBooking] = useState(false); // Show or hide booking iframe
    const [loading, setLoading] = useState(true); // Loading state for iframe

    const openBooking = () => {
        setShowBooking(true);
        setLoading(true);
    };

    const closeBooking = () => {
        setShowBooking(false);
    };

    return (
        <section className="py-20 bg-black text-white relative">
            <div className="container mx-auto px-14">
                <h2 className="text-5xl font-bold mb-16 text-center">
                    What I Do <span className="text-purple-500">Best</span>
                </h2>
                <div className="flex flex-col lg:flex-row items-start pt-10 justify-between">
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0 pt-20 pr-0 lg:pr-8">
                        <h3 className="text-2xl font-semibold mb-6 text-purple-500 flex items-center">
                            <span className="mr-2 relative group">
                                <Flame className="text-orange-500 group-hover:text-orange-400 transition-colors duration-300" />
                                <span className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-25 rounded-full blur-md transition-opacity duration-300"></span>
                            </span>
                            Bring AI to Your Product
                        </h3>
                        <h4 className="text-5xl font-bold mb-6 leading-tight">
                            Did You Know AI<br />
                            Makes Your Product<br />
                            Up to <span className="text-white">80% More<br />
                                Efficient</span>?
                        </h4>
                        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                            AI makes your product more responsive and intuitive,<br />
                            helping customers get what they need quicker and<br />
                            with less effort. This improved efficiency leads to<br />
                            better user experiences and higher satisfaction.
                        </p>
                        <Button
                            variant="outline"
                            className="bg-black text-white rounded-xl text-md px-4 py-2"
                            onClick={openBooking} // Open booking page on click
                        >
                            Let's talk AI-Book A Call
                        </Button>
                    </div>

                    <div className="hidden lg:block lg:w-1/2">
                        <div className="bg-gray-900 rounded-2xl p-6 max-w-md mx-auto shadow-lg">
                            <div className="flex items-center mb-6">
                                <Bot className="text-purple-500 mr-2 h-6 w-6" />
                                <span className="font-semibold text-lg">Support</span>
                            </div>
                            <div className="space-y-2 mb-3">
                                {chatMessages.map((message, index) => (
                                    <div
                                        key={index}
                                        className={`p-3 rounded-2xl ${message.role === 'bot'
                                            ? 'bg-purple-500 text-white'
                                            : 'bg-blue-500 text-white ml-auto'
                                            }`}
                                        style={{ maxWidth: '80%' }}
                                    >
                                        {message.content}
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center bg-gray-800 rounded-full overflow-hidden">
                                <Input
                                    type="text"
                                    placeholder="Ask a question"
                                    className="flex-grow bg-transparent border-none text-white pl-4"
                                    disabled
                                />
                                <Button variant="ghost" className="text-purple-500 p-2">
                                    <ArrowRight className="h-6 w-6" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay Booking Page */}
            {showBooking && (
                <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex items-center justify-center z-50">
                    <div className="relative w-full h-full max-w-4xl">
                        {loading && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Loader2 className="animate-spin text-white h-10 w-10" />
                            </div>
                        )}
                        <iframe
                            src="https://cal.com/theghost1623/book-a-call"
                            className="w-full h-full border-0 rounded-lg"
                            onLoad={() => setLoading(false)}
                        />
                        <button
                            className="absolute top-4 right-4 text-white"
                            onClick={closeBooking}
                        >
                            <X className="h-8 w-8" />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
