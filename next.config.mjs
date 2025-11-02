/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': `${process.cwd()}/app`,
      '@components': `${process.cwd()}/app/components`,
      '@lib': `${process.cwd()}/app/lib`,
      '@hooks': `${process.cwd()}/app/hooks`,
      '@assets': `${process.cwd()}/attached_assets`,
    };
    return config;
  },
};

export default nextConfig;
