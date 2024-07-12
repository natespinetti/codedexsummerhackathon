import { Highlight } from "react-instantsearch";
import { getPropertyByPath } from "instantsearch.js/es/lib/utils";

export const Hit = ({ hit }: { hit: any }) => {
  return (
    <article>
      <div className="hit-name">
        <Highlight attribute="name" hit={hit} />
      </div>
    </article>
  );
};
