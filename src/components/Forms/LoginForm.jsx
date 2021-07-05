import {Button, Form, Input, Label} from "../../styled-components/Login";

export function LoginForm() {
    return (
        <Form className='login-form' autoComplete='off'>
            <Label className='login-form__name-label' htmlFor="email">Login to your account</Label>
            <Input className='login-form__input' placeholder='Email' id='email' type="text"/>
            <Input className='login-form__input' placeholder='Password' type="password"/>
            <Button className='login-form__btn'>Login</Button>
        </Form>
    )
}