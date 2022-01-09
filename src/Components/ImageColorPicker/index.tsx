import React, { useEffect, useRef, useState } from 'react';
import './index.scss';

export default function ImageColorPicker() {
  console.log('Rendering ImageColorPicker');
  let messageCount = 0;
  const localColorSet: Set<string> = new Set();
  const [uniqueColors, setUniqueColors] = useState<string[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onBrowseImage = () => {
    if (inputRef.current && inputRef.current instanceof HTMLInputElement) {
      inputRef.current.click();
    }
  };

  const onLoadImageToCanvas = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventTarget = event.target;
    const hasFile =
      eventTarget &&
      eventTarget instanceof HTMLInputElement &&
      eventTarget.files &&
      eventTarget.files[0];
    if (hasFile) {
      const imageSource = new Image();
      imageSource.addEventListener('load', () => {
        const context2D = canvasRef.current?.getContext('2d');
        if (imageSource && context2D) {
          context2D.drawImage(imageSource, 0, 0, 498, 498);
          const { data: imageData } = context2D.getImageData(0, 0, 498, 498);
          const workers: Worker[] = [];

          let cursor = 0;
          const chunkSize = imageData.byteLength / 4;
          for (let i = 1; i <= 4; i++) {
            const nextWorker = new Worker(
              new URL('./worker.ts', import.meta.url),
            );
            nextWorker.onmessage = function ({ data }) {
              assembleUniqueColors(data);
            };
            nextWorker.postMessage({
              dataRef: imageData,
              cursorStart: cursor,
              cursorEnd: cursor + chunkSize - 1,
            });
            cursor += chunkSize;
            workers.push(nextWorker);
          }
          console.log(cursor);
        }
      });
      imageSource.setAttribute(
        'src',
        URL.createObjectURL(eventTarget.files![0]),
      );
    }
  };

  const assembleUniqueColors = (set: Set<string>) => {
    console.log('Assembling ...');
    for (const rgba of set) {
      localColorSet.add(rgba);
    }
    messageCount += 1;
    console.log(messageCount);
    if (messageCount === 4) {
      setUniqueColors([...localColorSet]);
    }
  };

  const onResetImageAndCanvas = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    const context2D = canvasRef.current?.getContext('2d');
    if (context2D) {
      context2D.clearRect(0, 0, 498, 498);
      context2D.beginPath();
    }
    setUniqueColors([]);
  };

  return (
    <article className="Image-Color-Picker__Wrap">
      <section className="Image-Color-Picker__Wrap__Box-Top">
        <div className="Image-Color-Picker__Wrap__Box-Top__Box-Left">
          <canvas width={498} height={498} ref={canvasRef} />
        </div>
        <div className="Image-Color-Picker__Wrap__Box-Top__Box-Right">
          <button
            type="button"
            className="Canvas-Button Button--Load"
            onClick={onBrowseImage}
          >
            Browse
          </button>
          <button
            type="button"
            className="Canvas-Button Button--Reset"
            onClick={onResetImageAndCanvas}
          >
            Reset
          </button>
          <input
            accept="image/*"
            type="file"
            hidden
            ref={inputRef}
            onChange={onLoadImageToCanvas}
          />
        </div>
      </section>
      <section className="Image-Color-Picker__Wrap__Box-Bottom">
        {uniqueColors.map((color) => (
          <div
            className="block"
            key={color}
            style={{ backgroundColor: color }}
          />
        ))}
      </section>
    </article>
  );
}
