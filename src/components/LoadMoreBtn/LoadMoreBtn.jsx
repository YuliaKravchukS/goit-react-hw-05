import css from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onClickButton }) => {
  return (
    <div className={css.container}>
      <button type="button" onClick={onClickButton} className={css.btnLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
