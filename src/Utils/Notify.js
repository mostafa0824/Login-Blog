import toast from "react-hot-toast"

const Notify=(type,message)=>{
 toast[type](message, {
    duration: 4000,
    position: "bottom-center",
  });
}

export default Notify