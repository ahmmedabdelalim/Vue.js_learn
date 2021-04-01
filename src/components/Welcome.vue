<template>
  <div class="welcome">
    <h1> {{pagename}} </h1>
    <p>{{pagedesc}}</p>
    
  </div>
</template>


<script lang="ts">
// @ is an alias to /src
export default {
  name: "Welcome",
   data:function ()
  {
    return {
      pagename:"the page welcome ",
      pagedesc : " welcome to page welcome",
    };
  }
  
};
</script>
<style scoped lang="scss">
$fontSize:50px;
h2{
  font-size: 60px;
  
}
</style>