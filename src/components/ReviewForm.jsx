import { useState } from "react";

const ReviewForm = () => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof comment === "string" && (!comment || comment.length < 10)) {
      toast.error("Please write review.");
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
      <div className="space-y-1">
        <p className="text-sm text-gray-500">
          Your review will be visible to other users.
        </p>
        <label htmlFor="review">Comment</label>
        <textarea
          id="review"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-700"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>
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
