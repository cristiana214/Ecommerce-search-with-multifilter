import { useEffect, useRef, useState, ComponentProps } from "react";
import { useSearchBox, UseSearchBoxProps } from "react-instantsearch-hooks-web";

import { ControlledSearchBox } from "./ControlledSearchBox";

export type SearchBoxProps = ComponentProps<"div"> & UseSearchBoxProps;

const SearchBox = (props: SearchBoxProps) => {
  const { query, refine, isSearchStalled } = useSearchBox(props);
  const [value, setValue] = useState(query);
  const inputRef = useRef(null);

  function onReset() {
    setValue("");
  }

  function onChange(event: any) {
    setValue(event.currentTarget.value);
  }

  // Track when the value coming from react state changes to synchronize
  // it with instantsearch
  useEffect(() => {
    if (query !== value) {
      refine(value);
    }
    // We dont want to track when the instantserach query changes
  }, [value, refine]);

  useEffect(() => {
    // We bypass the state update if the input is focused to avoid concurrent
    // updates when typing
    if (document.activeElement !== inputRef.current && query !== value) {
      setValue(query);
    }
  }, [query]);

  return (
    <ControlledSearchBox
      className={props.className}
      inputRef={inputRef}
      isSearchStalled={isSearchStalled}
      onChange={onChange}
      onReset={onReset}
      placeholder={props.placeholder}
      value={value}
    />
  );
};
export default SearchBox;
