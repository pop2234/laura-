basic.showLeds(`
    . . # # .
    . # # # .
    # . # . #
    . . # . .
    . # . # .
    `)
basic.showLeds(`
    . # # . #
    . # # # .
    . . # . .
    # . # # .
    . # . . .
    `)
basic.showLeds(`
    . . # # .
    . . # # .
    # # # # .
    . . # . .
    . # . # .
    `)
basic.showLeds(`
    . . # # .
    . . # # .
    . # # # #
    . . # . .
    . # . # .
    `)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        music.playMelody("E B C5 A B G A F ", 120)
        music.playMelody("B A G A G F A C5 ", 120)
        basic.showIcon(IconNames.Heart)
        basic.showLeds(`
            . # . # .
            # # # # #
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            . # # # .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showString("the power of music")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            . # # # .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # # # # #
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showIcon(IconNames.Heart)
        basic.showLeds(`
            . # . # .
            # # # # #
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showIcon(IconNames.Heart)
        basic.showLeds(`
            . # . # .
            # # # # #
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showIcon(IconNames.Heart)
        music.playMelody("E B C5 A B G A F ", 120)
    }
    basic.pause(1000)
})
