input.onButtonPressed(Button.A, function () {
    basic.showNumber(MLX90614.mesureTemperature(Environment.Ambient))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(MLX90614.mesureTemperature(Environment.Object))
})