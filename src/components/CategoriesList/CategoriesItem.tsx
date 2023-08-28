import { LiHTMLAttributes } from "react";
import { BazarekCategory } from "../../types/Categories";
import clsx from "clsx";

export interface CategoryItemProps
  extends Omit<LiHTMLAttributes<HTMLElement>, "children"> {
  item: BazarekCategory;
}

export const CategoryItem = (props: CategoryItemProps) => {
  const { className, item, ...other } = props;
  const { name, iconUrl } = item;
  return (
    <li className={clsx(className, "CategoryItem-root")} {...other}>
      <img className="mb-4" src={iconUrl} alt={name} />
      {name}
    </li>
  );
};
