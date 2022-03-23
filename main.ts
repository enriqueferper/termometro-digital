input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 25) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
    if (input.temperature() < 5) {
        basic.showLeds(`
            . # . # .
            # # . # #
            . . # . .
            # # . # #
            . # . # .
            `)
    }
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
	
})
