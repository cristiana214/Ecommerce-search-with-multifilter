/* eslint-disable jsx-a11y/label-has-associated-control */
import { ComponentProps } from "react";
import {
  useToggleRefinement,
  UseToggleRefinementProps,
} from "react-instantsearch-hooks-web";

export type ToggleRefinementProps = ComponentProps<"div"> &
  UseToggleRefinementProps;

export const ToggleRefinement = (props: ToggleRefinementProps) => {
  const { refine, value } = useToggleRefinement(props);

  return (
    <div className="">
      <label>
        <input
          className=""
          type="checkbox"
          checked={value.isRefined}
          onChange={(event) => refine({ isRefined: !event.target.checked })}
        />
        <span className="">{value.name}</span>
      </label>
    </div>
  );
};
