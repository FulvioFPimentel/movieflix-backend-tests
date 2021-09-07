import React from 'react';
import './styles.scss'

const FilterGenre = () => {
    return (
        <div className="card-filter-genre">
            <input 
                className="box-genre" 
                type="link"
                placeholder='Gêneros'    
            />
        </div>
    )
}

export default FilterGenre;