import html2canvas from 'html2canvas';
import fonts from './fonts.js';

// image utilities
const saveAsImages = async (output: HTMLElement | null) => {
  if (output) {
    const canvas = await html2canvas(output);
    const link = document.createElement('a');
    link.download = 'my-collage-text.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }
}

const saveAsImage = async (): Promise<void> => {
  try {
    const output = document.getElementById('output');
    if (output) {
      // temporarily set background of #output 
      // const originalBackground = output.style.backgroundColor;
      // output.style.backgroundColor = 'white';
      // output.style.backgroundColor = color;
  
      const canvas = await html2canvas(output, {
        useCORS: true,
        backgroundColor: null, // transparent
      });
  
      // output.style.backgroundColor = originalBackground;  // restore original background
  
      const link = document.createElement('a');
      link.download = 'collage.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  } catch (e) {
    console.error('failed to save image:', e);
    alert('failed to generate image for download. Please try again.');
  }
}

// font utilities
const loadFont = (font: string): void => {
  const link = document.createElement('link');
  link.href = `https://fonts.googleapis.com/css2?family=${font.replace(' ', '+')}&display=swap`;
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}

const randomFont = () => {
  const font = fonts[Math.floor(Math.random() * fonts.length)];
  loadFont(font);
  return font;
};

// random generators for collage text
const randomRotation = (): number => Math.random() * 20 - 10; // -10 to 10

const randomRGBA = (): string => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  // const a = parseFloat(Math.random().toFixed(1)); 
  const a = 0.3 + Math.random() * 0.4; 
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const randomFontSize = ():number => { 
  return Math.random() * (5 - 2) + 2; // float 2 to 5
}

const randomFontWeight = (): number => Math.floor(Math.random() * 800 + 100);
const randomWidth = (): number => Math.random() * (100 - 30) + 30;
const randomHeight = (): number => Math.random() * (80 - 60) + 60;

// shape utilities
const randomBorderRadius = ():string => {
  const topLeft = Math.random() * 20; 
  const topRight = Math.random() * 30; 
  const bottomRight = Math.random() * 30; 
  const bottomLeft = Math.random() * 20; 
  return `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}% / ${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`;
}

const randomClipPath = ():string => {
  return `polygon(
    ${Math.random() * 100}% ${Math.random() * 100}%, 
    ${Math.random() * 100}% ${Math.random() * 100}%, 
    ${Math.random() * 100}% ${Math.random() * 100}%, 
    ${Math.random() * 100}% ${Math.random() * 100}%
  )`;
}

export {
  saveAsImage,
  saveAsImages,
  randomFont,
  randomRGBA,
  randomRotation,
  randomFontSize,
  randomFontWeight,
  randomWidth,
  randomHeight,
  randomBorderRadius,
  randomClipPath
};