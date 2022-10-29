/* eslint-disable camelcase */
import { getUserFavorites } from "./favorites";
import { Launch } from "../types/launch";
import { Rocket } from "../types/rocket";

export const processLaunches = async (userId, launches, rockets) => {
  const userFavorites = await getUserFavorites(userId);

  const flightNumbersFavorities = userFavorites.map(
    (favorite) => favorite.flight_number
  );

  const results = launches.map((launch) => {
    const { flight_number, mission_name, details, links } = launch;

    const rocket: Rocket = rockets.find(
      (rocket) => rocket.rocket_id === launch.rocket.rocket_id
    );

    const { rocket_id, rocket_name, active, cost_per_launch, company } = rocket;
    const newLaunch: Launch = {
      flight_number,
      mission_name,
      mission_patch: links.mission_patch,
      details: details,
      rocket: {
        rocket_id,
        rocket_name,
        active,
        cost_per_launch,
        company,
      },
      favorite: flightNumbersFavorities.includes(flight_number) ? true : false,
    };
    return newLaunch;
  });

  return results;
};
