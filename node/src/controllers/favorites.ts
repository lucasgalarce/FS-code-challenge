const { AppDataSource } = require("../database/app-data-source");
const { Favorites } = require("../entities/favorites");

export const addFavorite = async (req, res) => {
  const user_id = req.user.userId;
  const { flight_number } = req.params;
  const favoritesRepo = AppDataSource.getRepository(Favorites);
  const currentFav = await favoritesRepo.find({
    where: {
      flight_number,
      user_id,
    },
  });
  if (!currentFav.length) {
    await favoritesRepo.insert({
      flight_number,
      user_id,
    });
  }
  return res
    .status(201)
    .json(`Favorite for ${flight_number} has been updated.`);
};

export const removeFavorite = async (req, res) => {
  const user_id = req.user.userId;
  const { flight_number } = req.params;
  const favoritesRepo = AppDataSource.getRepository(Favorites);
  const result = await favoritesRepo.delete({
    flight_number,
    user_id,
  });
  return res
    .status(200)
    .json(`Favorite for ${flight_number} has been removed.`);
};

export const getFavorites = async (_, res) => {
  const favoritesRepo = AppDataSource.getRepository(Favorites);
  const favs = await favoritesRepo.find();
  return res.status(200).json(favs);
};
