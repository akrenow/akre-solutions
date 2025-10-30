"use client";

import Script from "next/script";

interface GoogleAnalyticsProps {
    measurementId?: string;
}

export const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ 
    measurementId = "G-XNPCKLHL8P" 
}) => {
    if (!measurementId) {
        return null;
    }

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${measurementId}', {
                        page_title: document.title,
                        page_location: window.location.href,
                    });
                `}
            </Script>
        </>
    );
};

// Microsoft Clarity (optional)
export const MicrosoftClarity: React.FC<{ projectId?: string }> = ({ 
    projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID 
}) => {
    if (!projectId) {
        return null;
    }

    return (
        <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${projectId}");
            `}
        </Script>
    );
};

// Facebook Pixel (optional)
export const FacebookPixel: React.FC<{ pixelId?: string }> = ({ 
    pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID 
}) => {
    if (!pixelId) {
        return null;
    }

    return (
        <Script id="facebook-pixel" strategy="afterInteractive">
            {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${pixelId}');
                fbq('track', 'PageView');
            `}
        </Script>
    );
};
