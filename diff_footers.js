const fs = require('fs');
const path = require('path');

const files = ['index.html', 'about.html', 'contact.html', 'menu.html', 'includes/footer.html'];

files.forEach(f => {
  const filepath = path.join(__dirname, f);
  if (!fs.existsSync(filepath)) return;
  const content = fs.readFileSync(filepath, 'utf8');

  // Extract footer HTML
  // Start from <footer id="cherry-footer"> to </footer>
  const startIdx = content.indexOf('<footer id="cherry-footer">');
  const endIdx = content.indexOf('</footer>', startIdx);
  if (startIdx === -1 || endIdx === -1) {
    console.log(`${f}: footer not found`);
    return;
  }
  const footerHtml = content.substring(startIdx, endIdx + 9);
  
  // Hash or summarize
  console.log(`${f}: length ${footerHtml.length}`);
  // print first 100 chars and last 100 chars
  // also check if logo-transparent is used
  const hasLogoTransparent = footerHtml.includes('logo-transparent.png');
  const hasLogoPng = footerHtml.includes('logo.png');
  console.log(`  logo-transparent.png: ${hasLogoTransparent}, logo.png: ${hasLogoPng}`);
  
  // Find social links
  const matches = footerHtml.match(/href="[^"]*maps[^"]*"/g);
  console.log(`  maps links: ${JSON.stringify(matches)}`);
});
