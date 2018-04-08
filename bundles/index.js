import {Array1D, NDArray, NDArrayMathCPU} from 'deeplearn';
import {randomUniform} from 'd3-random';
import {range} from 'd3-array';
const math = new NDArrayMathCPU(false);

import Descartes from '../figures/Descartes.html';
new Descartes({target: document.querySelector('#descartes')});

import AlternateUsesFaces from '../figures/AlternateUsesFaces.html';
new AlternateUsesFaces({target: document.querySelector('#alternate-uses .faces')});
import AlternateUsesSentences from '../figures/AlternateUsesSentences.html';
new AlternateUsesSentences({target: document.querySelector('#alternate-uses .sentences')});
import AlternateUsesMolecules from '../figures/AlternateUsesMolecules.html';
new AlternateUsesMolecules({target: document.querySelector('#alternate-uses .molecules')});
