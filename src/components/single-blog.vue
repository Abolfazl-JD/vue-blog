<template>
  <div>
      <h2>{{blog.title}}</h2>
      <p>{{blog.content}}</p>
      <ul>
          <li v-for="category of blog .categories" :key="category">{{category}}</li>
      </ul>
      <p>author : {{blog.author}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            id : this.$route.params.id,
            blog : {}
        }
    },
    created(){
      this.$http.get("https://vue-blog2-9d4f3-default-rtdb.firebaseio.com/posts/" + this.id + ".json").then((data) => {
            return data.json()
        }).then((data) => {
            console.log(data)
            this.blog = data
        })  
    }
}
</script>

<style scoped>
div{
    max-width: 1000px;
    margin: 0 auto;
}
</style>