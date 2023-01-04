/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */

import * as ml5 from 'ml5';
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Style from './Classes/Style';
import Div, { Header, Wrapper, Container, Section } from './Modules/Containers';
import Button from './Modules/Buttons';
import Icons from './Modules/Icons';

const MessageBox = ({ active, text, type, style }) => (
    <div className={`w-full py-4 px-4 my-4 text-[16px] ${style?style.toString():"bg-stone-900 text-stone-200"} rounded-md font-extralight ${active?"":"hidden"}`} role="alert">
        <span className="font-bold">{type?type.toString():"example"}</span>: {text?text.toString():"this is a message box."}
    </div>
);

const Component = () => {


    const [loadBar, setLoadBar] = useState({
        active: true,
        maximum: 100,
        progress: 0,
        barColor: "stone-800",
        fillColor: "secondary",
        textColor: "light",
        barStyle: "h-[50px]",
        fillStyle: "h-full",
    });
    const [msgBox, setMsgBox] = useState({
        active: false,
        type: "Example",
        text: "Some Default Filler Text for Example...",
        style: "bg-stone-900 text-stone-200",
    });

    const [status, setStatus] = useState(undefined);
    const [rState, setRenderState] = useState(false);

    const initialScale = 0.75;
    const [scale, setScale] = useState(initialScale); // 0.7 on WoW ~24fps //

    const videoElem = useRef(HTMLVideoElement);
    const canvasElem = useRef(HTMLCanvasElement);
    const canvasContext = useRef(CanvasRenderingContext2D);

    const btnOpen = useRef(Button);
    const btnClose = useRef(Button);

    const btnStop = useRef(Button);
    const btnPlay = useRef(Button);

    useEffect(() => {

        (async () => {

            var video = videoElem.current;
            var canvas = canvasElem.current;

            canvasContext.current = canvas.getContext("2d");
            var ctx = canvasContext.current;

            canvas.width = video.videoWidth * scale;
            canvas.height = video.videoHeight * scale;

            // unloaded models.
            let objModel = null;

            let animationFrameId = null;

            // Set up the frame rate and time for each frame
            let frameRate = 30;
            let frameTime = 1000 / frameRate;

            // Set up variables to store the timestamp of the last frame and the current FPS
            let lastFrameTime = 0;
            let currentFPS = 0;

            // Set up a counter variable to track the number of frames that have been drawn
            let frameCounter = 0;

            // Set up a flag variable to track whether the detection is currently running
            let running = false;

            // Set up an array to store the bounding boxes of the detected objects
            let bFrames = [];

            // Set up an array to store the bounding boxes of the detected personas
            let pBoxes = [];

            // Use LowerCase to filter out non required dependencies
            let blackListLabels = [
                "clock",
                "tv",
                "laptop",
                "train",
                "bed",
                "truck",
            ];

            const getCenterX = () => Math.floor((video.videoWidth * scale) / 2);
            const getStartX = () => Number(0);
            const getEndX = () => Math.floor(video.videoWidth * scale);

            const getCenterY = () => Math.floor((video.videoHeight * scale) / 2);
            const getStartY = () => Number(0);
            const getEndY = () => Math.floor(video.videoHeight * scale)

            let xPositions = {
                left: () => (getStartX() + (100 * scale)),
                center: () => getCenterX(),
                right: () => (getEndX() - (100 * scale)),
            };

            let yPositions = {
                top: () => (getStartY() + (100 * scale)),
                middle: () => getCenterY(),
                bottom: () => (getEndY() - (100 * scale)),
            }

            // Load the object detection model
            const loadModels = () => new Promise(async (res, rej) => {

                try {

                    setMsgBox({
                        "active": true,
                        "type": "Loading",
                        "text": "AI Models & Media Sources",
                        "style": "bg-secondary text-light",
                    })

                    objModel = await ml5.objectDetector('cocossd');

                    // setLoadBar({ active: true, maximum: 10, progress: 1, barColor: "stone-800", fillColor: "secondary", textColor: "light", barStyle: "", fillStyle: "" })

                    setMsgBox({
                        "active": false,
                        "type": "Loading",
                        "text": "AI Models & Media Sources",
                        "style": "bg-secondary text-light",
                    })

                    res();

                } catch(e) {

                    rej(`${e}`);

                }

            })

            async function draw(timestamp) {

                // Clear the canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Draw the video frame onto the canvas
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

                // Only run the detection every N frames, where N is a number you can adjust
                // For example, to run the detection every 3rd frame, you could use:
                // if (frameCounter % 3 === 0) {
                // You can experiment with different values of N to find the best balance between performance and accuracy
                if (!running) {
                    running = true;

                    objModel.detect(canvas).then(boxes => {

                        // Create the bounding box array once and update its values on each frame
                        // console.log(`refreshing bFrames =>`, boxes);

                        if (!boxes) {
                            bFrames.forEach((box, i) => {
                                bFrames[i] = box;
                            })
                        } else {
                            bFrames = boxes.map(box => box);
                        }
                        running = false;
                    });
                }

                if (bFrames !== null) {
                    bFrames.forEach((box, i, a) => {
                        try {
                            if (blackListLabels.includes(box.label.toLowerCase())) {
                                return;
                            }

                            //use a image (whole image) cassifier to classify the bFrames extra to what is already detected;

                            // Set the stroke style to a random color
                            ctx.strokeStyle = "#0F0";

                            // Set the line width to a random value between 4 and 8
                            ctx.lineWidth = 2;

                            // Draw the bounding box
                            ctx.beginPath();
                            ctx.rect(box.x, box.y, box.width, box.height);
                            ctx.stroke();

                            // Draw the label text
                            ctx.fillStyle = "#0F0";
                            ctx.font = "24px monospace";
                            ctx.textAlign = "center";
                            ctx.textBaseline = "middle";
                            ctx.fillText(`${box.label} (${Number(box.confidence * 100).toFixed(0)}%)`, box.x + box.width / 2, box.y + box.height / 2);

                        } catch (err) {
                            console.log(err);
                        }
                    });
                }

                // Calculate the elapsed time since the last frame
                let elapsedTime = timestamp - lastFrameTime;
                let latency = elapsedTime / 10;

                // Update the FPS
                currentFPS = Math.round(1000 / elapsedTime);

                //plzz dont leak ?!
                // LOL -> this in theory should keep it a smooth operation, maybe use an avarage instead of the realtime value.
                const targerFPS = 30
                if (scale <= initialScale) {

                    if (currentFPS <= targerFPS || latency >= 20) {
                        setScale(scale - 0.01);
                    } else if (currentFPS > targerFPS) {
                        setScale(scale + 0.01);
                    }

                    // Make sure that wont enhance the picture tooo much. but theres a rough equilibrium that exists for detecting objects...
                    // too low = blurry slow results, too high = sharp faster results
                    // but then you can also go a bit too overboard like with 4k videofeed. it was trained on 1080p and 720p

                }

                // Draw the FPS and LATENCY at the top left
                ctx.textAlign = "left";
                ctx.textBaseline = "top";
                ctx.font = "16px monospace";
                ctx.fillStyle = "#0F0";
                ctx.fillText(`FPS: ${currentFPS}`, xPositions["left"](), yPositions["top"](), video.videoWidth * scale, video.videoHeight * scale);
                ctx.fillText(`LATENCY: ${Number(latency).toFixed(2)}`, xPositions["left"](), yPositions["top"]() + (50*scale), video.videoWidth * scale, video.videoHeight * scale);


                // Draw other data at the bottom left
                ctx.textAlign = "left";
                ctx.textBaseline = "bottom";
                ctx.font = "16px monospace";
                ctx.fillStyle = "#0F0";
                ctx.fillText(`COUNT: ${Number(bFrames?.length)}`, xPositions["left"](), yPositions["bottom"](), video.videoWidth * scale, video.videoHeight * scale);
                ctx.fillText(`SCALE: ${scale}`, xPositions["left"](), yPositions["bottom"]() - (50*scale), video.videoWidth * scale, video.videoHeight * scale);



                // Update the frame counter
                frameCounter++;

                // Update the timestamp of the last frame
                lastFrameTime = timestamp;

                // Request the next animation frame
                requestAnimationFrame(draw);
            }

            if (status === "open") {

                await loadModels();

                const Stream = await navigator.mediaDevices.getDisplayMedia({

                    audio: false,
                    video: {

                        displaySurface: "monitor",
                        cursor: "none"

                    }

                }).then(async stream => {

                    try {

                        video.srcObject = stream;

                        canvas.width = video.videoWidth * scale;
                        canvas.height = video.videoHeight * scale;

                        video.addEventListener("play", (e) => {

                            console.log("start rendering =>", e);

                            draw();
                        })

                        video.addEventListener("pause", async (e) => {

                            console.log("stop rendering =>", e);

                            cancelAnimationFrame(animationFrameId);
                        });

                        btnOpen.current.title = <Icons.Stream.Online/>;
                        setRenderState(true);

                    } catch(e) {
                        console.error(`Caught error white setting up MediaStream =>`, `${e}`);
                    }

                    return stream;

                }).catch((e) => {
                    console.error(`Caught error while fetching MediaStream =>`, `${e}`)
                })

                if (Stream) {
                    console.log(`found MediaStream =>`, Stream)

                    // btnPlay.current.classes = btnPlay.current.classes.replace("hidden", "block");
                    // btnStop.current.classes = btnStop.current.classes.replace("hidden", "block");
                    // btnOpen.current.classes = btnOpen.current.classes.replace("block", "hidden");
                }

            } else

            if (status === "play") {

                // btnPlay.current.classes = btnPlay.current.classes.replace("block", "hidden");
                // btnStop.current.classes = btnStop.current.classes.replace("hidden", "block");
                // btnOpen.current.classes = btnOpen.current.classes.replace("block", "hidden");

                if (video.srcObject !== null && video.srcObject !== undefined) {

                    video.play();

                    btnPlay.current.title = <Icons.Media.Pause/>
                    btnPlay.current.action = () => setStatus("pause");
                    btnPlay.current.disabled = true;
                }
            } else

            if (status === "pause") {

                // btnPlay.current.classes = btnPlay.current.classes.replace("hidden", "block");
                // btnStop.current.classes = btnStop.current.classes.replace("block", "hidden");
                // btnOpen.current.classes = btnOpen.current.classes.replace("block", "hidden");

                if (video.srcObject !== null && video.srcObject !== undefined) {

                    video.pause();

                    btnPlay.current.title = <Icons.Media.Play/>
                    btnPlay.current.action = () => setStatus("play");
                }
            }

            else {

                // btnPlay.current.classes = btnPlay.current.classes.replace("block", "hidden");
                // btnStop.current.classes = btnStop.current.classes.replace("block", "hidden");
                // btnOpen.current.classes = btnOpen.current.classes.replace("hidden", "block");

            }

        })();

    }, [status, scale])

    const videoStyles = new Style(`
        display: none;
    `, {});

    const videoClasses = `
        w-[100%] h-auto bg-transparent text-light mx-auto
    `;

    const canvasClasses = `
        w-[100%] h-auto bg-transparent text-light mx-auto
    `;

    return (
        <>

            <Section>
                <div className={`fixed top-0 left-0 w-[100%] mx-auto px-4`}>
                    <MessageBox active={msgBox.active} type={msgBox.type} text={msgBox.text} style={msgBox.style}/>
                </div>
            </Section>

            <Section classes={"absolute top-0 left-0 w-[100vw] h-[100vh]"}>

                <div className={"absolute top-0 left-0 w-[100%] h-[100%] flex flex-col justify-center items-center"}>
                    <canvas id="feed" className={canvasClasses + " "} ref={canvasElem}>
                        {/* Rendered Feed */}
                    </canvas>
                    <video id="stream" className={videoClasses} style={videoStyles} ref={videoElem}>
                        {/* Shadow Feed */}
                    </video>
                </div>

                <div className={"absolute top-0 left-0 w-[100%] h-[100%] flex flex-row justify-start items-end"}>

                    <div className={`flex flex-row justify-center items-center`}>
                        <Button ref={btnOpen} title={<Icons.Stream.Offline/>} classes={"rounded-none my-6 mx-4 bg-transparent text-white uppercase hover:shadow-2xl hover:-translate-y-[3px] transform-gpu transition-all ease-linear duration-500 inline-block"} styles={"font-size: 50px;"} action={() => setStatus("open")} />
                    </div>

                    { rState ?
                        (
                            <div className={`flex flex-row justify-center items-center`}>
                                <Button ref={btnPlay} title={<Icons.Media.Play/>} classes={"rounded-none my-6 mx-4 bg-transparent text-white uppercase hover:shadow-2xl hover:-translate-y-[3px] transform-gpu transition-all ease-linear duration-500 inline-block"} styles={"font-size: 50px;"} action={() => setStatus("play")} disabled={false} />
                                <Button ref={btnStop} title={<Icons.Media.Stop/>} classes={"rounded-none my-6 mx-4 bg-transparent text-white uppercase hover:shadow-2xl hover:-translate-y-[3px] transform-gpu transition-all ease-linear duration-500 inline-block"} styles={"font-size: 50px;"} action={() => setStatus("stop")} disabled={true} />
                            </div>
                        ) : (
                            <div className={`flex flex-row justify-center items-center`}>
                                {/* */}
                            </div>
                        )
                    }

                    <div className={`flex flex-row justify-center items-center`}>
                        <Button title={<Icons.Signs.Info/>} classes={"rounded-none my-6 mx-4 bg-transparent text-white uppercase hover:shadow-2xl hover:-translate-y-[3px] transform-gpu transition-all ease-linear duration-500 inline-block"} styles={"font-size: 50px;"} action={() => false} disabled={false} />
                    </div>

                </div>

            </Section>
        </>
    );

}

export default Component;