<template>
    <div class="post_box">
        <span class="post_views"> {{views}}</span>
        <h3 class="post_title"> {{title}} </h3>
        <span class="post_date"> {{date}} </span>
        <p class="post_content"> {{content}} </p>

        <div class="row">

            <div class="col-sm-6"> 
                <span class="post_author">  
                    {{auther}} 
                </span>
            </div>
            <div class="col-sm-6 text-right">
                <span class="post_category tex">{{category}}  </span>
            </div>
        </div>

    </div>
</template>


<script lang="ts">
// @ is an alias to /src
export default {
     props:["views","title","date","content","auther","category"],
  name: "BlogPost",
 
  
};
</script>
<style lang="scss" scoped>
.post_box{
    padding: 15px;
    background-color: #fff;
    box-shadow: 0 0 10px #eee;
    position: relative;
    text-align: left;

    .post_views {
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: #4caf50;
        color: #fff;
        text-align: center;
        border-radius: 4px;
        font-weight: bold;
        padding: 1px 5px ;
    }

    .post_date {
        display: block;
        padding: 0 0 5px;
        color: #888;
        font-size: 14px;

    }

    .post_content{
        line-height: 1.8;
        color: #666;

    }
    .post_author {
        background-color: #607d8b;
        padding: 6px 10px;
        border-radius:4px ;
        color: #fff ;

    }

    .post_category {
        background-color: #607d8b;
        padding: 6px 10px;
        border-radius:4px ;
        color: #fff ;

    }
}

</style>