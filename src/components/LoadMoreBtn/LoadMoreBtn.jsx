import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ pageUp }) {
  return (
    <button className={css.moreBtn} onClick={pageUp} type="button">
      Load more
    </button>
  );
}
