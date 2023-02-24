input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.showIcon(IconNames.Heart)
loops.everyInterval(500, function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(1000)
    }
})
basic.forever(function () {
	
})
