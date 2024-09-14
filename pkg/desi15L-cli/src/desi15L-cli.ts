#!/usr/bin/env node
// desi15L-cli.ts

import { geom_cli } from 'geomcli';
import packag from '../package.json';
import { designList } from './designList';

//console.log('desi15L-cli says hello');
await geom_cli(process.argv, designList, packag, 'output');
//console.log('desi15L-cli says bye');
