import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

// import { MathComponent } from "mathjax-react";

const Card = ({ knot }) => {
    const imgUrl = `http://katlas.org${knot.thumb_src}`;

    return (
        <div className="card">
            <div className="background" />
            <div className="title">
                <p className="pre">Knot</p>
                <p className="name">{ knot.name.replace('_', '/') }</p>
            </div>
            <img src={imgUrl} className="thumb thumb-back" />
            <img src={imgUrl} className="thumb" />
            <div className="stats">
                <MathStat name='Gauss Code'
                    tex={knot.gauss_code
                        .replaceAll(',', ',\\allowbreak')} />
                <MathStat name='Alexander Polynomial'
                    tex={knot.alexander_polynomial} />
                <MathStat name='Conway Polynomial'
                    tex={knot.conway_polynomial} />
                {/* <MathStat name='Jones Polynomial'
                    tex={knot.jones_polynomial} /> */}
            </div>
        </div>
    );
}

export default Card;

const MathStat = ({ name, tex }) => {
    return (
        <div className="stat">
            <p className="stat-name">{name}</p>
            <div className="stat-tex">
                <InlineMath
                    math={tex}
                    renderError={e => console.error(e)}
                />
            </div>
        </div>
    );
}
