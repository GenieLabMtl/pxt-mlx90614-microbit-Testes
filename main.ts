
enum Environment{
    Ambient,
    Object
}

//% icon="\uf2cb" 
namespace MLX90614 {

    const ADDRESS                   : number = 0x5A;
    const MLX90614_AMBIENT_REGISTER : number = 0x06;
    const MLX90614_OBJECT_REGISTER  : number = 0x07;

    //% block="mesure temperature  %environment "
    export function temperature(environment: Environment) {
        switch(environment) {
            case Environment.Ambient:
                return readTemperature(MLX90614_AMBIENT_REGISTER);
            case Environment.Object:
                return readTemperature(MLX90614_OBJECT_REGISTER);
            default:
                return 0;
        }
        
    }

    export function readTemperature(register: number) {
        return read(register) /* 0.02 - 273.15*/;
    }

    export function read(register: number) {
        pins.i2cWriteNumber(ADDRESS, register, NumberFormat.UInt8BE, true);
        basic.pause(10);
        return pins.i2cReadNumber(ADDRESS, NumberFormat.UInt16LE, true);
    }
}
