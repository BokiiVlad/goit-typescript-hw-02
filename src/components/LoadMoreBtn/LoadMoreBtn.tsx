import css from "./LoadMoreBtn.module.css";

type Props = {
  pageUp: () => void;
};

export default function LoadMoreBtn({ pageUp }: Props) {
  return (
    <button className={css.moreBtn} onClick={pageUp} type="button">
      Load more
    </button>
  );
}
