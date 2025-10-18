/** @type {import('next').NextConfig} */
const nextConfig = {
  // generate a static export when building
  output: 'export',
  // when deploying to GitHub Pages under a repo (username.github.io/repo),
  // set basePath and assetPrefix so asset URLs include the repo name.
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
