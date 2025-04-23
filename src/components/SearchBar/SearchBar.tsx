import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  onSubmit: (value: string) => void;
};

export default function SearchBar({ onSubmit }: Props) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const input = form.elements.namedItem("search");
    let value = "";

    if (input instanceof HTMLInputElement) {
      value = input.value.trim();
    }

    if (!value) {
      toast.error("You must enter text to search for images");
      return;
    }
    onSubmit(value);
    form.reset();
  };

  return (
    <header>
      <form className={css.formField} onSubmit={handleSubmit}>
        <input
          className={css.input}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
}
