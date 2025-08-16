import Form from "next/form";
import React from "react";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <div className="flex items-center justify-center">
      <Form
        action="/"
        scroll={false}
        className="form-default flex items-center gap-2"
      >
        <input
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search..."
          className="form-input"
        />
        {query && <SearchFormReset />}
        <button type="submit" className="form-submit">
          S
        </button>
      </Form>
    </div>
  );
};

export default SearchForm;
