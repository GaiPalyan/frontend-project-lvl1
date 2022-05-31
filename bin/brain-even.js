#!/usr/bin/env node

import readlineSync from 'readline-sync';
import Even from '../src/Even.js';

const name = readlineSync.question('May I have your name?: ');

Even(name);
