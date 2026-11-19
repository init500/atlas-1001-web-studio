import { readFileSync } from 'node:fs';
import { globSync } from 'node:fs';

const paths = globSync(['src/**/*.*', 'public/**/*.*', 'scripts/*.mjs', '.github/workflows/*.yml', '*.mjs', '*.md']);
for (const path of paths) {
  const lines = readFileSync(path, 'utf8').split('\n');
  for (const [index, line] of lines.entries()) {
    if (/[\u2013\u2014]/u.test(line)) {
      console.error(path + ':' + (index + 1) + ' contains a forbidden dash.');
      process.exitCode = 1;
    }
  }
}
