let mesure = 0
basic.forever(function () {
    mesure = input.compassHeading()
    if (mesure >= 0 && mesure < 45) {
        basic.showString("N")
    } else if (mesure >= 45 && mesure < 90) {
        basic.showString("NE")
    } else if (mesure >= 90 && mesure < 135) {
        basic.showString("E")
    } else if (mesure >= 135 && mesure < 180) {
        basic.showString("SE")
    } else if (mesure >= 180 && mesure < 225) {
        basic.showString("S")
    } else if (mesure >= 225 && mesure < 270) {
        basic.showString("SW")
    } else if (mesure >= 270 && mesure < 315) {
        basic.showString("W")
    } else {
        basic.showString("NW")
    }
})
