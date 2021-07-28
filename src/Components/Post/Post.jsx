import { Box } from "@material-ui/core";
import RecipeReviewCard from "../Posts/Posts";

export default function Post() {
  const posts = JSON.parse(localStorage.getItem("posts"));
  return (
    <Box display="flex">
      {posts.map((post) => {
        return (
          <RecipeReviewCard
            title={post.title}
            info={post.info}
            method={post.method}
          />
        );
      })}
    </Box>
  );
}
