import {Link} from "react-router-dom";
import {Footer, FooterDescription} from "../../styled-components/Login";

export function LoginFooter() {
    return (
        <Footer className='footer'>
            <FooterDescription className='footer__description'>2019 © <Link to='/'>Innovation Mapping
                Ltd</Link></FooterDescription>
        </Footer>
    )
}