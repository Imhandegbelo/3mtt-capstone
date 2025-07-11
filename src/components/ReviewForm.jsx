const ReviewForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment || comment.length < 10) {
      toast.error("Please fill in all fields.");
      return;
    }

    onSubmit({ name, rating, comment });
    setName("");
    setRating(5);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Leave a Review</h2>
      <label>
        Name:
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Rating:
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </label>
      <label>
        Comment:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
