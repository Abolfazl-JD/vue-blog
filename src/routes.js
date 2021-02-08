import AddBlog from "./components/add-blog"
import ShowBlogs from "./components/show-blogs"
import SingleBlog from "./components/single-blog"

export default [
    { path: "/", component: AddBlog },
    { path: "/show-blogs", component: ShowBlogs },
    { path: "/:id", component: SingleBlog }
]