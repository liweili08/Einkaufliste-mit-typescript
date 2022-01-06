
export default function ChangeButton(){
let sum=0;
getid("btn+").onclick=function (){
    sum+=1;
    getid("num").value=sum;
}
    getid("btn-").onclick=function (){
        sum-=1;
        getid("num").value=sum;
    }
    return(
        <div className="changePage">
            <input type="text" id="num" value=""/>
            <input type="button" id="btn+" value="+"/>
            <input type="button" id="btn-" value="-"/>
        </div>
    )
}