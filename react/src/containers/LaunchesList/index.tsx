import { useEffect, useContext, useState } from "react";
import { ModeContext } from "contexts/ModeContext";
import { Launch } from "types";
import { LaunchCard, Search, Pagination, CARDS_PER_PAGE } from "components";
import { getLaunches } from "../../api";
import "./index.scss";
import { useLocalStorage } from "hooks/useLocalStorage";

export const LaunchesList = () => {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [filteredLaunches, setFilteredLaunches] = useState<Launch[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const { showAll } = useContext(ModeContext);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { favorites, updateFavorite } = useLocalStorage()
  const filterLaunches = () => {
    setCurrentPage(1);
    setFilteredLaunches(
      launches.filter((launch: Launch) => showAll || favorites[launch.flight_number]).filter((launch: Launch) => launch.mission_name.includes(searchText))
    );
  };

  const loadLaunches = async () => {
    try {
        const launches = await getLaunches();
        setLaunches(launches);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadLaunches();
  }, []);

  useEffect(filterLaunches, [searchText, showAll, launches, favorites]);

  return (
    <div className="launches-list-container">
      <div className="total">Total ({filteredLaunches.length})</div>
      <Search value={searchText} onChange={setSearchText} />
      <div className="launches-list">
        {filteredLaunches
          .filter(
            (_: Launch, i: number) =>
              i >= CARDS_PER_PAGE * (currentPage - 1) &&
              i < CARDS_PER_PAGE * currentPage
          )
          .map((launch, i) => (
            <LaunchCard
              key={launch.flight_number}
              launch={launch}
              updateFavorite={updateFavorite}
              favorites={favorites}
            />
          ))}
      </div>
      <Pagination
        value={currentPage}
        onChange={setCurrentPage}
        itemsCount={filteredLaunches.length}
      />
    </div>
  );
};
