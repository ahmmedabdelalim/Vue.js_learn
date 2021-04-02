<template>
  <div class="about">
    <h1> {{pagename}} </h1>
    <p>{{pagedesc}}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area">
            <BlogPost v-for="post in posts" :key="post.id" 
            :views="post.views"
            :title="post.date"
             :auther="post.auther"
              :content="post.content"
               :category="post.category"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="sidebar"></div>
        </div>
      </div>
    </div>
     
   
  </div>
</template>


<script lang="ts">
// @ is an alias to /src
 import BlogPost from "@/components/Blog/BlogPost.vue";
 import postsjson from "../json/MOCK_DATA.json";

export default {  
 
  data:function ()
  {
    return {
      pagename:"the page Blog ",
      pagedesc : "Welcome to Bloge page",
      posts: postsjson,
    };
  },
   name: "Blog",
  components: {
    BlogPost,
    },
};
</script>