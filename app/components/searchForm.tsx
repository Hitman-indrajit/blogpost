import Form from "next/form";
import React from "react";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        type="text"
        name="query"
        defaultValue={query}
        placeholder="Search..."
        className="search-input"
      />
      {query && <SearchFormReset />}
      <button type="submit" className="search-button">
        S
      </button>
    </Form>
  );
};

export default SearchForm;
