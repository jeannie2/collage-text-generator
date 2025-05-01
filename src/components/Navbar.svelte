<script lang="ts">
  export let links: { href: string, text: string }[] = [];
</script>

<nav>
  {#each links as link}
    <a href={link.href}>{link.text}</a>
  {/each}
</nav>

<style>
nav {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  font-size: 1.2rem; 
  font-family: 'barrio', sans-serif; 
  background-color: none; 
}
    
a {
  margin-left: 1rem; 
  text-decoration: none;
  color: black; 
}

a:hover {
  text-decoration: none;
} 
</style>