const fs = require('fs');

const home = fs.readFileSync('index.html', 'utf8');
const menu = fs.readFileSync('menu.html', 'utf8');
const about = fs.readFileSync('about.html', 'utf8');
const contact = fs.readFileSync('contact.html', 'utf8');
const incl = fs.readFileSync('includes/footer.html', 'utf8');

function countPattern(str, pat) {
  return (str.match(new RegExp(pat, 'g')) || []).length;
}

console.log('=== Social icon counts (ft-social class) ===');
console.log('Home:     ', countPattern(home, 'ft-social'));
console.log('Menu:     ', countPattern(menu, 'ft-social'));
console.log('About:    ', countPattern(about, 'ft-social'));
console.log('Contact:  ', countPattern(contact, 'ft-social'));
console.log('Includes: ', countPattern(incl, 'ft-social'));

console.log('\n=== WhatsApp references ===');
console.log('Home:     ', countPattern(home, 'WhatsApp'));
console.log('Menu:     ', countPattern(menu, 'WhatsApp'));
console.log('About:    ', countPattern(about, 'WhatsApp'));
console.log('Contact:  ', countPattern(contact, 'WhatsApp'));
console.log('Includes: ', countPattern(incl, 'WhatsApp'));

console.log('\n=== Facebook references ===');
console.log('Home:     ', countPattern(home, 'Facebook'));
console.log('Menu:     ', countPattern(menu, 'Facebook'));
console.log('About:    ', countPattern(about, 'Facebook'));
console.log('Contact:  ', countPattern(contact, 'Facebook'));
console.log('Includes: ', countPattern(incl, 'Facebook'));

console.log('\n=== Google Maps link ===');
console.log('Home:     ', countPattern(home, 'maps.app.goo.gl/4Nf5SAfhEfKFP2TB7'));
console.log('Menu:     ', countPattern(menu, 'maps.app.goo.gl/4Nf5SAfhEfKFP2TB7'));
console.log('About:    ', countPattern(about, 'maps.app.goo.gl/4Nf5SAfhEfKFP2TB7'));
console.log('Contact:  ', countPattern(contact, 'maps.app.goo.gl/4Nf5SAfhEfKFP2TB7'));
console.log('Includes: ', countPattern(incl, 'maps.app.goo.gl/4Nf5SAfhEfKFP2TB7'));

console.log('\n=== cherry-float-btn (floating buttons) ===');
console.log('Home:     ', countPattern(home, 'cherry-float-btn'));
console.log('Menu:     ', countPattern(menu, 'cherry-float-btn'));
console.log('About:    ', countPattern(about, 'cherry-float-btn'));
console.log('Contact:  ', countPattern(contact, 'cherry-float-btn'));
console.log('Includes: ', countPattern(incl, 'cherry-float-btn'));
