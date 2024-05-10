import Card from './Card';
import { knotsData } from './knots';

const randomKnots = new Array(10)
    .fill(0)
    .map(_ => knotsData[Math.floor(Math.random() * knotsData.length)]);

function App() {

    return randomKnots.map(knot =>
        <Card knot={knot} key={knot.name} />
    )
}

export default App
