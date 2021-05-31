<template>
  <div id="app">
    <Header />
    
    <router-view />    
  </div>
</template>

<script>
import {Header} from "@/components/Shared";
export default {
  components: {Header},
  
}
</script>

<style lang="scss">

.masonry {
  margin: 2rem 0;
  display: block;
  columns: 12rem;
  gap: 1rem;
}
.gird {
  margin-bottom: 4rem;
  break-inside: avoid;
}

/* --- The rest of the styling --- */
* {
  box-sizing: border-box;
}
body { 
  font-family: avenir, roboto, helvetica, sans-serif;
  margin: 2rem calc(2vw + 2rem);
}

img { 
  width: 100%; 
  display: block;
  border-radius: 0.5rem;
}
code {
  font-size: 1.07rem;
  color: #d45b2c;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
