"use client";

import Link from "next/link";

const SearchFormReset = () => {
  const reset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const form = e.currentTarget.form;
    if (form) {
      form.reset();
    }
  };

  return (
    <div className="search-icon">
      <button type="reset" className="search-reset-button" onClick={reset}>
        <Link href="/">
          <span className="reset-icon">X</span> {/* Reset Icon */}
        </Link>
      </button>
    </div>
  );
};

export default SearchFormReset;
