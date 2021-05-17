input.onButtonPressed(Button.A, function () {
    basic.showNumber(MLX90614.temperature(Environment.Ambient))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(MLX90614.temperature(Environment.Object))
})