import Box from "@material-ui/core/Box";
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'


export default function FooterIcons({width}){
  return (
    <Box
    width={width}
    display="flex"
    justifyContent="space-around"
    alignItems="center"
  >
    <FacebookIcon />
    <InstagramIcon />
    <TwitterIcon />
    <YouTubeIcon />
  </Box>
  )
}