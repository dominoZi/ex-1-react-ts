import { BazarekCategory } from "../../types/Categories";
import { CategoryItem } from "./CategoriesItem";

export interface CategoriesListProps {
  items: BazarekCategory[] | null;
  onClickItem: (item: BazarekCategory) => void;
}

export const CategoriesList = (props: CategoriesListProps) => {
  const { items, onClickItem } = props;
  return items ? (
    <main className="w-full flex-grow ml-4">
      Kategorie
      <ul className="flex flex-wrap mt-4 mx-[-0.5rem]">
        {items.map((x) => (
          <CategoryItem
            key={x.id}
            item={x}
            className="mx-2 mb-4"
            onClick={() => onClickItem(Object.freeze(structuredClone(x)))}
          />
        ))}
      </ul>
    </main>
  ) : null;
};
