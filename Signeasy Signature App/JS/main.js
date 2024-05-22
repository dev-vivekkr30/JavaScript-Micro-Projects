const colorPicker = document.getElementById('color-picker');
const canvasPicker = document.getElementById('canvas-color');
const fontPicker = document.getElementById('font-picker');
const myCanvas = document.getElementById('mycanvas');
const clearButton = document.getElementById('clearbtn');
const saveButton = document.getElementById('savebtn');

const ctx = myCanvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;

colorPicker.addEventListener('change', (e) => {
    ctx.strokeStyle = e.target.value;
    ctx.fillStyle = e.target.value;
});

myCanvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});

myCanvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        lastX = e.offsetX;
        lastY = e.offsetY;
    }
});

myCanvas.addEventListener('mouseup', () => isDrawing = false);
myCanvas.addEventListener('mouseout', () => isDrawing = false);

// Set canvas size
myCanvas.width = myCanvas.offsetWidth;
myCanvas.height = myCanvas.offsetHeight;

// Canvas Color
canvasPicker.addEventListener('change', (e) => {
    ctx.fillStyle = e.target.value;
    ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
});

// Stroke Size Picker
fontPicker.addEventListener('change', (e) => {
    ctx.lineWidth = parseInt(e.target.value, 10);
});

clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
});

saveButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'signature.png';
    link.href = myCanvas.toDataURL();
    link.click();
});
