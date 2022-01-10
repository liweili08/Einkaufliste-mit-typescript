import Navi from "../components/Navi";
import Header from "../components/Header";

interface ChangePageProps{
    title:string
}

export default function ChangePage(props:ChangePageProps){
    return(
        <div className="changePage">
            <Header title={props.title}/>
            <h2>Änderung der Liste</h2>
            <Navi/>
        </div>
    )
}