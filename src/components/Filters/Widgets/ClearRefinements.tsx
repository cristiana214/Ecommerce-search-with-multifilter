import { ComponentProps } from "react";
import {
  useClearRefinements,
  UseClearRefinementsProps,
} from "react-instantsearch-hooks-web";

import { Button } from "../../UI/Button";

export type ClearRefinementsProps = ComponentProps<"button"> &
  UseClearRefinementsProps;

const ClearRefinements = (props: ClearRefinementsProps) => {
  const { canRefine, refine } = useClearRefinements(props);

  return canRefine ? (
    <div className="my-6 px-4">
      <Button className="w-full" onClick={() => refine()}>
        Clear Filters
      </Button>
    </div>
  ) : null;
};
export default ClearRefinements;
