import { HtmlHTMLAttributes } from "react";
import { BazarekType } from "../../types/Types";
import { TypeItem, onSelectType } from "./TypeItem";
import clsx from "clsx";

export interface TypesListProps extends HtmlHTMLAttributes<HTMLElement> {
  items: BazarekType[] | null;
  onSelectItem?: onSelectType;
  isSelected: (item: BazarekType) => boolean;
}

export const TypesList = (props: TypesListProps) => {
  const { className, items, onSelectItem, isSelected, children, ...other } =
    props;
  return items ? (
    <aside className={clsx(className, "w-[160px]")} {...other}>
      Typy
      <ul className="mt-4">
        {items.map((x) => (
          <TypeItem
            key={x.id}
            item={x}
            onSelectItem={onSelectItem}
            selected={isSelected(x)}
          />
        ))}
      </ul>
      {children}
    </aside>
  ) : null;
};
