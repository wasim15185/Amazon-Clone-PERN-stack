/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.sql(`
    CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(250) NOT NULL,
        email VARCHAR(40) NOT NULL UNIQUE,
        password VARCHAR NOT NULL,
        phone VARCHAR(15) UNIQUE 

    );
    `);
};

exports.down = (pgm) => {
	pgm.sql(`
    DROP TABLE users;
    `);
};
