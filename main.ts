input.onButtonPressed(Button.A, function () {
    basic.showNumber(antalSteg)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    emoji += 1
    if (emoji == 1) {
        basic.showIcon(IconNames.Scissors)
    } else if (emoji == 2) {
        basic.showIcon(IconNames.Heart)
    } else if (emoji == 3) {
        basic.showIcon(IconNames.Square)
    } else if (emoji == 4) {
        basic.showIcon(IconNames.Skull)
    } else {
        emoji = 1
        basic.showIcon(IconNames.Scissors)
    }
})
input.onGesture(Gesture.Shake, function () {
    antalSteg += 1
})
let emoji = 0
let antalSteg = ""
basic.showIcon(IconNames.Happy)
radio.setGroup(40)
basic.forever(function () {
    radio.sendValue(antalSteg, 0)
})
