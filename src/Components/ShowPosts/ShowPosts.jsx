import { Box } from "@material-ui/core";
import RecipeReviewCard from "../Post/Post";

export default function ShowPosts() {
  const posts = JSON.parse(localStorage.getItem("posts"));
  return (
    <Box display="flex" justifyContent="space-between" flexWrap="wrap">
      {posts.map((post) => {
        return (
          <RecipeReviewCard
            title={post.title}
            info={post.info}
            method={post.method}
            postId={post.postId}
          />
        );
      })}
    </Box>
  );
}
