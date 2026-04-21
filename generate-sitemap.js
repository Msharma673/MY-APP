const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');
const path = require('path');

// Set the path for your sitemap.xml file
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');

// Define your URLs
const sitemapUrls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/courses', changefreq: 'weekly', priority: 0.8 },
  { url: '/coursesdata/:courseId', changefreq: 'weekly', priority: 0.8 },
  // { url: '/blogs', changefreq: 'weekly', priority: 0.8 },
  // { url: '/register', changefreq: 'monthly', priority: 0.5 },
  { url: '/about', changefreq: 'monthly', priority: 0.5 },
  { url: '/career', changefreq: 'monthly', priority: 0.5 },
  { url: '/maintainance', changefreq: 'never', priority: 0.1 },
  { url: '/sitemap', changefreq: 'monthly', priority: 0.5 },
  { url: '/quicklinks', changefreq: 'monthly', priority: 0.5 }
];

const sitemapStream = new SitemapStream({ hostname: 'https://accentaura.com' }); 

const writeStream = fs.createWriteStream(sitemapPath);

sitemapStream.pipe(writeStream);

sitemapUrls.forEach(url => {
  sitemapStream.write(url);
});

sitemapStream.end();

streamToPromise(sitemapStream).then(() => {
  console.log('Sitemap generated successfully!');
}).catch((err) => {
  console.error('Error generating sitemap:', err);
});
