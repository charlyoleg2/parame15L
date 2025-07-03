#!/usr/bin/env node
// desi15L-uis.ts

import { feli_cli } from 'feli';
import process from 'node:process';
import path from 'node:path';

const scrDir = import.meta.dirname;
const defaultPublicDir = path.join(scrDir, 'public');

//console.log('desi15L-uis.ts says Hello!');
try {
	await feli_cli(defaultPublicDir, process.argv);
} catch (err) {
	console.error(`Error from feli: ${err}`);
}
//console.log('desi15L-uis.ts says Bye!');
