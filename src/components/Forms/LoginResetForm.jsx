import {Button, Form, Input, Label} from "../../styled-components/Login";

export function LoginResetForm() {
    return (
        <Form className='login-form' autoComplete='off'>
            <Label className='login-form__name-label' htmlFor="email">Reset Your Password</Label>
            <Input className='login-form__input' placeholder='Email' id='email' type="text"/>
            <Button className='login-form__btn'>Send Password Reset Email</Button>
        </Form>
    )
}