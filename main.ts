maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
maqueen.servoRun(maqueen.Servos.S1, 90)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
basic.showString("hola")
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
})
