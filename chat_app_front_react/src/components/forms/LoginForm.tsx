import { InputContainer, InputField, InputLabel, Button } from "../../utils/styles/index.tsx";
import styles from './index.module.scss'
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";
export const LoginForm = () =>
{
    const {register, handleSubmit, formState: {errors}} = useForm();
    console.log(errors)
    const onSubmit = (data: any) => {console.log(data);};
    return <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
            <InputLabel htmlFor="email">Email</InputLabel>
            <InputField type="email" id="email" {...register('email', {required: 'Email is required'})}/>
        </InputContainer>
        <InputContainer className={styles.loginFormPassword}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <InputField type="password" id="password" {...register('password', {required: 'Password is required'})}/>
        </InputContainer>
        <Button className={styles.button}>Login</Button>
        <div className={styles.footerText}>
            <span>Not registered? </span>
            <Link to="/register">
            <span>Register</span>
            </Link>
        </div>
    </form>;
};