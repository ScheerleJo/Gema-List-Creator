const fs = require("fs");
require('esbuild').build({
    entryPoints: ['build/index.js'],
    bundle: true,
    charset: "utf8",
    target: 'es5',
    format: 'iife',
    outfile: 'build/out/index.js',
  })
  .catch(() => process.exit(1))
  .then(() => {
    console.log("Build successful. Modifying index.jsx now.");
    const lines = fs.readFileSync('./build/out/index.js', 'utf8').split('\n');
    lines.shift(); // Remove first line
    lines.pop(); // Remove last line
    lines.pop(); // Remove second last line
    fs.writeFileSync('./build/out/index.js', lines.join('\n'));
})
