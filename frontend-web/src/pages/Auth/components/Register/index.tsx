import { Role } from 'core/types/Movie';
import history from 'core/utils/history';
import { makeRequest } from 'core/utils/request';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select'
import AuthCard from '../Card';
import './styles.scss'

type formData = {
    name: string;
    email: string;
    password: string;
    passwordCheck: string;
    roles: Role[];
}

const options: Role[] = [
    { id: 1, authority: 'Visitante' },
    { id: 2, authority: 'Membro' }
  ]

const Register = () => {

    const { register, handleSubmit, control, formState: { errors } } = useForm<formData>();
    const [ confirmedCheck, setConfirmedCheck ] = useState(false);
    const [ blockComponents, setBlockComponents ] = useState(false);

    const loading = blockComponents === true ? 'loading' : 'Cadastro';

    const onSubmit = (data: formData) => {

        if (data.password === data.passwordCheck) { 
            setBlockComponents(true)
            makeRequest({ url: '/users', method: 'POST', data })
                .then(() => (
                    history.push('/login')
                )
            )
            return setConfirmedCheck(false)
        }
        return setConfirmedCheck(true)
    }

    const onCancel = () => {
        history.replace('/login')
    }

    return (
        <AuthCard title={loading}>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <input 
                        disabled={blockComponents}
                        type="text"
                        {...register('name' , { 
                            required: "Campo obrigatorio!"  
                        })}
                        className="form-control input-base"
                        placeholder="Nome completo"
                        >
                    </input>
                </div>
                {errors.name && (
                    <div className="invalid-feedback d-block">{errors.name.message}</div>
                )}

                <div className={`${errors.name ? 'margin-top-20' : 'margin-top-30'}`}>
                    <input
                        disabled={blockComponents}
                        type="email"
                        {...register('email', {
                            required: "Campo obrigatorio",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email inválido"
                            }
                        })}
                        className="form-control input-base"
                        placeholder="Email"
                        >
                    </input>
                </div>
                {errors.email && (
                    <div className="invalid-feedback d-block">{errors.email.message}</div>
                )}

                <div className={`${errors.email ? 'margin-top-20' : 'margin-top-30'}`}>
                    <Controller 
                        control={control}
                        name="roles"
                        rules={{required: "Campo obrigatorio"}}
                        render={({ field: {value, onChange}}) => (
                            <Select
                                isDisabled={blockComponents}
                                value={value}
                                onChange={onChange}
                                options={options}
                                getOptionLabel={(option: Role) => option.authority}
                                getOptionValue={(option: Role) => String(option.id)}
                                classNamePrefix="box-register" 
                                placeholder='Tipo de Conta'   
                                defaultValue={[]}
                                inputId="roles"
                                isMulti
                            />    
                        )}
                    />
                </div>
                {errors.roles && (
                    <div className="invalid-feedback d-block">Campo obrigatorio</div>
                )}
                <div className={`${errors.roles ? 'margin-top-20' : 'margin-top-30'}`}>
                    <input
                        disabled={blockComponents}
                        type="password"
                        {...register('password', {
                            required:"Campo obrigatorio"
                        })}
                        className="form-control input-base"
                        placeholder="Senha"
                        >
                    </input>
                </div>
                {errors.password && (
                    <div className="invalid-feedback d-block">Campo obrigatorio</div>
                )}
                <div className={`${errors.password ? 'margin-top-20' : 'margin-top-30'}`}>
                    
                    <input
                        disabled={blockComponents}
                        type="password" 
                        {...register('passwordCheck', {
                            required:"Campo obrigatorio"
                        })}
                        className="form-control input-base"
                        placeholder="Confirmar Senha"
                        >
                    </input>
                </div>
                {errors.passwordCheck && (
                    <div className="invalid-feedback d-block">Campo obrigatorio</div>
                )}
                {confirmedCheck && (
                    <div className="invalid-feedback d-block">Confirmação de senha incorreta</div>
                )}
                <div className={`register-button ${errors.passwordCheck ? 'margin-top-20' : 'margin-top-30'}`}>
                  
                    <button 
                        disabled={blockComponents}
                        className="btn btn-primary register-button-text"
                        onClick={onCancel}
                        >CANCELAR</button>
                   
                  
                    <button 
                        disabled={blockComponents}
                        className="btn btn-primary register-button-text"
                        >CADASTRAR</button>
                  
                </div>
            </form>
        </AuthCard>
    )
}

export default Register;