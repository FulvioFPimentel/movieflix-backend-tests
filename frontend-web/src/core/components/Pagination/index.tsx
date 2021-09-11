import React from 'react';
import {ReactComponent as ArrowIcon} from 'core/assets/images/arrow.svg'
import './styles.scss'
import { generateList } from 'core/utils/list';

type Props = {
    totalPages: number;
    activePage: number;
    onChange: (item: number) => void;
}

const Pagination = ({ totalPages, activePage, onChange }: Props) => {
    const items = generateList(totalPages);
    const previousClass = totalPages > 0 && activePage > 0 ? 'page-active' : 'page-inactive';
    const nextClass = (activePage + 1) < totalPages ? 'page-active' : 'page-inactive'

    return(
        <div className="pagination-container">
            <ArrowIcon
                onClick={() => onChange(activePage - 1)}
                className={`pagination-previuos ${previousClass}`} />
            {items.map(item => (
                <div 
                    key={item}
                    className={`pagination-item ${item === activePage ? 'active' : ''}`}
                    {...console.log(activePage)}
                    onClick={() => onChange(item)}
                 >
                    {item + 1}
                </div>
            ))}

            <ArrowIcon 
                onClick={() => onChange(activePage + 1)}
                className={`pagination-next ${nextClass}`} />
        </div>
    );
}

export default Pagination;