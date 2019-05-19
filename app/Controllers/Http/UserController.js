"use strict";

const User = use("App/Models/User");

class UserController {
  async show({ params }) {
    const user = await User.findOrFail(params.id);
    return user;
  }

  async destroy({ params }) {
    const user = await User.findOrFail(params.id);

    await user.delete();
  }

  async update({ params, request }) {
    const user = await User.findOrFail(params.id);
    const data = request.all();
    var dataModified = {};

    dataModified.name = data.name;
    dataModified.username = data.username;
    dataModified.email = data.email;
    dataModified.street = data.address.street;
    dataModified.number = data.address.number;

    user.merge(dataModified);

    await user.save();

    return user;
  }

  async index() {
    const users = await User.all();

    return users;
  }

  async store({ request, response }) {
    const data = request.all();
    var dataModified = {};

    dataModified.name = data.name;
    dataModified.username = data.username;
    dataModified.email = data.email;
    dataModified.street = data.address.street;
    dataModified.number = data.address.number;

    const user = await User.create(dataModified);

    return user;
  }
}

module.exports = UserController;
