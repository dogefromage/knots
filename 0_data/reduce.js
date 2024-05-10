const Papa = require('papaparse');
const fs = require('fs');

const csv = fs.readFileSync('knots.csv', { encoding: 'utf-8' });
const frame = Papa.parse(csv);
/* const labels = */ frame.data.shift();

const labels = [
    'thumb_src',
    'alexander_polynomial',
    'conway_polynomial',
    'gauss_code',
    'jones_polynomial'
]

const knots = new Map();

for (const line of frame.data) {
    if (line.length < 3) continue;

    const name = line.shift();
    const url = line.shift();

    const index = line.findIndex(x => x.length);
    if (index < 0) {
        throw new Error();
    }

    const tag = labels[index];

    if (!knots.has(name)) {
        knots.set(name, { name, url });
    }

    const knot = knots.get(name);
    knot[tag] = line[index];
}

const knotsArr = [...knots.values()];
const exp = JSON.stringify(knotsArr);

fs.writeFileSync('data/knots.json', exp, { encoding: 'utf-8' });