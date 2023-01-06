// @ts-nocheck
import React from 'react';

const LoadingBar = ({ active, progress = 1, started = true, styles = "", ended = false }) => {
  return (
    <div style={{ width: '100%', height: '30px' }} className={`w-full py-4 px-4 my-4 text-[16px] ${styles?styles.toString():"bg-stone-900 text-stone-200"} rounded-full font-serif font-normal ${active?"":"hidden"}`}>
      <div
        style={!ended ? {
          width: `${progress}%`,
          height: '100%',
          backgroundColor: 'currentColor',
          transition: 'width 0.2s ease-in-out',
        } : {
          width: `100%`,
          height: '100%',
          backgroundColor: 'currentColor',
          transition: 'width 0.2s ease-in-out',
        }}
        className={`flex flex-row justify-center items-center text-center bg-secondary`}
      ><span className={`text-light`}>{progress.toPrecision().toString() + "%"}</span></div>
    </div>
  );
};

export default LoadingBar;