/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck
/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */

import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

import * as ml5 from 'ml5';
import Style from './Classes/Style';

import Div, { Header, Wrapper, Container, Section } from './Modules/Containers';
import Button from './Modules/Buttons';
import Icons from './Modules/Icons';

const MessageBox: JSX.Element = ({ active, text, type, style }): JSX.Element => (
    <div className={`w-full px-4 py-4 my-4 ${style?style.toString():"bg-stone-900 text-stone-200"} text-[24px] font-extralight rounded-sm ${active?"":"hidden"}`} role="alert">
        <span className="font-bold uppercase">{type?type.toString():"example"}: </span>
        {text?text.toString():"this is a message box."}
    </div>
)

const Component = (): JSX.Element => {

    const initialScale = 1;

    // HTML Elements
    const videoElem = useRef(HTMLVideoElement);
    const canvasElem = useRef(HTMLCanvasElement);
    const canvasContext = useRef(CanvasRenderingContext2D);

    // Button JSX Elements
    const btnOpen = useRef(Button);
    const btnClose = useRef(Button);
    const btnInfo = useRef(Button);
    const btnStop = useRef(Button);
    const btnPlay = useRef(Button);

    const [msgBox, setMsgBox] = useState({
        active: false,
        type: "Example",
        text: "Some Default Filler Text for Example...",
        style: "bg-stone-900 text-stone-200",
    });

    const [infoBox, setInfoBox] = useState({
        active: false,
        type: "Example",
        text: "Some Default Filler Text for Example...",
        style: "bg-stone-900 text-stone-200",
    });

    // Set up state managers
    const [status, setStatus] = useState(undefined);
    const [rState, setRenderState] = useState(false);
    const [infoActive, setInfoActive] = useState(false);
    const [animationFrameId, setAnimationFrameId] = useState(null);

    // Set up the frame rate and time for each frame (this only works if the render function is called again, so useState dependencies need to include all of these values or another call must be made throught only one of the dependencies)
    const [frameRate, setFrameRate] = useState(30);
    const [frameTime, setFrameTime] = useState(0);
    const [frameCount, setFrameCount] = useState(0);

    useEffect(() => {

        let scale = initialScale;

        // Use LowerCase to filter out non required dependencies
        let blackListLabels = [
            "clock",
            "tv",
            "laptop",
            "train",
            "bed",
            "truck",
            "microwave",
            "cell phone",
            "oven"
        ];

        // Set up an array to store the bounding boxes of the detected objects
        var bFrames = [];
        var avgFrameSets = [];
        var avgPersonas: Array<{ x, y, width, height, label, confidence, }> = [];
        var pPerFrame = [];
        var nineFrames = [];

        var lastFrameTime = 0;
        var fps = 0;

        var objModel = null;
        var objModelRunning = false;

        (async () => {

            var video: HTMLVideoElement = videoElem.current;
            var canvas: HTMLCanvasElement = canvasElem.current;

            var ctx: CanvasRenderingContext2D = canvas.getContext("2d");

            const getCenterX = () => Math.floor((video.videoWidth * scale) / 2);
            const getStartX = () => Number(0);
            const getEndX = () => Math.floor(video.videoWidth * scale);

            const getCenterY = () => Math.floor((video.videoHeight * scale) / 2);
            const getStartY = () => Number(0);
            const getEndY = () => Math.floor(video.videoHeight * scale)

            const xPositions = {
                left: () => (getStartX() + (100 * scale)),
                center: () => getCenterX(),
                right: () => (getEndX() - (100 * scale)),
            };

            const yPositions = {
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

                canvas.width = video.videoWidth * scale;
                canvas.height = video.videoHeight * scale;

                function drawStats(latency, fps, frameTime) {

                    // Draw the FPS and LATENCY at the top left
                    ctx.textAlign = "left";
                    ctx.textBaseline = "top";
                    ctx.font = "16px monospace";
                    ctx.fillStyle = "#0F0";
                    ctx.fillText(`FPS: ${fps}`, xPositions["left"](), yPositions["top"](), video.videoWidth * scale, video.videoHeight * scale);
                    ctx.fillText(`LATENCY: ${Number(latency).toFixed(2)}`, xPositions["left"](), yPositions["top"]() + (50 * scale), video.videoWidth * scale, video.videoHeight * scale);

                    // Draw other data at the bottom left
                    ctx.textAlign = "left";
                    ctx.textBaseline = "bottom";
                    ctx.font = "16px monospace";
                    ctx.fillStyle = "#0F0";
                    ctx.fillText(`COUNT: ${Number(bFrames?.length)}`, xPositions["left"](), yPositions["bottom"](), video.videoWidth * scale, video.videoHeight * scale);
                    ctx.fillText(`SCALE: ${scale}`, xPositions["left"](), yPositions["bottom"]() - (50 * scale), video.videoWidth * scale, video.videoHeight * scale);

                }

                function perfUtils(latency, fps, frameTime) {

                    // this in theory should keep it a smooth operation, maybe use an avarage instead of the realtime value.
                    const targerFPS = 10; // 10 fps is rougly on a (12 thread) 6 core machine although i still dont know if the gpu or cpu is used as backend worker. in the GPU's case this is a 2060 super so performace is shit period
                    const targetLatency = (1000 / targerFPS) / 10;

                    if (scale < initialScale) {

                        if (fps <= targerFPS) {
                            scale = scale - 0.001;
                        } else if (fps > targerFPS) {
                            scale = scale + 0.001;
                        } else if (latency >= targetLatency) {
                            scale = scale - 0.001;
                        } else if (latency < targetLatency) {
                            scale = scale + 0.001;
                        }

                        // Make sure that wont enhance the picture tooo much. but theres a rough equilibrium that exists for detecting objects...
                        // too low = blurry slow results, too high = sharp faster results
                        // but then you can also go a bit too overboard like with 4k videofeed. it was trained on 1080p and 720p

                    }

                }

                // Clear the canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Draw the video frame onto the canvas
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

                // Only run the detection every N frames, where N is a number you can adjust
                // For example, to run the detection every 3rd frame, you could use:
                // if (frameCounter % 3 === 0) {
                // You can experiment with different values of N to find the best balance between performance and accuracy
                if (!objModelRunning && objModel !== null) {
                    objModelRunning = true;

                    objModel.detect(canvas).then(boxes => {

                        // Create the bounding box array once and update its values on each frame
                        // console.log(`refreshing bFrames =>`, boxes);

                        if (!boxes) {
                            bFrames.forEach((box, i) => {
                                bFrames[i] = box;
                            })
                        } else {
                            bFrames = boxes.map(box => box); // @WARN
                        }
                        objModelRunning = false;
                    });
                }

                if (bFrames !== null) {
                    bFrames.forEach((box, i, a) => {
                        try {
                            if (blackListLabels.includes(box.label.toLowerCase())) {
                                return;
                            }

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

                            pPerFrame.push(box);

                        } catch (err) {
                            console.log(err);
                        }
                    });


                    // make a 2d cache for all the personas in the last 9 frames,
                    // @todo Calculate avarage location and center of the personas after 9 frames;
                    if (nineFrames.push(pPerFrame) >= 9 ) {

                        // var frameSets = nineFrames.map((frame, setID, set) => {
                        //     return {
                        //         id: Number(setID * Math.random()).toString().replace(".", ""),
                        //         stack: [
                        //             set[setID - 0].map(v => v), // 9
                        //             set[setID - 1].map(v => v), // 8
                        //             set[setID - 2].map(v => v), // 7
                        //             set[setID - 3].map(v => v), // 6
                        //             set[setID - 4].map(v => v), // 5
                        //             set[setID - 5].map(v => v), // 4
                        //             set[setID - 6].map(v => v), // 3
                        //             set[setID - 7].map(v => v), // 2
                        //             set[setID - 8].map(v => v), // 1
                        //             set[setID - 9].map(v => v), // 0
                        //         ],
                        //         // avgPersonasSets: [
                        //         //     set[setID - 0].map(persona, personaID, pSet =>  {
                        //         //         return {
                        //         //             x: ((pSet[personaID - 9].x +pSet[personaID - 8].x +pSet[personaID - 7].x +pSet[personaID - 6].x +pSet[personaID - 5].x +pSet[personaID - 4].x +pSet[personaID - 3].x +pSet[personaID - 2].x +pSet[personaID - 1].x +pSet[personaID - 0].x) / pSet.length),
                        //         //             y: ((pSet[personaID - 9].y +pSet[personaID - 8].y +pSet[personaID - 7].y +pSet[personaID - 6].y +pSet[personaID - 5].y +pSet[personaID - 4].y +pSet[personaID - 3].y +pSet[personaID - 2].y +pSet[personaID - 1].y +pSet[personaID - 0].y) / pSet.length),
                        //         //             width: persona.width,
                        //         //             height: persona.height,
                        //         //         }
                        //         //     })
                        //         // ]
                        //     }
                        // })

                        // var depth = avgFrameSets.push(frameSets);
                        // var current = avgFrameSets[depth]

                        // avgPersonas = current.map(set => {
                        //     let x = 0;
                        //     let y = 0;
                        //     let width = 0;
                        //     let height = 0;
                        //     let label;
                        //     let confidence;
                        //     const divideBy = set.stack.length;
                        //     // save the total sums to the variables
                        //     for (var ii; ii <= set.stack.length; ii++) {
                        //         var box = set.stack[ii];
                        //         x = x + box.x;
                        //         y = y + box.y;
                        //         width = width + box.width;
                        //         height = height + box.height;

                        //         label = box.label;
                        //         confidence = box.confidence;
                        //     }

                        //     // return a object with frame location from the total sum divided by the size of the avarage;
                        //     return {
                        //         x: x / divideBy,
                        //         y: y / divideBy,
                        //         width: width / divideBy,
                        //         height: height / divideBy,
                        //         label: label,
                        //         confidence: confidence,
                        //     }
                        // })

                        // // clear the values and set a limit on how many avg frame sets there should be stored
                        // if (depth >= 10) {
                        //     avgFrameSets.shift();
                        // }
                        nineFrames = [];
                    }

                    if (avgPersonas !== null){
                        avgPersonas.forEach((box, i, a) => {
                            try {
                                //use a image (whole image) cassifier to classify the bFrames extra to what is already detected;

                                // Set the stroke style to a random color
                                ctx.strokeStyle = "#90F";

                                // Set the line width to a random value between 4 and 8
                                ctx.lineWidth = 2;

                                // Draw the bounding box
                                ctx.beginPath();
                                ctx.rect(box.x, box.y, box.width, box.height);
                                ctx.stroke();

                                // Draw the label text
                                ctx.fillStyle = "#90F";
                                ctx.font = "24px monospace";
                                ctx.textAlign = "center";
                                ctx.textBaseline = "middle";
                                ctx.fillText(`${box.label}`, box.x + box.width / 2, (box.y + box.height / 2) - 50);
                                ctx.fillText(`○`, box.x + box.width / 2, box.y + box.height / 2);

                            } catch (err) {
                                console.log(err);
                            }
                        });
                    }

                }

                // Calculate the elapsed time since the last frame
                let frameTime = timestamp - lastFrameTime;
                let latency = frameTime / 10;
                fps = Math.round(1000 / frameTime);

                // Update the FPS
                setFrameRate(fps);
                setFrameTime(1000 / fps);

                // Some important executions that are way better off in their own function block.
                drawStats(latency, fps, frameTime);
                perfUtils(latency, fps, frameTime)

                // Update the timestamp of the last frame
                lastFrameTime = timestamp;

                // Update the frame counter
                setFrameCount(f => f + 1);

                // Request the next animation frame
                setAnimationFrameId(requestAnimationFrame(draw));
            }

            if (status === "toggle") {

                setInfoBox({
                    active: true,
                    text: `This app is authored by dave <daveinchy@github.com>,\n
                        The license for this software is solely meant for this product only.\n
                        Everyone is free to share and distribute code. however you are not\n
                        allowed to sell it or license it in any kind of monetary or comercial way that is not allowed through the author of this software.\n
                        You are not allowed to change to original author any where in this code.\n
                        If you add onto this project then author that part only, add yourself as contributor with the original author also stated.`,
                    type: "More Info",
                    style: `fixed bg-primary text-light max-w-[350px] self-center justify-self-center z-20`,
                });

            }

            if (status === "open") {

                await loadModels();

                const Stream = await navigator.mediaDevices.getDisplayMedia({

                    audio: false,
                    video: {

                        displaySurface: "monitor",
                        cursor: "none"

                    }

                }).then(async (stream: MediaStream) => {

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

                            // make sure that cancelling the current animationframe is done with a normal variable, since the state cannot be assigned and read in the same execution. variables at least are able to change in the same useEffect Call
                            // SO CHANGE THAT IF YOU WANNA ENABLE PAUSING
                            cancelAnimationFrame(animationFrameId);
                        });

                        btnOpen.current.title = <Icons.Media.Video.Online strokeColor={"#eee"} strokeWidth={1.5} iconSize={"26"} fillColor={"none"}/>;
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

                    btnPlay.current.title = <Icons.Media.Pause strokeColor={"#eee"} strokeWidth={1.5} iconSize={"26"} fillColor={"none"}/>
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

                    btnPlay.current.title = <Icons.Media.Play strokeColor={"#eee"} strokeWidth={1.5} iconSize={"26"} fillColor={"none"}/>
                    btnPlay.current.action = () => setStatus("play");
                }
            }

            else {

                // btnPlay.current.classes = btnPlay.current.classes.replace("block", "hidden");
                // btnStop.current.classes = btnStop.current.classes.replace("block", "hidden");
                // btnOpen.current.classes = btnOpen.current.classes.replace("hidden", "block");

            }

        })();

    }, [status])

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
                <div className={`fixed top-0 left-0 w-[100%] mx-auto px-4 z-20`}>
                    <MessageBox active={msgBox.active} type={msgBox.type} text={msgBox.text} style={msgBox.style}/>
                </div>
            </Section>

            <Section>
                <div className={`fixed top-0 left-0 w-[100%] mx-auto px-4 z-10`}>
                    <MessageBox active={infoBox.active} type={infoBox.type} text={infoBox.text} style={infoBox.style} />
                </div>
            </Section>

            <Section classes={"absolute top-0 left-0 w-[100vw] h-[100vh] z-10"}>

                <div className={"absolute top-0 left-0 w-[100%] h-[100%] flex flex-col justify-center items-center"}>
                    <canvas id="feed" className={canvasClasses + " "} ref={canvasElem}>
                        {/* Rendered Feed */}
                    </canvas>
                    <video id="stream" className={videoClasses} style={videoStyles} ref={videoElem}>
                        {/* Shadow Feed */}
                    </video>
                </div>

                <div className={"absolute top-0 left-0 w-[100%] h-[100%] flex flex-row justify-between items-end"}>

                    <div className={`flex flex-row justify-start items-center w-[35%]`}>
                        <Button ref={btnOpen} title={<Icons.Media.Video.Offline strokeColor={"#eee"} strokeWidth={1.5} iconSize={"26"} fillColor={"none"}/>} classes={"rounded-none my-6 mx-4 bg-transparent text-white uppercase hover:shadow-2xl hover:-translate-y-[3px] transform-gpu transition-all ease-linear duration-500 inline-block"} styles={"font-size: 50px;"} action={() => setStatus("open")} />
                    </div>

                    {
                        rState ? (
                            <div className={`flex flex-row justify-center items-center w-[30%]`}>
                                <Button ref={btnPlay} title={<Icons.Media.Play strokeColor={"#eee"} strokeWidth={1.5} iconSize={"26"} fillColor={"none"}/>} classes={"rounded-none my-6 mx-4 bg-transparent text-white uppercase hover:shadow-2xl hover:-translate-y-[3px] transform-gpu transition-all ease-linear duration-500 inline-block"} styles={"font-size: 50px;"} action={() => setStatus("play")} disabled={false} />
                                <Button ref={btnStop} title={<Icons.Media.Stop strokeColor={"#eee"} strokeWidth={1.5} iconSize={"26"} fillColor={"none"}/>} classes={"rounded-none my-6 mx-4 bg-transparent text-white uppercase hover:shadow-2xl hover:-translate-y-[3px] transform-gpu transition-all ease-linear duration-500 inline-block"} styles={"font-size: 50px;"} action={() => setStatus("stop")} disabled={true} />
                            </div>
                        ) : (
                            <div className={`flex flex-row justify-center items-center w-[30%]`}>
                                {/* */}
                            </div>
                        )
                    }

                    <div className={`flex flex-row justify-end items-center w-[35%]`}>
                        <Button ref={btnInfo} title={<Icons.Signs.Info strokeColor={"#eee"} strokeWidth={1.5} iconSize={"26"} fillColor={"none"}/>} classes={"rounded-none my-6 mx-4 bg-transparent text-white uppercase hover:shadow-2xl hover:-translate-y-[3px] transform-gpu transition-all ease-linear duration-500 inline-block"} styles={"font-size: 50px;"} action={() => setStatus("toggle")} disabled={false} />
                    </div>

                </div>

            </Section>
        </>
    );

}

export default Component;