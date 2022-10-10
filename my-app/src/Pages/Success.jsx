import { useLocation } from "react-router-dom"


const Success = () => {
  const location = useLocation();

  console.log(location);
  return (
    <div>
      sikeres vásárlás
    </div>
  )
}

export default Success
