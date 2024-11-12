
import ReactDOM from 'react-dom/client';
import "./style.css"
import onee from "./assets/images/trn1.jpg"
import two1 from "./assets/images/trn2.jpg"
import three from "./assets/images/trn3.jpg"
import four from "./assets/images/trn4.jpg"
import five from "./assets/images/trn5.jpg"
import six from "./assets/images/trn6.jpg"

const root=ReactDOM.createRoot(document.getElementById("root"))
function Topic()
{
    return(
        <div>
            <h1>PUMBLEPEE GALLERY</h1>
        </div>
    )
}
function Main(){
    return(
        <div>
            <img src={onee} alt=''></img>
            <img src={two1} alt=''></img>
            <img src={three}alt=''></img>
            <img src={four} alt=''></img>
            <img src={five} alt=''></img>
            <img src={six} alt=''></img>
        </div>
    )
}

root.render(
    <div>
    <Topic></Topic>
    <Main></Main>
    </div>
)