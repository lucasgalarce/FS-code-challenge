import { auth } from "../middlewares/auth";

import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from "../controllers/favorites";

export default (router) => {
  router.get("/favorites", auth, getFavorites);
  router.post("/launches/:flight_number/favorite", auth, addFavorite);
  router.delete("/launches/:flight_number/favorite", auth, removeFavorite);
};
