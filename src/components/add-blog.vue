<template>
  <div id="add-blog">
      <h2>Add a new blog</h2>
      <form v-if="!submitted">
          <p>title : </p>
            <input v-model="blog.title" type="text">
            <p>body: </p>
            <textarea v-model.lazy="blog.content" rows="10" cols="30"></textarea>
            <p>categories :</p>
            <div id="checkboxes">
                <label>video games</label>
                <input v-model="blog.categories" type="checkbox" value="video games">
                <label>eating</label>
                <input type="checkbox" v-model="blog.categories" value="eating">
                <label>football</label>
                <input type="checkbox" v-model="blog.categories" value="football">
            </div>
            <p>author :</p>
            <select v-model="blog.author">
                <option v-for="author of authors" :key="author">{{author}}</option>
            </select>
            <br><br>
            <button @click.prevent="submit">Add blog</button>
      </form>
      <h2 v-if="submitted">You successfully added a new blog</h2>
      <div id="preview">
          <h2>preview Blog</h2>
          <p>blog title : {{blog.title}}</p>
          <p>blog body :</p>
          <p> {{blog.content}}</p>
          <p>blog categories : </p>
          <ul>
              <li v-for="category of blog.categories" :key="category">{{category}}</li>
          </ul>
          <p>blog author : {{blog.author}}</p>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            blog : {
                title : "",
                content : "",
                categories : [],
                author : ""
            },
            authors : ["Hamid bloorin" , "Parsa nadalizade" , "Abolfazl Jalildoost"],
            submitted : false
        }
    },
    methods:{
        submit(){
            this.$http.post("https://vue-blog2-9d4f3-default-rtdb.firebaseio.com/posts.json" , this.blog).then((data) => {
                console.log(data)
                this.submitted = true
            })
        }
    }
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
</style>