import React from 'react';
import { ReactComponent as Loading } from 'core/assets/images/loading.svg'
import './styles.scss'

type Props = {
    title: string;
    children: React.ReactNode;
}

const AuthCard = ( { title, children  }: Props ) => {

    return (
       <div className="card-base auth-card">
           {title === 'loading' ? (
                <h1 className="auth-card-loading"> 
                    <Loading />
                </h1>
           ) : (
                <h1 className="auth-card-title">
                    {title}
                </h1>
           )}

           {children}
       </div>
    )
}

export default AuthCard;