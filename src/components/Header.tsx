import "./Header.css"
import AddItem from "./AddItem";

interface HeaderProps{
    title:string;
}
export default function Header(props:HeaderProps){
    return(<div className="header">
            <h1>Was möchten Sie einkaufen?</h1>
            <h2>Hier ist Ihre Einkaufliste:</h2>
            <h3> {props.title}</h3>

    </div>
    )
}