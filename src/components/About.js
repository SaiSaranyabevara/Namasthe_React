import User from "./User";
import Userclass from "./Userclass";

const About = () => {
    return(
        <div>
            <h1> This is About page</h1>
            <h3>Here We Will Get the About of the page</h3>

            <User name={"Venkata sai Bevara"}/>
            <Userclass name={"sai saranya Bevara"} location={"RTV"}/>
        </div>
    )
}


export default About;