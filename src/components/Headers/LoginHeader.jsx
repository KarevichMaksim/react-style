import {Header, Image, ImageDescription} from "../../styled-components/Login";

export function LoginHeader(){
    return (
        <Header>
            <Image src="https://www.geoptimise.net/images/geoptimise_flat.png" alt="Company's logo" />
            <ImageDescription>Find more of your best customers.</ImageDescription>
        </Header>
    )
}