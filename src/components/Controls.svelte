<script lang="ts">
export let textInput = ''; 
export let onGenerate: () => void; 
export let onDownload: () => void; 
export let onScaleChange: (scale: 'Small' | 'Medium' | 'Large') => void; 
// export let onBackgroundChange: (background: string) => void;

const handleScaleChange = (event: Event): void => {
  const selectedScale = (event.target as HTMLSelectElement).value as 'Small' | 'Medium' | 'Large'; 
  if (onScaleChange) {
    onScaleChange(selectedScale); 
  }
}

// const handleBackgroundChange = (event: Event): void => {
//   const selectedBackground = (event.target as HTMLSelectElement).value; 
//   if (onBackgroundChange) {
//     onBackgroundChange(selectedBackground); 
//   }
// }
</script>
  
<div id="controls">
  <textarea 
    bind:value={textInput} 
    placeholder="Type your text here..."
    aria-label="Input text for collage"
  >
  </textarea>

  <div id="button-container">
    <div class="dropdown-container">
      <select id="scale-select" on:change={handleScaleChange}>
        <option value="Small">Small</option>
        <option value="Medium" selected>Medium</option>
        <option value="Large">Large</option>
      </select>
    </div>

    <!--  <div class="dropdown-container">
     <select id="background-select" on:change={handleBackgroundChange}> -->
        <!-- <option value="black" selected>Black</option>
        <option value="White">White</option>
      </select> 
    </div> -->
    
    <button on:click={onGenerate}>Generate</button>
    <button on:click={onDownload}>Download</button>
  </div>
</div>
  
<style>
#controls {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

textarea {
  width: 60%;
  height: 100%;
  padding: 10px;
  font-size: 1.5rem; 
  text-align: center;
  resize: vertical; 
  border: none;
  border-radius: 5px;
  color: black;
  background: none;
}
  
textarea::placeholder {
  font-size: 1.4rem;
  font-weight: 400;
  color: black;
}

textarea:focus {
  outline: none;
}

#button-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  z-index: 1;
}

.dropdown-container {
  margin-left: 10px;
  margin-right: 10px;
}

select {
  padding: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-family: "IM Fell DW Pica", serif;
  border-radius: 10px;
  color: grey;
  background: black;
}

select:hover {
  outline: none;
  color: white;
  border: 1px solid pink;
}

button {
  margin: 0 10px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  font-family: "IM Fell DW Pica", serif;
  border: 1px solid black;
  border-radius: 10px;
  color: grey;
  background: black;
}

button:hover {
  color: white;
  border: 1.5px solid pink;
  background: black;
}

button:active {
  transform: scale(0.95);
}

@media (max-width: 768px) {
  textarea {
    width: 90%;
    font-size: 1.2rem;
  }
}
</style>