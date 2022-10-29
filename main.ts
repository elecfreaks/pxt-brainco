//%color=#921AFF icon="\uf076" block="Brainco"
namespace brainco {
    /**
     * Get the current concentration value from Brainco.
     */
    //% block="get concentration" blockId="brainco.getConcentration"
    export function getConcentration(): number {
        return serial.readBuffer(1)[0];
    }
}
