// Read the HTML file and add source elements to all pictures
const fs = require('fs');
const html = fs.readFileSync('/workspace/index.plain.html', 'utf8');

// Replace all <picture><img ... /> patterns with proper source elements
const fixed = html.replace(/<picture>\s*<img\s+src="([^"]+)"\s+alt="([^"]*)"\s*\/?>\s*<\/picture>/g, (match, src, alt) => {
  return `<picture>
          <source type="image/jpeg" srcset="${src}?width=2000&format=webply&optimize=medium" media="(min-width: 600px)">
          <source type="image/jpeg" srcset="${src}?width=750&format=webply&optimize=medium">
          <img loading="lazy" alt="${alt}" src="${src}?width=750" width="750" height="500">
        </picture>`;
});

fs.writeFileSync('/workspace/index-fixed.plain.html', fixed);
console.log('Fixed HTML written to index-fixed.plain.html');
