import { ChangeEvent, ComponentProps, FormEvent, RefObject } from "react";

export type ControlledSearchBoxProps = ComponentProps<"div"> & {
  inputRef: RefObject<HTMLInputElement>;
  issearchstalled: boolean;
  onChange: (event: ChangeEvent) => void;
  onReset: (event: FormEvent) => void;
  onSubmit?: (event: FormEvent) => void;
  placeholder?: string;
  value: string;
};

export const ControlledSearchBox = ({
  inputRef,
  onChange,
  onReset,
  onSubmit,
  placeholder,
  value,
  ...props
}: ControlledSearchBoxProps) => {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    event.stopPropagation();

    if (onSubmit) {
      onSubmit(event);
    }

    if (inputRef.current) {
      inputRef.current.blur();
    }
  }

  function handleReset(event: FormEvent) {
    event.preventDefault();
    event.stopPropagation();

    onReset(event);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div className="" {...props}>
      <form
        action=""
        className=""
        noValidate
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <input
          ref={inputRef}
          className="focus:border-skin-accent relative m-0 block w-full min-w-0 flex-auto rounded-md border border-skin-border bg-transparent bg-clip-padding px-3 py-1.5 text-sm font-normal text-skin-primary transition ease-in-out focus:outline-none"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          placeholder={placeholder}
          spellCheck={false}
          type="search"
          value={value}
          onChange={onChange}
        />
      </form>
    </div>
  );
};
