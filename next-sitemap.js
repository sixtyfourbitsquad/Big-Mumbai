/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bigmumbai.game',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/404', '/500'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://bigmumbai.game/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    }
  },
}