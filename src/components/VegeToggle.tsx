import { ChangeEventHandler } from "react";

export interface VegeToggleProps {
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const VegeToggle = (props: VegeToggleProps) => {
  const { checked, onChange } = props;
  return (
    <label className="Toggle-root">
      <input
        id="isVege"
        name="isVege"
        className="Toggle-checkbox"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <div className="Toggle-switch"></div>
      <span className="Toggle-label">Vege only</span>
    </label>
  );
};
