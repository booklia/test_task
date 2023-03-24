import { useDispatch } from "react-redux/es/exports";
import { search } from "../redux/searchParamsSlice";
import {useNavigate} from 'react-router-dom'
const SearchBarComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <aside className="app-header">
      <h1 className="main-heading">Search for books</h1>
      <form
        className="form-header"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const obj = {
            q: formData.get("book-name")?.toString() ?? "",
            subject: formData.get("book-categories")?.toString() ?? "",
            orderBy: formData.get("book-sorting")?.toString() ?? "",
            startIndex: 0
          };
          dispatch(search(obj));
          navigate('/');
        }}
      >
        <label className="form-header-search" htmlFor="book-name">
          <input className="search-bar" type="text" id="book-name" name="book-name" />
          <button className="search-button" type="submit">search</button>
        </label>
        <div className="form-selects">
          <label className="form-header-select" htmlFor="book-categories">
            <h2 className="main-subheading">Categories:</h2>
            <select className="select-element" name="book-categories" id="book-categories">
              <option value="all">all</option>
              <option value="art">art</option>
              <option value="biography">biography</option>
              <option value="computers">computers</option>
              <option value="medical">medical</option>
              <option value="poetry">poetry</option>
            </select>
          </label>
          <label className="form-header-select" htmlFor="book-sorting">
            <h2 className="main-subheading">Sorting by:</h2>
            <select className="select-element" name="book-sorting" id="book-sorting">
              <option value="relevance">relevance</option>
              <option value="newest">newest</option>
            </select>
          </label>
        </div>
      </form>
    </aside>
  );
};

export default SearchBarComponent;
