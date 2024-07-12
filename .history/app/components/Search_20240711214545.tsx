import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/satellite.css";
import { Hits, InstantSearch, SearchBox, Configure } from "react-instantsearch";

import { Hit } from "../components/Hit";

const searchClient = algoliasearch(
  "59235Y0Q1B",
  "206b69ce93d991895114cfd7ac26f46c"
);

export const Search = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="games">
      <Configure />
      <div className="ais-InstantSearch">
        <SearchBox />
        <Hits hitComponent={Hit} />
      </div>
    </InstantSearch>
  );
};
