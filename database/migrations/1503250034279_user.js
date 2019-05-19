"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("users", table => {
      table.increments();
      table.string("name").notNullable();
      table
        .string("username")
        .notNullable()
        .unique();
      table
        .string("email")
        .notNullable()
        .unique();
      table.string("street").notNullable();
      table.integer("number").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
