import clsx from "clsx";
import { HtmlHTMLAttributes } from "react";
import { Loader } from "./Loader";

export interface ContentProps extends HtmlHTMLAttributes<HTMLElement> {
  loading?: boolean;
}

export const Content = (props: ContentProps) => {
  const { className, loading, children, ...other } = props;
  return (
    <div
      className={clsx(className, "relative mt-16 max-w-[864px] w-full m-auto")}
      {...other}
    >
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full z-10 backdrop-opacity-40 bg-[#f6f5f1]/75">
          <Loader className="absolute top-[10%] left-[50%]" />
        </div>
      )}
      {children}
    </div>
  );
};
