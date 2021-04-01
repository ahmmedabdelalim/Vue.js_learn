<template>
  <div class="about">
    <h1> {{pagename}} </h1>
    <p>{{pagedesc}}</p>
    <Welcome/>
  </div>
</template>


<script lang="ts">
// @ is an alias to /src
 

export default {  
  name: "About",
  data:function ()
  {
    return {
      pagename:"the page about ",
      pagedesc : "adadadaddad",
    };
  }
};
</script>