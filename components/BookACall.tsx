"use client";

import { useState } from "react";
import { Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BookACall({title}:any) {
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
        <>
            <Button
                variant="outline"
                className="bg-black text-white rounded-xl text-md px-4 py-2"
                onClick={openBooking}
            >
                {title}
                
            </Button>

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
        </>
    );
}
