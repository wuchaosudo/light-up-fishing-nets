basic.forever(function () {
    if (input.lightLevel() < 50) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.playTone(880, music.beat(BeatFraction.Whole))
    } else {
        basic.clearScreen()
    }
})
