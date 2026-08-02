const svg = document.querySelector("#topography");

const WIDTH = 1200;
const HEIGHT = 700;

const COLORS = [
    "#041F60",
    "#00A8A8"
];

function noise(x, amplitude) {

    return Math.sin(x * 0.015) * amplitude;

}

function createContour(baseY, color, opacity) {

    let d = `M 0 ${baseY}`;

    for (let x = 0; x <= WIDTH; x += 60) {

        const y =
            baseY +
            noise(x, 25) +
            Math.sin(x * 0.005 + baseY * 0.02) * 18;

        const cp1x = x - 30;
        const cp1y = y - 10;

        const cp2x = x;
        const cp2y = y + 10;

        d += ` C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${x} ${y}`;

    }

    const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
    );

    path.setAttribute("d", d);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", color);
    path.setAttribute("stroke-width", "1.2");
    path.setAttribute("opacity", opacity);

    svg.appendChild(path);

}

for (let i = 0; i < 26; i++) {

    createContour(

        40 + i * 28,

        COLORS[i % COLORS.length],

        i % 2 === 0 ? .08 : .05

    );

}
