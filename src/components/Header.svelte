<script lang="ts">
  export let title: string;
</script>
  
<header>
  <h1 id="title"> {title} </h1>
</header>
  
<style>
#title {
  position: absolute;
  left: 10px;
  top: 0;
  text-align: left;
  font-family: "Barrio", system-ui;
  font-size: 2rem;
  color: black;
}
</style>