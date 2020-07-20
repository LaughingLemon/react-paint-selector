
const hexToRGB = (hexColor) => (
    {
        red: (hexColor >> 16) & 0xFF,
        green: (hexColor >> 8) & 0xFF,  
        blue: hexColor & 0xFF,
    }
);

const findNearestPaintColour = (hexCode, paintColours) => {
    const { red: r1, green: g1, blue: b1 } = hexToRGB(hexCode);

    paintColours.forEach((colour) => {
        const { red: r2, green: g2, blue: b2 } = hexToRGB(colour.hexCode);
        colour.distance = Math.sqrt(Math.pow((r1 - r2), 2) + Math.pow((g1 - g2), 2) + Math.pow((b1 - b2), 2));
    });

    const sortedColours = paintColours.sort((colour1, colour2) => (colour1.distance - colour2.distance));

    const nearestColor = sortedColours[0];
    nearestColor.distance = 0.0; 

    return nearestColor;
};

export default findNearestPaintColour;
