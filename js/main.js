const svg = document.querySelector("#topography");

const WIDTH = 900;
const HEIGHT = 500;

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function createPath(y, color, opacity) {

    let d = `M 0 ${y}`;

    for (let x = 0; x <= WIDTH; x += 90) {

        const offset = random(-35, 35);

        const cp1x = x - 45;

        const cp1y = y + random(-40, 40);
        
        const cp2x = x;
        
        const cp2y = y + offset;
        
        d += ` C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${x} ${y + offset}`;

    }

    const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
    );

    path.setAttribute("d", d);

    path.setAttribute("fill", "none");

    path.setAttribute("stroke", color);

    path.setAttribute("stroke-width", "2");

    path.setAttribute("opacity", opacity);

    path.setAttribute("stroke-linejoin", "round");

    path.setAttribute("stroke-linecap", "round");

    svg.appendChild(path);

}

for (let y = 80; y <= 440; y += 45) {

    createPath(y, "#041F60", .10);

}

for (let y = 100; y <= 420; y += 90) {

    createPath(y, "#00A8A8", .08);

}
