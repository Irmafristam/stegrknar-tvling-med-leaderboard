input.onButtonPressed(Button.A, function () {
    if (emojichosen == false) {
        chooseemoji()
    }
})
input.onButtonPressed(Button.B, function () {
    if (emojichosen == false) {
        if (emojinumber == 0 && emoji_0_taken == true) {
            basic.showIcon(IconNames.No)
        } else {
            if (emojinumber == 1 && emoji_1_taken == true) {
                basic.showIcon(IconNames.No)
            } else {
                if (emojinumber == 2 && emoji_2_taken == true) {
                    basic.showIcon(IconNames.No)
                } else {
                    if (emojinumber == 3 && emoji_3_taken == true) {
                        basic.showIcon(IconNames.No)
                    } else {
                        emojichosen = true
                    }
                }
            }
        }
    }
    if (emojichosen == true) {
        if (emojinumber == 0) {
            radio.sendValue("emoji 0", steps)
        } else if (emojinumber == 1) {
            radio.sendValue("emoji 1", steps)
        } else if (emojinumber == 2) {
            radio.sendValue("emoji 2", steps)
        } else if (emojinumber == 3) {
            radio.sendValue("emoji 3", steps)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    if (emojichosen == true) {
        steps += 1
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "emoji 0") {
        emoji_0 = value
        emoji_0_taken = true
    } else if (name == "emoji 1") {
        emoji_1 = value
        emoji_1_taken = true
    } else if (name == "emoji 2") {
        emoji_2 = value
        emoji_2_taken = true
    } else if (name == "emoji 3") {
        emoji_3 = value
        emoji_3_taken = true
    }
})
function chooseemoji () {
    if (emojinumber == 3) {
        emojinumber = 0
    } else {
        emojinumber += 1
    }
    if (emojinumber == 0) {
        basic.showIcon(IconNames.Happy)
    } else if (emojinumber == 1) {
        basic.showIcon(IconNames.Heart)
    } else if (emojinumber == 2) {
        basic.showIcon(IconNames.Sad)
    } else if (emojinumber == 3) {
        basic.showIcon(IconNames.Duck)
    }
}
let emoji_3 = 0
let emoji_2 = 0
let emoji_1 = 0
let emoji_0 = 0
let emoji_3_taken = false
let emoji_2_taken = false
let emoji_1_taken = false
let emoji_0_taken = false
let emojinumber = 0
let emojichosen = false
let steps = 0
radio.setGroup(40)
steps = 0
emojichosen = false
emojinumber = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (emojichosen == true) {
        basic.showNumber(steps)
    }
})
