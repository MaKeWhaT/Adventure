onmessage = function (e) {
  console.log('Message Received From Main Script.');
  const { dataRef, cursorStart, cursorEnd } = e.data;
  const colorSet: Set<string> = new Set();
  for (let i = cursorStart; i <= cursorEnd; i += 4) {
    const nextRGBA = `rgba(${dataRef[i]},${dataRef[i + 1]},${dataRef[i + 2]},${
      dataRef[i + 3]
    })`;
    colorSet.add(nextRGBA);
  }
  postMessage(colorSet);
};
