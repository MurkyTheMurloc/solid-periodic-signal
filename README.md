# solid-periodic-signal

The **Perioded Signal** is a utility function for creating periodic signals that can be started and stopped. This utility is useful in scenarios where you need to perform periodic tasks, such as updating data or triggering actions at specified intervals.

## Motivation

In many applications, there's a need to execute certain functions or tasks at regular intervals. For example, you might want to periodically update data from a remote server, check for new messages, or refresh a user interface. To achieve this, you can use JavaScript's `setInterval` function. However, managing and controlling these periodic tasks can become complex as your application grows. The **solid-periodic-signal** simplifies this by providing an easy-to-use interface for starting and stopping periodic tasks.



## Usage

The `createPeriodicSignal` function creates a periodic signal that can be started and stopped. It takes the following parameters:

- `updateFunction`: A callback function that will be called periodically.
- `periodInterval` (optional, default: 1): The interval (in seconds or milliseconds, depending on the `inMs` parameter) between each `updateFunction` call.
- `inMs` (optional, default: false): If true, the `periodInterval` is in milliseconds; otherwise, it is in seconds.

The function returns an array containing two functions:

- `startSignal`: A function that can be used to start the periodic signal.
- `stopSignal`: A function that can be used to stop the periodic signal.


```tsx
import { createPeriodicSignal } from 'solid-periodic-signal';

function App() {
    const [count, setCount] = createSignal(0);
    const [startCounting, stopCounting] = createPeriodicSignal(() => {
        setCount((prev) => prev + 1);
    });
    startCounting();

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
    <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
    <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
        </div>
        <h1>Vite + Solid</h1>
        <div class="card">
    <button onClick={stopCounting()}>

        count is {count()}
    </button>

    <p>
    Edit <code>src/App.tsx</code> and save to test HMR
    </p>
    </div>
    <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
    </p>
    </>
)
}

```


### Support Me

if you like my work feel free to hydrate me so I always stay focused
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-%E2%98%95-yellow?style=flat-square)](https://www.buymeacoffee.com/MurkyTheMurloc)


### License

MIT License

Copyright (c) 2022 MurkyTheMurloc

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


