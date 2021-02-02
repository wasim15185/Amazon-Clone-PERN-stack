/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.sql(`
    CREATE TABLE carts(
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        products_id INTEGER REFERENCES products(id)
    );
    `);
};

exports.down = (pgm) => {
	pgm.sql(`DROP TABLE carts;`);
};
