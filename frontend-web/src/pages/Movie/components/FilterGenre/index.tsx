import { Genre } from 'core/types/Movie';
import { makePrivateRequest } from 'core/utils/request';
import { useEffect, useState } from 'react';
import Select from 'react-select'
import './styles.scss'

type Props = {
    onChangeGenre: (value?: number) => void;
}

const FilterGenre = ({ onChangeGenre }: Props) => {

    const [ genreResponse, setGenreResponse ] = useState<Genre[]>([]);

    useEffect(() => {
        makePrivateRequest({ url: '/genres'})
            .then(response => setGenreResponse(response.data))
    },[])

    return (
        <div className="card-filter-genre">
            <div className="card-container">

                <Select
                    classNamePrefix="box-genre" 
                    options={genreResponse}
                    getOptionLabel={(option: Genre)=> option.name}
                    getOptionValue={(option: Genre)=> String(option.id)}
                    defaultValue={[]}
                    onChange={value => onChangeGenre(value?.id)}
                    isClearable
                    placeholder='Gêneros'    
                />
            </div>
        </div>
    )
}

export default FilterGenre;