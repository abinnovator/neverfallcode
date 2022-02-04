cuteBot.forward()
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
        cuteBot.moveTime(cuteBot.Direction.forward, 50, 5)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_R_line) || cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line) || cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.stopcar()
        cuteBot.moveTime(cuteBot.Direction.backward, 50, 5)
        cuteBot.turnleft()
    }
})
