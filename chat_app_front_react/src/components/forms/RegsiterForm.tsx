import { InputContainer, InputField, InputLabel, Button } from "../../utils/styles/index.tsx";
import styles from './index.module.scss'
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";

export const RegisterForm = () =>
{
    const {register, handleSubmit, formState: {errors}} = useForm();
    console.log(errors)
    const onSubmit = (data: any) => {console.log(data);};
    return <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
            <InputLabel htmlFor="email">Email</InputLabel>
            <InputField type="email" id="email" {...register('email', {required: 'Email is required'})}/>
        </InputContainer>
        <section className={styles.nameFieldRow}>
        <InputContainer>
            <InputLabel htmlFor="firstName" >First Name</InputLabel>
            <InputField type="text" id="firstName" {...register('firstName', {required: 'First Name is required'})} />
        </InputContainer>
        <InputContainer>
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <InputField type="text" id="lastName" {...register('lastName', {required: 'Last Name is required'})}/>
        </InputContainer>
        </section>
        <InputContainer>
            <InputLabel htmlFor="password">Password</InputLabel>
            <InputField type="password" id="password"  {...register('password', {required: 'Password is required'})}/>
        </InputContainer>
        <Button className={styles.button}>Create My Account</Button>
        <div className={styles.footerText}>
            <span>Already have an account? </span>
            <Link to="/login">
            <span>Login</span>
            </Link>
            
        </div>
    </form>;
};