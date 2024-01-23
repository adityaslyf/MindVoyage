import Navbar from "../../components/Navbar/Navbar"
import Leftbar from "../../components/Leftbar/Leftbar"
import Feed from '../../components/Feed/Feed'
import Rightbar from '../../components/Rightbar/Rightbar'

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <div className="homecontainer flex flex-row">
        <Leftbar />
        <Feed />
        <Rightbar />
        </div>
        
        </div>
        
  )
}

export default Homepage