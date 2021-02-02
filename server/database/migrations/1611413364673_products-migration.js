/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.sql(`
    
    CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(200) NOT NULL,
        catagory VARCHAR(200) NOT NULL,
        img VARCHAR NOT NULL,  
        description VARCHAR NOT NULL,
        price INTEGER NOT NULL CHECK(price>0),
        rating REAL CHECK(rating > -1 AND rating<6)
    );

    `);
};

exports.down = (pgm) => {
	pgm.sql(`
    DROP TABLE products
    `);
};
