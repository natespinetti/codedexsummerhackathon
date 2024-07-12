import { Highlight } from "react-instantsearch";

export const Hit = ({ hit }: { hit: any }) => {
  return (
    <article>
      <div className="hit-name">
        <Highlight attribute="name" hit={hit} />
      </div>
    </article>
  );
};
