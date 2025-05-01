<script lang="ts">
import type { CollageItem as CollageItemType } from '$lib';
import { randomFont, randomRotation, randomRGBA, randomFontSize, randomFontWeight, randomWidth, randomHeight, saveAsImage, Navbar, CollageItem, Controls, randomBorderRadius } from '$lib';

export const load = () => {
  return {
    title: 'Collage Text Generator',
    description: 'Create custom text collages for download.'
  };
};
  
const links = [
  { href: '/about', text: 'About' },
];

let output: HTMLElement | null = null;
let items: CollageItemType[] = [];
let textInput = '';
let scaleMode: 'Small' | 'Medium' | 'Large' = 'Medium'; 
// let backgroundColor = 'black';

const handleScaleChange = (mode: 'Small' | 'Medium' | 'Large') => {
  scaleMode = mode; 
}

const generateCollage = () => {
  items = [];
  const scale = scaleMode ===  'Small' ? 1 : scaleMode === 'Medium' ? 1.5 : 2;
  const minFontSize = 2;
  const minDivSize = 3;

  items = textInput.split('').map((char, index): CollageItemType => {
    const fontSize = Math.max(scale * 1.5, minFontSize); 
    const divSize = Math.max(scale * 2, minDivSize); 

    // spaces
    if (char === ' ') {
      const spaceItem: CollageItemType = {
        id: `${char}-${index}`, 
        char,
        styles: {
          outerWrapperStyles: {
            filter: 'none',
            transform: `scale(${scale})`, 
            transformOrigin: 'center',
          },
          wrapperStyles: {
            position: 'relative',
            display: 'inline-block',
            margin: '5px',
            // clipPath: 'none', 
            backgroundColor: 'transparent', 
            width: '10px', 
            height: '1px', 
            borderRadius: randomBorderRadius(),
            filter: 'none',
            zIndex: 1, 
          },
          textStyles: {
            position: 'relative',
            fontFamily: 'inherit', 
            fontSize: '0', 
            fontWeight: 'normal',
            color: 'transparent', 
            transform: 'none',
            textAlign: 'center',
            zIndex: 2,
          },
        },
        scale,
      };
      return spaceItem;
    }

    // regular characters
    const charItem: CollageItemType = {
      id: `${char}-${index}`, 
      char,
      styles: {
        outerWrapperStyles: {
          filter: 'drop-shadow(0px 8px 5px rgba(0, 0, 0, 0.5))',
          transform: `scale(${scale})`,
          transformOrigin: 'center',
        },
        wrapperStyles: {
          position: 'relative',
          display: 'inline-block',
          margin: `${scale * 1}rem`,
          // clipPath: subtleClipPath(),
          backgroundColor: randomRGBA(),
          width: `${divSize}rem`, 
          height: `${divSize}rem`, 
          borderRadius: randomBorderRadius(),
          filter: `drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))`,
          zIndex: 1,
        },
        textStyles: {
          position: 'relative',
          fontFamily: randomFont(),
          fontSize: `${fontSize}rem`,
          fontWeight: randomFontWeight(),
          color: 'black',
          transform: Math.random() > 0.5 ? `rotate(${randomRotation()}deg)` : 'none',
          textAlign: 'center',
          zIndex: 2,
        },
      },
      scale,
    };
    return charItem;
  });
  // console.log(items); 
} 
</script>

<Navbar {links} />

<div id="container">
   <div id="output" bind:this={output}>
    {#each items as item (item.id)}
      <CollageItem 
        char={item.char} 
        styles={item.styles} 
        scale={item.scale}
      />
    {/each}
  </div>
 
  <Controls
    bind:textInput
    onGenerate={generateCollage}
    onDownload={saveAsImage} 
    onScaleChange={handleScaleChange}
  />
  <!-- onBackgroundChange={handleBackgroundColorChange} -->
</div>

<style>
#container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
}

#output {
  width: 70%;
  height: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  padding: 5px;
  user-select: none;
  overflow: hidden; 
  border-radius: 10px;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  #output {
    width: 90%;
    height: 50%;
  }
}
</style>