import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'preview.colorlib.com', // Rasm hostini yozing
				pathname: '/images/**', // Rasm joylashgan yo‘nalish
			},
			{
				protocol: 'https',
				hostname: 'randomuser.me', // Rasm hostini yozing
				pathname: '/images/**', // Rasm joylashgan yo‘nalish
			},
		],
		domains: ['preview.colorlib.com', 'randomuser.me'], // Alternativ usul
	},
};

export default nextConfig;
