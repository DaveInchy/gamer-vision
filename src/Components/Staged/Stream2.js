/* eslint-disable no-loop-func */

import * as ml5 from 'ml5';
// import * as tf from "@tensorflow/tfjs-node";
// import * as posenet from '@tensorflow-models/posenet';
// import * as cocossd from '@tensorflow-models/coco-ssd';

import React, {  useEffect, useRef, useState } from 'react';

import { Container, Section } from '../Modules/Containers';
import Button from '../Modules/Buttons';

import Style from '../Classes/Style';


const Component = ({ onSuccess }) => {

    const [status, setStatus] = useState("idle");

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

            var model = undefined;

            if (status === "open") {

                // let poseModel = await ml5.poseNet(canvas, {
                //     architecture: 'MobileNetV1',
                //     imageScaleFactor: 0.3,
                //     outputStride: 16,
                //     flipHorizontal: false,
                //     minConfidence: 0.5,
                //     maxPoseDetections: 5,
                //     scoreThreshold: 0.5,
                //     nmsRadius: 20,
                //     detectionType: 'multiple',
                //     inputResolution: 257,
                //     multiplier: 0.75,
                //     quantBytes: 2,
                // });

                let objModel = await ml5.objectDetector('cocossd');

                let animationFrameId = null;

                // Load the models
                // await tf.setBackend("webgl").then(async (result) => {
                //     backend = result;
                // })

                const Stream = await navigator.mediaDevices.getDisplayMedia({
                    audio: false,
                    video: {
                        displaySurface: "monitor",
                        cursor: "none"
                    }
                }).then(async stream => {

                    try {

                        video.srcObject = stream;

                        // while (!backend) {
                        //     setTimeout(() => {
                        //         console.log("unable to detect now: another job is running already...")
                        //     }, 1000);
                        // }

                        // while (running) {
                        //     return stream;
                        // }

                        // await cocossd.load({}).then(model => setObjModel(model));
                        // await posenet.load({}).then(model => setPoseModel(model));

                        // Set the frame rate
                        var frameRate = 30;

                        // Calculate the time for each frame
                        var frameTime = 1000 / frameRate;

                        var running = false;

                        // Set up a variable to store the timestamp of the last frame
                        var lastFrameTime = 0;

                        // Set up a variable to store the current FPS
                        var currentFPS = 0;

                        // Set up a function to update the canvas
                        async function draw(timestamp) {

                            // -- START of LOGIC -- //

                            // get the ticks length
                            var elapsedTime = timestamp - lastFrameTime;

                            // update the FPS
                            currentFPS = Math.round(1000 / elapsedTime);

                            // -- END of LOGIC -- //

                            // -- CLEANUP -- //

                            // update the canvas to refresh
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

                            // >> but in the order of onTopIsLast >> //

                            // draw the FPS on the canvas
                            var xCenter = Math.floor(video.videoWidth / 2);
                            var yCenter = Math.floor(video.videoHeight / 2);
                            var xPos = [ 100, xCenter, video.videoWidth - 100, ]
                            var yPos = [ 100, yCenter, video.videoHeight - 100, ];

                            // draw FPS at top center
                            ctx.textAlign = "left";
                            ctx.font = `36px monospace`;
                            ctx.fillStyle = "#00ff00"; // dont call it as function
                            ctx.fillText(`fps: ${currentFPS}`, xPos[0], yPos[0], video.videoWidth, video.videoHeight);
                            //ctx.fillText(`delay: ${frameTime}`, xPos[0], yPos[2], video.videoWidth, video.videoHeight)

                            // actual drawing

                            // @TIP check chatgpt convo's for a performant detection so you can draw more then 1

                            while (!running) {
                                running = true;

                                await objModel.detect(canvas)
                                .then(boxes => boxes.map((box) => {
                                    return box;
                                })).finally(async (bFrames) => {

                                    bFrames.forEach((box, i, a) => {
                                        try {

                                            // Set the stroke style to a random color
                                            ctx.strokeStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

                                            ctx.lineWidth = 4;

                                            // Draw the bounding box
                                            ctx.beginPath();
                                            ctx.rect(box.x, box.y, box.width, box.height);
                                            ctx.stroke();

                                            // Add a label inside or outside the box
                                            ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
                                            ctx.font = '32px monospace';

                                            const label = `${box.label?box.label:a[i].label.toString()}`;

                                            // Draw the label outside the box
                                            ctx.fillText(label, box.x + (box.width / 2), box.y  + (box.height / 2));

                                            console.log(box);
                                        } catch(e) {
                                            console.error(e);
                                        }
                                    })
                                    running = false;

                                })


                                //const pFrames = poseModel.multiPose(canvas).map(v => console.log(v) && v);

                                // use the model to detect poses in the image
                                //     await poseModel.estimateMultiplePoses(canvas, {
                                //         flipHorizontal: false,
                                //         maxDetections: 3,
                                //         scoreThreshold: 0.6,
                                //         nmsRadius: 20
                                //     }).then(pFrames => {

                                //             // draw the detected poses on the canvas
                                //             pFrames.forEach((pose) => {
                                //                 try {

                                //                     // set the stroke style to a random color
                                //                     ctx.strokeStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

                                //                     // set the line width to a random value between 4 and 8
                                //                     ctx.lineWidth = 4 + Math.random() * 4;

                                //                     // draw the pose keypoints
                                //                     pose.keypoints.forEach((keypoint) => {
                                //                         if (keypoint.score > 0.5) {
                                //                             ctx.beginPath();
                                //                             ctx.arc(keypoint.position.x, keypoint.position.y, 10, 0, 2 * Math.PI);
                                //                             ctx.stroke();
                                //                         }
                                //                     });

                                //                     // draw the label at the center of the bFrames (pose.boundingBox)
                                //                     ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
                                //                     ctx.font = '32px monospace';

                                //                     // detection score
                                //                     const label = `${pose.score.toFixed(2)}`;

                                //                     ctx.fillText(label, pose.boundingBox.x + (pose.boundingBox.width / 2), pose.boundingBox.y  + (pose.boundingBox.height / 2));

                                //                     console.log(`drawing body =>`, pose);
                                //                 } catch(e) {
                                //                     throw new Error(e);
                                //                 }
                                //             });
                                //     });

                            }

                            // update the timestamp of the last frame
                            lastFrameTime = timestamp;

                            // request the next frame
                            animationFrameId = requestAnimationFrame(draw);

                            //return once === 0 ? once = 1 && true : false;
                        }

                        video.addEventListener("play", async () => {

                            canvas.width = video.videoWidth;
                            canvas.height = video.videoHeight;

                            console.log("video element started playing");
                            draw().then(() => {
                                onSuccess({ canvasElement: canvas, videoElement: video, mediaStream: Stream });
                            });
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
                    console.log(`stream rendered =>\n`, Stream)
                }

            } else

            if (status === "idle") {



            } else

            if (status === "close") {

                video.srcObject = new MediaStream() || null;
                video.pause();
                ctx.clearRect(0, 0, canvas.width, canvas.height);
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