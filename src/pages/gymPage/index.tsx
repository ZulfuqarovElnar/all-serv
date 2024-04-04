import Fitness from "../../components/gym/fitness";
import { Outlet } from "react-router-dom";


const GymPage= ()  => {
    return (
        <div>
            <Fitness />
            <Outlet />
        </div>
  )
}
export default GymPage;