import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  BaseSyntheticEvent,
  UIEventHandler,
} from "react";
import "./index.scss";

export default function ImageColorPicker() {
  console.log("Rendering ImageColorPicker");
  const maxWorkers = 4;
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [uniqueColors, setUniqueColors] = useState<Set<string>>(new Set());
  const [sliceCursor, setSliceCursor] = useState(600);
  const [uniqueSlicedColors, setUniqueSlicedColors] = useState<string[]>([]);
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
      imageSource.addEventListener("load", () => {
        const context2D = canvasRef.current?.getContext("2d");
        if (imageSource && context2D) {
          context2D.drawImage(imageSource, 0, 0, 498, 498);
          const { data: imageData } = context2D.getImageData(0, 0, 498, 498);

          let cursor = 0;
          const chunkSize = imageData.byteLength / maxWorkers;
          for (let i = 0; i < maxWorkers; i++) {
            workers[i].postMessage({
              dataRef: imageData,
              cursorStart: cursor,
              cursorEnd: cursor + chunkSize - 1,
            });
            cursor += chunkSize;
          }
        }
      });
      imageSource.setAttribute(
        "src",
        URL.createObjectURL(eventTarget.files![0]),
      );
    }
  };

  const assembleUniqueColors = useCallback(
    (set: Set<string>) => {
      setUniqueColors(new Set([...uniqueColors, ...set]));
    },
    [uniqueColors],
  );

  const onResetImageAndCanvas = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    const context2D = canvasRef.current?.getContext("2d");
    if (context2D) {
      context2D.clearRect(0, 0, 498, 498);
      context2D.beginPath();
    }
    setUniqueColors(new Set());
    setUniqueSlicedColors([]);
  };

  const onScrollColorBlockContainer: UIEventHandler = (event) => {
    const eventTarget = event.target;
    if (eventTarget instanceof HTMLElement) {
      const { scrollHeight, scrollTop, clientHeight } = eventTarget;

      if (scrollTop + clientHeight >= scrollHeight - 20) {
        setSliceCursor(sliceCursor + 600);
      }
    }
  };

  useEffect(() => {
    if (workers.length === 0) {
      const workers: Worker[] = new Array(maxWorkers)
        .fill(undefined)
        .map(() => {
          const instance = new Worker(new URL("./worker.ts", import.meta.url));
          instance.onmessage = function ({ data }) {
            assembleUniqueColors(data);
          };
          return instance;
        });
      setWorkers(workers);
      return () => {
        if (workers.length === 0) {
          workers.forEach((worker) => worker.terminate());
        }
      };
    }
  }, [workers, assembleUniqueColors]);

  useEffect(() => {
    setUniqueSlicedColors([...uniqueColors].slice(0, sliceCursor));
  }, [uniqueColors, sliceCursor]);
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
      <section
        className="Image-Color-Picker__Wrap__Box-Bottom"
        onScroll={onScrollColorBlockContainer}
      >
        {uniqueSlicedColors.map((color) => (
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
