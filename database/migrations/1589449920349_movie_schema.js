"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MovieSchema extends Schema {
  up() {
    this.create("movies", (table) => {
      table.increments();
      table.string("title").notNullable().unique();
      table.string("thumbnail").notNullable();
      table.string("description");
      table.integer("price").notNullable();
      table.date("release_date");
      table.timestamps();
    });
  }

  down() {
    this.drop("movies");
  }
}

module.exports = MovieSchema;
