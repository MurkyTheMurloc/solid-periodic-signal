import { createSignal, from } from "solid-js";


/**
 * Creates a periodic signal that can be started and stopped.
 *
 * @param {() => void} updateFunction - The function that will be called periodically.
 * @param {number} [periodInterval=1] - The interval between each updateFunction call.
 * @param {boolean} [inMs=false] - If true, the periodInterval is in milliseconds; otherwise, it is in seconds.
 *
 * @returns {[() => void, () => void]} - An array containing two functions:
 *   - startSignal: A function that can be used to start the periodic signal.
 *   - stopSignal: A function that can be used to stop the periodic signal.
 */
export function createPeriodicSignal(updateFunction: () => void, periodInterval: number = 1 , inMs: boolean = false): [() => void, () => void] {
    const [id, setId] = createSignal();

    const interval = inMs ? periodInterval : periodInterval * 1000;

    const updateSignal = () => {
        const intervalId = setInterval(() => {
            updateFunction();
        }, interval);
        setId(intervalId);
        return () => {};
    };

    // @ts-ignore
    const stopSignal = () => clearInterval(id());

    //ts-ignore
    const startSignal = from(updateSignal);

    return [startSignal, stopSignal];
}
