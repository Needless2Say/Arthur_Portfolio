import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";


const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});


const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});


export const metadata: Metadata = {
    title: "Arthur's Portfolio",
    description: "About Arthur Krieger and his Career",
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-98X0KCB8Z9"></Script>
                <Script id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-98X0KCB8Z9');
                `}
                </Script>
            </head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
