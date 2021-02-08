<template>
  <div id="show-blogs">
      <input type="search" placeholder="search your blog" v-model="search">
      <div v-for="blog of filteredBlogs" class="single-blog" :key="blog.id">
          <router-link :to="'/' + blog.id"><h2 v-rainBow>{{blog.title}}</h2></router-link>
          <p>{{blog.content | cutter}}</p>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            blogs : [],
            search : ""
        }
    },
    created(){
        this.$http.get("https://vue-blog2-9d4f3-default-rtdb.firebaseio.com/posts.json").then((data) => {
            return data.json()
        }).then((data) => {
            for (const key in data) {
               data[key].id = key
               this.blogs.push(data[key])
            }
        })
    },
    computed : {
        filteredBlogs : function(){
            return this.blogs.filter(blog => blog.title.match(this.search))
        }
    },
    filters:{
        cutter(value){
            return value.slice(0 , 300) + " ..."
        }
    },
    directives : {
        rainBow  : {
            bind(el , binding , vnode){
                el.style.color = "#" + Math.random().toString().slice(2, 8)
            }
        }
    }
}
</script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
input{
    width: 100%;
    height: 40px;
}
a{
    text-decoration: none;
}
</style>