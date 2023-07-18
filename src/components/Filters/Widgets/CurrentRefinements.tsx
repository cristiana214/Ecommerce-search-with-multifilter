import {
  useCurrentRefinements,
  UseCurrentRefinementsProps,
} from "react-instantsearch-hooks-web";
import { FaTimes } from "react-icons/fa";
import { ComponentProps } from "react";

export type CurrentRefinementsProps = ComponentProps<"ul"> &
  UseCurrentRefinementsProps;

const CurrentRefinements = (props: CurrentRefinementsProps) => {
  const { items, refine } = useCurrentRefinements(props);

  return (
    <ul className="mb-5 flex flex-wrap gap-3 md:mb-0 md:mr-4">
      {items.map((item) => (
        <li key={item.label} className="flex flex-wrap gap-2">
          {item.refinements.map((refinement) => (
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
                refine(refinement);
              }}
              key={refinement.label}
              className="group flex items-center justify-center gap-2 rounded-full border border-accent px-3 py-1 font-medium hover:bg-accent"
            >
              <span className="group-hover:text-skin-primary-alt text-sm text-skin-primary">
                {refinement.label}
              </span>
              <span
                onClick={(event) => {
                  event.preventDefault();
                  refine(refinement);
                }}
                className=""
              >
                <FaTimes className="group-hover:text-skin-primary-alt h-4 w-4 text-skin-primary" />
              </span>
            </button>
          ))}
        </li>
      ))}
    </ul>
  );
};
export default CurrentRefinements;
