import RecipeReviewCard from "../Posts/Posts"

export default function Post() {
  const posts = JSON.parse(localStorage.getItem("posts"))
    return posts.map((post)=>{
      return <RecipeReviewCard title={post.title} info={post.info} method={post.method} />  
    })
}