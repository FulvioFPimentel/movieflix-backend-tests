import React, { useState } from 'react';
import AuthCard from '../Card';
import { useForm } from 'react-hook-form';
import './styles.scss';
import { makeLogin } from '../../../../core/utils/request';
import { saveSessionData } from '../../../../core/utils/auth';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

type FormData = {
    username: string;
    password: string;
}

type LocationState = {
    from: string;
}


const Login = () => {

    const { register, handleSubmit, formState: { errors }} = useForm<FormData>();
    const [hasError, setHasError] = useState(false);
    const history = useHistory();
    let location = useLocation<LocationState>();
    const [ blockComponents, setBlockComponents ] = useState(false);

    const loading = blockComponents === true ? 'loading' : 'Login';

    const { from } = location.state || { from: { pathname: "/movies" } };

    const onSubmit = (data:FormData) => {
        setBlockComponents(true)
        makeLogin(data)
        .then((response) => {
            setHasError(false);
            saveSessionData(response.data);
            history.replace(from)
        })
        .catch(() => {
            setHasError(true);
            setBlockComponents(false)
        });
    }

    return (
        <AuthCard title={loading}>
            {hasError && (
                <div className="alert alert-danger mt-5">
                    Usuário ou senha inválido!
                </div>
            )}
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="margin-botton-30">
                        <input 
                            disabled={blockComponents}
                            type="email" 
                            className={`form-control input-base ${errors.username ? ' is-invalid' : '' }`}
                            placeholder="Email"
                            {...register('username', {
                                required: "Campo obrigatório",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Email inválido"
                                 }
                            })}
                        />
                        {errors.username && (
                            <div className="invalid-feedback d-block">{errors.username.message}</div>
                        )}
                    </div>
                   <div>
                        <input 
                            disabled={blockComponents}
                            type="password" 
                            className={`form-control input-base ${errors.password ? ' is-invalid' : '' }`}
                            placeholder="Senha"
                            {...register('password', {required: true})}
                        />
                        {errors.password && (
                            <div className="invalid-feedback d-block">Campo obrigatório</div>
                        )}
                   </div>
                        
                        <button 
                            disabled={blockComponents}
                            type="submit" 
                            className="btn btn-primary auth-button"
                            >FAZER LOGIN</button>

                        {blockComponents ? (
                            <div className="auth-register">
                                Logando...
                            </div>
                        ) : (
                            <div className="auth-register">
                                <>
                                Ainda não tem conta?
                                </>
                            <Link 
                                to="/register" 
                                className="text-link"
                                >
                                <h5 className="auth-register-link"> Cadastre-se</h5>
                            </Link>
                        </div>
                        )}
                </form>
        </AuthCard>
    )
}

export default Login;