import React from 'react';
import AuthCard from '../Card';
import { useForm } from 'react-hook-form';
import './styles.scss';

type FormData = {
    email: string;
    password: string;
}

const Login = () => {

    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (data:FormData) => {
        console.log(data);
    }

    return (
        <AuthCard title="login">
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        type="email" 
                        className="form-control input-base margin-botton-30" 
                        placeholder="Email"
                        {...register('email')}
                        />

                <input 
                        type="password" 
                        className="form-control input-base" 
                        placeholder="Senha"
                        {...register('password')}
                        />
                        
                        <button type="submit" className="btn btn-primary auth-button">FAZER LOGIN</button>
                </form>
        </AuthCard>
    )
}

export default Login;