import RecipeReviewCard from "../Posts/Posts"

export default function Post({posts, logged}) {
    return posts.map((post)=>{
      return <RecipeReviewCard title={post.title} info={post.info} logged={logged}/>  
    })
}