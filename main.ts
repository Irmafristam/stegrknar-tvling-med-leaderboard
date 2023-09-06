input.onButtonPressed(Button.A, function () {
    basic.showNumber(stegräknare)
})
input.onGesture(Gesture.Shake, function () {
    stegräknare += 1
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    emoji += 1
    if (emoji == 1) {
        basic.showIcon(IconNames.SmallHeart)
    } else if (emoji == 2) {
        basic.showIcon(IconNames.Heart)
    } else if (emoji == 3) {
        basic.showIcon(IconNames.Square)
    } else if (emoji == 4) {
        basic.showIcon(IconNames.Skull)
    } else {
        emoji = 1
        basic.showIcon(IconNames.SmallHeart)
    }
})
let emoji = 0
let stegräknare = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
