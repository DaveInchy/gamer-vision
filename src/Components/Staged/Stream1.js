/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */
// @ts-nocheck
import * as ml5 from 'ml5';
import { useEffect, useRef, useState } from 'react';
import Style from '../../Utils/Classes/Style';
import Button from '../Modules/Buttons';
import { Container, Section } from '../Modules/Containers';


const Component = ({ onSuccess }) => {

    const [status, setStatus] = useState(undefined);

    const videoElem = useRef(HTMLVideoElement);
    const canvasElem = useRef(HTMLCanvasElement);
    const canvasContext = useRef(CanvasRenderingContext2D);

    const btnOpen = useRef(Button);
    const btnClose = useRef(Button);

    const btnPause = useRef(Button);
    const btnPlay = useRef(Button);

    useEffect(() => {

        async function handler() {

            var video = videoElem.current;
            var canvas = canvasElem.current;

            var canvasCtx = canvas.getContext("2d");
            canvasContext.current = canvasCtx;

            var ctx = canvasContext.current;

            // Load the object detection model
            const model = await ml5.objectDetector('cocossd');

            if (status === "open") {

                var running = false;

                let animationFrameId = null;

                const Stream = await navigator.mediaDevices.getDisplayMedia({
                    audio: false,
                    video: {
                        displaySurface: "monitor",
                        cursor: "none"
                    }
                }).then(async stream => {

                    try {
                        video.srcObject = stream;

                        // Set the frame rate
                        var frameRate = 30;

                        // Calculate the time for each frame
                        var frameTime = 1000 / frameRate;

                        // Set up a variable to store the timestamp of the last frame
                        var lastFrameTime = 0;

                        // Set up a variable to store the current FPS
                        var currentFPS = 0;

                        var boxes = [];

                        var once = 0;

                        // Set up a function to update the canvas
                        async function draw(timestamp) {

                            // -- START of LOGIC -- //

                            // Get the ticks length
                            var elapsedTime = timestamp - lastFrameTime;

                            // Update the FPS
                            currentFPS = Math.round(1000 / elapsedTime);

                            // -- END of LOGIC -- //


                            // -- CLEANUP -- //

                            // Clear the canvas
                            ctx.clearRect(0, 0, canvas.width, canvas.height);

                            // >> Draw something on the canvas >><<< //

                            ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

                            // >> But in the order of onTopIsLast >> //

                            // Draw the FPS on the canvas
                            var xCenter = Math.floor(video.videoWidth / 2);
                            var yPos = [ 100, ];

                            // draw FPS at top center
                            ctx.textAlign = "center";
                            ctx.font = '56px monospace';
                            ctx.fillStyle = "#00ff00"; // dont call it as function
                            ctx.fillText(`FPS: ${currentFPS}`, xCenter, yPos[0], video.videoWidth, video.videoHeight);

                            //check chatgpt convo's for a performant detection so you can draw more then 1
                            while (!running) {
                                running = true;

                                model.detect(canvas).then(boxes => {
                                    const bFrames = boxes.map(
                                        box => box
                                    );
                                    bFrames.forEach((box, i, a) => {
                                        try {

                                            //use a image (whole image) cassifier to classify the bFrames extra to what is already detected;

                                            // Set the stroke style to a random color
                                            ctx.strokeStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

                                            // Set the line width to a random value between 4 and 8
                                            ctx.lineWidth = 4 + Math.random() * 4;

                                            // Draw the bounding box
                                            ctx.beginPath();
                                            ctx.rect(box.x, box.y, box.width, box.height);
                                            ctx.stroke();

                                            // Add a label inside or outside the box
                                            ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
                                            ctx.font = '32px monospace';

                                            const label = `${box.label?box.label:a[i]}`;

                                            // Draw the label outside the box
                                            ctx.fillText(label, box.x + (box.width / 2), box.y  + (box.height / 2));

                                            console.log(box);
                                        } catch(e) {
                                            console.error(e);
                                        }
                                    })
                                    running = false;
                                })
                                // model.detect(canvas)
                                // .then((bFrames) => {
                                //         bFrames.forEach((box, i, a) => {
                                //             try {

                                //                 // Set the stroke style to a random color
                                //                 ctx.strokeStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

                                //                 // Set the line width to a random value between 4 and 8
                                //                 ctx.lineWidth = 4 + Math.random() * 4;

                                //                 // Draw the bounding box
                                //                 ctx.beginPath();
                                //                 ctx.rect(box.x, box.y, box.width, box.height);
                                //                 ctx.stroke();



                                //                 // Add a label inside or outside the box
                                //                 ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
                                //                 ctx.font = '32px monospace';

                                //                 const label = `${box.label?box.label:a[i].toString()}`;

                                //                 // Draw the label outside the box
                                //                 ctx.fillText(label, box.x + (box.width / 2), box.y  + (box.height / 2));

                                //                 console.debug(`box found => ${box}`);
                                //             } catch(e) {
                                //                 console.error(e);
                                //             }
                                //         })
                                //         running = false;
                                //     }
                                // )
                            }

                            // Update the timestamp of the last frame
                            lastFrameTime = timestamp;

                            // Request the next frame
                            animationFrameId = requestAnimationFrame(draw);

                            const result = once === 1 ? false : true;
                                    once = 1;

                            return result;
                        }

                        // async function draw() {
                        //     //canvasCtx.drawImage(video, 0, 0, canvas.width, canvas.height)

                        //     // setTimeout(() => draw(), 16); (does this even work?)
                        // }

                        video.addEventListener("play", async () => {

                            canvas.width = video.videoWidth;
                            canvas.height = video.videoHeight;

                            console.log("video element started playing");

                            if (draw() !== false) {
                                onSuccess({ canvasElement: canvas, videoElement: video, mediaStream: Stream });
                            } else {
                                console.log("test if you can actually do a callback to the app root, inverse tree bitch.. just backtrace! btw i am atm on line 173.. but youll definately find this long string in the code...")
                            }
                        })

                        video.addEventListener("pause", () => {

                            console.log("video element paused");

                            cancelAnimationFrame(animationFrameId);
                        });

                    } catch(e) {
                        throw new Error(e);
                    }

                    return stream;

                }).catch(e => {
                    console.error(`Error while trying to get display media:`, `${e}`)
                });

                if (Stream) {
                    console.log(Stream)
                }

            } else

            if (status === "close") {

                video.srcObject = new MediaStream(null) || null;

                video.load();
                video.pause();
            } else

            if (status === "play") {

                if (video.srcObject !== null && video.srcObject !== undefined) {

                    video.play();
                }
            } else

            if (status === "pause") {

                if (video.srcObject !== null && video.srcObject !== undefined) {

                    video.pause();
                }
            } else {

                throw new Error(`error: caught a status that doesnt have logic assigned.\nplease make sure you spell the status you want to execute correctly`);

            }
        }

        handler().catch(e => console.error(e));
    }, [status])

    const videoStyles = new Style(`
        display: none;
    `, {});

    const videoClasses = `
        w-[80%] h-auto min-h-[100px] bg-stone-600 text-light mx-auto
    `;

    const canvasClasses = `
        w-[80%] h-auto min-h-[100px] bg-stone-600 text-light mx-auto
    `;

    return (
        <>
            <Section>
                <Container class={"w-full text-center"}>

                    <canvas id="feed" className={canvasClasses} ref={canvasElem}></canvas>
                    <video id="stream" className={videoClasses} style={videoStyles} ref={videoElem}></video>

                    <Button ref={btnOpen} title={"Select Stream"} classes={"rounded-full my-6 mx-4 bg-slate-800 text-white"} action={() => setStatus("open")}/>
                    <Button ref={btnClose} title={"Close Stream"} classes={"rounded-full my-6 mx-4 bg-red-800 text-white"} action={() => setStatus("close")}/>

                    <Button ref={btnPause} title={"Pause"} classes={"rounded-md my-6 mx-4 bg-blue-800 text-white"} action={() => setStatus("pause")}/>
                    <Button ref={btnPlay} title={"Play"} classes={"rounded-md my-6 mx-4 bg-green-800 text-white"} action={() => setStatus("play")}/>

                </Container>
            </Section>
        </>
    );

}

export default Component;