
import frontend from "../assets/frontend.jpg"
import backend from "../assets/backend.jpg"
import fullStack from "../assets/fullStack.jpg"
import Ui from "../assets/Ui,ux.jpg"
import ecommerce from "../assets/ecommerce.jpg"
import content from "../assets/contentWrite.jpg"
import { RxCamera } from "react-icons/rx";
import { Link } from "react-router"
export const cardData = [
    {
        id:1 ,
        image:frontend,
        name:"CraftX Frontend",
        iconImage: <RxCamera size={100}/> ,
        
    },
    {
        id:2 ,
        image:backend,
        name:"CraftX Backend",
        iconImage: <RxCamera size={100}/> ,
    },
    {
        id:3 ,
        image:fullStack,
        name:"CraftX Full Stack",
        iconImage: <RxCamera size={100}/> ,
    },
    {
        id:4 ,
        image:Ui,
        name:"CraftX UI/UX",
        iconImage: <RxCamera size={100}/> ,
    },
    {
        id:5 ,
        image:ecommerce,
        name:"CraftX E-Commerce",
        iconImage: <RxCamera size={100}/> ,
    },
    {
        id:6 ,
        image:content,
        name:"CraftX Textify",
        iconImage: <RxCamera size={100}/>,
    },
]
