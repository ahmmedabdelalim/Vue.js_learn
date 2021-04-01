<template>
  <div class="about">
    <h1> {{pagename}} </h1>
    <p>{{pagedesc}}</p>
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
    <Welcome/>
  </div>
</template>


<script lang="ts">
// @ is an alias to /src
 

export default {  
  name: "Blog",
  data:function ()
  {
    return {
      pagename:"the page Blog ",
      pagedesc : "Welcome to Bloge page",
    };
  }
};
</script>