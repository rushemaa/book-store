export default function NewBook() {
  return (
    <section>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="add-book">
        <input className="ititle-input" placeholder="Book title" required="" />
        <select className="cat-input">
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button className="btn-add-book" type="submit">
          ADD BOOK
        </button>
      </form>
    </section>
  );
}
