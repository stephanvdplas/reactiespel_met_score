input.onPinPressed(TouchPin.P0, function () {
    Vals_figuur = 0
    P1_aangeraakt = 0
    P2_aangeraakt = 0
    Verschenen = 0
    basic.showString("3 2 1 ")
    basic.pause(randint(1000 * WachtMin, 1000 * WachtMax))
    if (P1_aangeraakt == 0 && P2_aangeraakt == 0) {
        basic.showIcon(IconNames.SmallDiamond)
        Verschenen = 1
    }
})
input.onPinPressed(TouchPin.P2, function () {
    P2_aangeraakt = 1
    if (P1_aangeraakt == 0) {
        if (Verschenen == 1) {
            basic.showArrow(ArrowNames.NorthEast)
            P2_score += 1
        } else {
            basic.showArrow(ArrowNames.SouthEast)
            P2_score += -1
        }
        while (P2_aangeraakt == 1) {
            basic.pause(2000)
            basic.showString("" + (P1_score))
            basic.showString("-")
            basic.showString("" + (P2_score))
            basic.clearScreen()
        }
    }
})
input.onPinPressed(TouchPin.P1, function () {
    P1_aangeraakt = 1
    if (P2_aangeraakt == 0) {
        if (Verschenen == 1) {
            basic.showArrow(ArrowNames.NorthWest)
            P1_score += 1
        } else {
            basic.showArrow(ArrowNames.SouthWest)
            P1_score += -1
        }
        while (P1_aangeraakt == 1) {
            basic.pause(2000)
            basic.showString("" + (P1_score))
            basic.showString("-")
            basic.showString("" + (P2_score))
            basic.clearScreen()
        }
    }
})
let Verschenen = 0
let P2_aangeraakt = 0
let P1_aangeraakt = 0
let Vals_figuur = 0
let P2_score = 0
let P1_score = 0
let WachtMax = 0
let WachtMin = 0
basic.showIcon(IconNames.SmallDiamond)
WachtMin = 3
WachtMax = 12
P1_score = 0
P2_score = 0
