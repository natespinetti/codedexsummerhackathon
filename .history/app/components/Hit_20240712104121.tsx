import { Highlight } from "react-instantsearch";

// Algolia search results
export const Hit = ({ hit }: { hit: any }) => {
  return (
    <article>
      <div className="hit-name">
        <Highlight attribute="name" hit={hit} />
      </div>
    </article>
  );
};
