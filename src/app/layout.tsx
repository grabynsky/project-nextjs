import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/header/HeaderComponent";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Header",
    description: "HeaderComponent",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>

        <HeaderComponent/>

        {children}

        </body>
        </html>
    );
}
