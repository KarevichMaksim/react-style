import {useState} from "react";
import {LoginResetForm} from "../Forms/LoginResetForm";
import {LoginForm} from "../Forms/LoginForm";
import {ToggleForm, ToggleReset, Main} from "../../styled-components/Login";

export function LoginMain() {
    const [resetPassword, setResetPassword] = useState();

    const showToggle = resetPassword &&
        <ToggleForm onClick={() => setResetPassword(false)}><i className="fas fa-pencil-alt"/>Login
        </ToggleForm>;

    const passwordReset = !resetPassword &&
        <ToggleReset onClick={() => setResetPassword(true)}>Forgot your password?</ToggleReset>;

    const formControll = resetPassword ? <LoginResetForm/> : <LoginForm/>

    return (
        <Main className='main'>
            {showToggle}
            {formControll}
            {passwordReset}
        </Main>
    )
}