import { Rocket } from "../types/rocket";

export type Launch = {
  flight_number: number;
  mission_name: string;
  details: string;
  mission_patch: string;
  rocket: Rocket;
};
