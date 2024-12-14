radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        bitbot.rotate(BBRobotDirection.Left, 100)
    }
    if (receivedNumber == 2) {
        bitbot.rotate(BBRobotDirection.Right, 100)
    }
    if (receivedNumber == 3) {
        bitbot.go(BBDirection.Forward, 100)
        bitbot.setLedColor(0xFFFFFF)
    }
    if (receivedNumber == 4) {
        bitbot.stop(BBStopMode.Coast)
        bitbot.setLedColor(0xFF0000)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(1)
basic.forever(function () {
	
})
