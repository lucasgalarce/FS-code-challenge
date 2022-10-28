"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processLaunches = void 0;
const processLaunches = (userId, launches, rockets) => __awaiter(void 0, void 0, void 0, function* () {
    // const userFavorites = await getUserFavorites(userId);
    const results = launches.map((launch) => {
        const { flight_number, mission_name, details, links } = launch;
        const rocket = rockets.find((rocket) => rocket.rocket_id === launch.rocket.rocket_id);
        const { rocket_id, rocket_name, active, cost_per_launch, company } = rocket;
        const newLaunch = {
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
        };
        return newLaunch;
    });
    return results;
});
exports.processLaunches = processLaunches;
