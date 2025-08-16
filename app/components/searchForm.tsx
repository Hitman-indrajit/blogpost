import Form from "next/form";
import React from "react";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <div className="form-containe">
      <Form
        action="/"
        scroll={false}
        className="form-default flex items-center"
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
