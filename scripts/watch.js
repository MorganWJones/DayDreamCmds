const { build: esBuild } = require('esbuild');
const { watch } = require('chokidar');
const { green, gray } = require('colorette');
const { dtsPlugin } = require('esbuild-plugin-d.ts');

const build = (path, outPath) => {
	const start = Date.now();

	esBuild({
		target: 'node16',
		allowOverwrite: true,
		entryPoints: [path],
		outfile: outPath,
		minify: true,
		plugins: [dtsPlugin()],
	});

	return {
		start,
		end: Date.now(),
	};
};

watch('src')
	.on('ready', () => console.log(green('Waiting for changes in src...')))
	.on('all', (eventName, path) => {
		if (['add', 'change'].includes(eventName)) {
			const outPath = path.replace(/[t|j]s$/, 'js').replace(/^src/, 'dist');
			const { start, end } = build(path, outPath);

			console.log(gray(`${path} => ${outPath} => ${end - start}ms`));
		}
	});
