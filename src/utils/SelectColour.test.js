import PaintColour from "./PaintColour";
import findNearestPaintColour from "./SelectColour";

test('Finds the nearest colours to', () => {
    const paintColours = [
        new PaintColour("White", 0xFFFFFF),
        new PaintColour("Red", 0xFF0000),
        new PaintColour("Yellow", 0xFFFF00),
        new PaintColour("Magenta", 0xFF00FF),
        new PaintColour("Green", 0x00FF00),
        new PaintColour("Aqua", 0x00FFFF),
        new PaintColour("Blue", 0x0000FF),
        new PaintColour("Black", 0x000000),
    ];

    const slateBlue = findNearestPaintColour(0x6A5ACD, paintColours);

    expect(slateBlue).toMatchObject(new PaintColour("Blue", 0x0000FF));

    const saddleBrown = findNearestPaintColour(0x8B4513, paintColours);

    expect(saddleBrown).toMatchObject(new PaintColour("Red", 0xFF0000));

    const lightPink = findNearestPaintColour(0xFFB6C1, paintColours);

    expect(lightPink).toMatchObject(new PaintColour("White", 0xFFFFFF));
});
  