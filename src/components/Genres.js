import React, { Fragment } from 'react';

import Genre from './Genre';

const Genres = ({ genres, clickCheckBox }) => {
    return (
        <Fragment>
            {genres && genres.map((genre, key) => {
                return (
                    <Genre
                        key={key}
                        onClick={clickCheckBox}
                        name={genre.name}
                        id={genre.id}
                    />
                );
            })}
        </Fragment>
    );
};

export default Genres;