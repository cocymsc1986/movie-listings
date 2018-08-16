import React from 'react';

const Genre = ({ name, id, onClick }) => {
    return (
        <div className="filters__genre" onClick={onClick}>
            <label htmlFor={`genre-${id}`}>{name}</label>
            <input type="checkbox" id={`genre-${id}`} value={id} />
        </div>
    );
};

export default Genre;