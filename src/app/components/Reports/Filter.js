import React from 'react';

export const Filter = ({ filter, setFilter }) => {
    return (
        <span className='search-report'>
            Search: {' '}
            <input value={filter || ''}
                onChange={e => setFilter(e.target.value)}
            />
        </span>
    )
}