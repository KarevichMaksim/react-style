import {Container} from "../styled-components/Login";
import {LoginHeader} from "../components/Headers/LoginHeader";
import {LoginMain} from "../components/Mains/LoginMain";
import {LoginFooter} from "../components/Footers/LoginFooter";

export function Login() {
    return (
        <Container>
            <LoginHeader/>
            <LoginMain/>
            <LoginFooter/>
        </Container>
    )
}