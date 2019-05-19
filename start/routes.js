"use strict";

const Route = use("Route");

Route.get("/user/:id", "UserController.show");
Route.delete("/user/:id", "UserController.destroy");
Route.put("/user/:id", "UserController.update");
Route.get("/users", "UserController.index");
Route.post("/user", "UserController.store");
