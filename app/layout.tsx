import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

import { Loading } from "@/components/auth/loading";
import { Toaster } from "@/components/ui/sonner";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { ModalProvider } from "@/providers/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "WIN DRAWING",
	description: "An interactive online drawing tool to collaborate with friends",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Suspense fallback={<Loading />}>
					<ConvexClientProvider>
						<Toaster />
						<ModalProvider />
						{children}
					</ConvexClientProvider>
				</Suspense>
			</body>
		</html>
	);
}
