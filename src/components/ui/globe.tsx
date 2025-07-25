"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function Globe() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;

        const globe = createGlobe(canvasRef.current!, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                // India - Primary focus with larger marker
                { location: [28.6139, 77.2090], size: 0.08 }, // New Delhi
                { location: [19.0760, 72.8777], size: 0.06 }, // Mumbai
                { location: [13.0827, 80.2707], size: 0.05 }, // Chennai
                { location: [22.5726, 88.3639], size: 0.05 }, // Kolkata
                { location: [12.9716, 77.5946], size: 0.05 }, // Bangalore

                // Europe - Major cities
                { location: [51.5074, -0.1278], size: 0.07 }, // London
                { location: [48.8566, 2.3522], size: 0.06 }, // Paris
                { location: [52.5200, 13.4050], size: 0.06 }, // Berlin
                { location: [41.9028, 12.4964], size: 0.05 }, // Rome
                { location: [40.4168, -3.7038], size: 0.05 }, // Madrid
                { location: [55.7558, 37.6176], size: 0.06 }, // Moscow
                { location: [59.3293, 18.0686], size: 0.04 }, // Stockholm
                { location: [47.3769, 8.5417], size: 0.04 }, // Zurich

                // North America
                { location: [40.7128, -74.0060], size: 0.07 }, // New York
                { location: [37.7749, -122.4194], size: 0.06 }, // San Francisco
                { location: [43.6532, -79.3832], size: 0.05 }, // Toronto

                // Asia Pacific
                { location: [35.6762, 139.6503], size: 0.07 }, // Tokyo
                { location: [39.9042, 116.4074], size: 0.06 }, // Beijing
                { location: [1.3521, 103.8198], size: 0.06 }, // Singapore
                { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney

                // Middle East & Africa
                { location: [25.2048, 55.2708], size: 0.05 }, // Dubai
                { location: [-26.2041, 28.0473], size: 0.04 }, // Johannesburg

                // South America
                { location: [-23.5505, -46.6333], size: 0.05 }, // São Paulo
                { location: [-34.6037, -58.3816], size: 0.04 }, // Buenos Aires
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.005; // Slower rotation for better visibility
            }
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <div className="flex justify-center items-center">
            <canvas
                ref={canvasRef}
                style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
            />
        </div>
    );
}