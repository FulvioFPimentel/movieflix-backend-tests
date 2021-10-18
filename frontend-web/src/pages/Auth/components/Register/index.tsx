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
    roles: Role[];
}

const options: Role[] = [
    { id: 1, authority: 'Visitante' },
    { id: 2, authority: 'Membro' }
  ]

const Register = () => {

    const { register, handleSubmit, control } = useForm<formData>();
    const [ checkPassword, setCheckPassword ] = useState('');

    const onSubmit = (data: formData) => {

        if (data.password === checkPassword) {
            makeRequest({ url: '/users', method: 'POST', data })
                .then(() => (
                    history.push('/login')
                )
            )
        }
    }

    return (
        <AuthCard title="Cadastro">
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="margin-botton-30">
                    <input 
                        type="text"
                        {...register('name' , { 
                            required: "Campo obrigatorio!"  
                        })}
                        className="form-control input-base"
                        placeholder="Nome completo"
                        >
                    </input>
                </div>

                <div className="margin-botton-30">
                    <input
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

                <div className="margin-botton-30">
                    <Controller 
                        control={control}
                        name="roles"
                        rules={{required: "Campo obrigatorio"}}
                        render={({ field: {value, onChange}}) => (
                            <Select
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
                <div className="margin-botton-30">
                    <input
                        type="password"
                        {...register('password')}
                        className="form-control input-base"
                        placeholder="Senha"
                        >
                    </input>
                </div>

                <div className="margin-botton-30">
                    <input
                        type="password"
                        className="form-control input-base"
                        placeholder="Confirmar Senha"
                        onChange={value => setCheckPassword(value.target.value)}
                        >
                    </input>
                </div>
                <div className="register-button">
                  
                    <button className="btn btn-primary register-button-text">CANCELAR</button>
                   
                  
                    <button className="btn btn-primary register-button-text">CADASTRAR</button>
                  
                </div>
            </form>
        </AuthCard>
    )
}

export default Register;