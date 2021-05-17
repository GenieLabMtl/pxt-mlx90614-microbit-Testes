
## MLX90614
This Microbit extension allows users to mesure ambient or object temperature using an IR-MLX90614 sensor.

## Hardware
Insert the IR-MLX90614 into the I2C ports of a breakout board.

## Blocks
### Mesure temperature
Allows to mesure either ambient temperature or object temperature

## Example
The following code displays the ambient temperature when the button A is pressed and the object temperature when the button B is pressed.

```javascript
input.onButtonPressed(Button.A, function () {
    basic.showNumber(MLX90614.temperature(Environment.Ambient))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(MLX90614.temperature(Environment.Object))
})
```

## Supported targets
For PXT/microbit