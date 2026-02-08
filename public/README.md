# Public Assets Directory

This directory contains static assets that are directly accessible via URL.

## Usage

Files in this directory can be accessed from the root URL:
- `/public/logo.png` → accessible at `http://localhost:3000/logo.png`
- `/public/images/banner.jpg` → accessible at `http://localhost:3000/images/banner.jpg`

## Best Practices

- Use Next.js Image component (`next/image`) for images when possible
- Optimize images before adding them here
- Use descriptive filenames
- Organize assets into subdirectories (e.g., images/, fonts/, icons/)

## Common Assets

Typical files to include:
- `favicon.ico` - Browser tab icon
- `robots.txt` - Search engine crawling instructions  
- `sitemap.xml` - Site structure for SEO
- Images, fonts, and other static files
