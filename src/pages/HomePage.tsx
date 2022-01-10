
import Header from "../components/Header";
import Navi from "../components/Navi";
import AddItem from "../components/AddItem";

interface HomePageProps{
    title:string
}
export default function HomePage(props:HomePageProps){
    return(
        <div className="homePage">
            <Header title={props.title}/>
            <AddItem/>
            <Navi/>
        </div>
    )
}