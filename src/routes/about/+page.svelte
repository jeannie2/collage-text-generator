<script>
import { Navbar } from '$lib';

const links = [
  { href: '/', text: 'Home' },
]

export const load = () => {
  return {
    title: 'About Collage Text Generator',
    description: 'Learn more about Collage Text Generator and its features.'
  };
};
</script>

<Navbar {links} />

<div id="container">
  <div id="text-content">
    <h1>About</h1>
      <p>Welcome to the Collage Text Generator! This tool allows you to create your own text collages with customizable size for your next project. Download as an image with transparent background.</p>
  </div>
</div>

<style>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

#text-content {
  width: 50%;
}

h1 {
  margin-bottom: 1rem;
  text-align: center;
  font-family: 'Snowburst One', cursive;
  color: black;
}

p {
  margin-bottom: 1rem;
  text-align: center;
  font-family: Arial, sans-serif;
  color: black;
}
</style>