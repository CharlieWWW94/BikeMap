export default function FormFooter() {
  return (
    <footer className="card-footer">
      <form class="card-footer-item is-flex is-flex-direction-column">
        <textarea
          type="text"
          className="input text is-fullwidth"
          placeholder="Please add any relevant information..."
        ></textarea>
        <input
          type="submit"
          className="button is-primary is-fullwidth mt-2"
          value="Send to Owner"
        ></input>
      </form>
    </footer>
  );
}
