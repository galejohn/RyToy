let strip001_120 = light.createStrip(pins.A1, 120)
let strip001_007 = strip001_120.range(1, 7)
let strip113_120 = strip001_120.range(113, 7)
let strip001_030 = strip001_120.range(1, 30)
let strip001_037 = strip001_120.range(1, 37)
let strip091_120 = strip001_120.range(91, 30)
let strip083_120 = strip001_120.range(83, 37)
let strip030_090 = strip001_120.range(30, 60)
strip001_120.setAll(0x000000)
let varHue = 128
let varSat = 255
let varVal = 255
forever(function () {
    if (!(crickit.signal1.digitalRead())) {
        // start a comet
        strip001_007.setGradient(0x000000, light.hsv(varHue, varSat, varVal))
        // start a comet going the other direction
        strip113_120.setGradient(light.hsv(varHue, varSat, varVal), 0x000000)
        for (let i = 0; i < 30; i++) {
            strip001_037.move(LightMove.Rotate, 1)
            strip083_120.move(LightMove.Rotate, -1)
            pause(10)
        }
        strip001_037.setAll(0x000000)
        strip083_120.setAll(0x000000)
        strip030_090.showAnimation(light.rainbowAnimation, 4000)
        strip030_090.setAll(0x000000)
    }
    if (!(crickit.signal2.digitalRead())) {
        varHue += -30
        strip001_007.setAll(light.hsv(varHue, varSat, varVal))
        pause(1000)
        strip001_007.setAll(0x000000)
        pause(100)
    }
})
