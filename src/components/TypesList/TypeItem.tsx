import { LiHTMLAttributes } from "react";
import { BazarekType } from "../../types/Types";
import clsx from "clsx";

export type onSelectType = (item: BazarekType) => void;

export interface TypeItemProps
  extends Omit<LiHTMLAttributes<HTMLElement>, "children"> {
  item: BazarekType;
  selected?: boolean;
  onSelectItem?: onSelectType;
}

export const TypeItem = (props: TypeItemProps) => {
  const { className, onSelectItem, selected = false, item, ...other } = props;
  return (
    <li
      className={clsx(className, "TypeItem-root", selected && "selected")}
      key={item.id}
      {...other}
    >
      <button
        onClick={() =>
          onSelectItem && onSelectItem(Object.freeze(structuredClone(item)))
        }
        className="w-full h-full px-4 text-left"
      >
        {item.name}
      </button>
    </li>
  );
};
