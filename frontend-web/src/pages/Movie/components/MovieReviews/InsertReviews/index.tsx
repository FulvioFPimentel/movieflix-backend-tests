import { useForm } from "react-hook-form";

type Props = {
    insertReview: (value: string) => void;
}

type FormState = {
    text: string;
}

const InsertReviews = ({ insertReview }: Props) => {
    const { register, handleSubmit, formState: {errors}, setValue } = useForm<FormState>();

    const onChange = (data: FormState) =>{
        insertReview(data.text)
        setValue('text', '');
    }

    return (
        <form onSubmit={handleSubmit(onChange)}>

            <div>
                <div className="card-base border-radius-4 movie-evaluation">
                    <input 
                        className="form-control input-base" 
                        {...register('text', {required:"Campo obrigatorio!"})}
                        placeholder="Deixe sua avaliação aqui"
                        />
                        {errors.text && (
                        <div className="invalid-feedback d-block">
                            Campo obrigatório
                        </div> 
                    )}

                    <button 
                        type="submit" 
                        className="btn btn-primary movie-evaluation-button"
                        >
                            SALVAR AVALIAÇÃO
                    </button>

                </div>
            </div>
        </form>

    )
}

export default InsertReviews;