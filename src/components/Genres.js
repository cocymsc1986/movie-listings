import React, { Fragement } from 'react';

const Genres = ({ genres, clickCheckBox }) => {
    return (
        <Fragment>
            {genres.map((genre, key) => {
                return (
                    <div className="filters__genre" onClick={this.clickCheckBox} key={key}>
                        <label htmlFor={`genre-${genre.id}`}>{genre.name}</label>
                        <input type="checkbox" id={`genre-${genre.id}`} value={genre.id} />
                    </div>
                )
            })}
        </Fragment>
    );
};