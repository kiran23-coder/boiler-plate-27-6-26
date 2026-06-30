const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx')) {
      results.push(file);
    }
  });
  return results;
}
const files = walk('frontend/src');
let count = 0;
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const target = 'className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"';
  const replacement = 'className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 dark:text-white dark:border-slate-700 dark:bg-slate-900"';
  if (content.includes(target)) {
    fs.writeFileSync(f, content.replaceAll(target, replacement));
    console.log('Fixed', f);
    count++;
  }
});
console.log('Total files fixed:', count);
