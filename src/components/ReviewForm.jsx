import { useState } from "react";
import Rating from "./Rating";

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
        <p className="text-sm text-gray-500">
          Your review will be visible to other users.
        </p>
        <div className="space-y-1">
          <Rating onRate={setRating} />
        </div>
      <div className="space-y-1">
        <label htmlFor="review">Comment</label>
        <textarea
          id="review"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-700"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>
      <button
        disabled={!comment || comment.length < 10}
        className="px-6 bg-rose-700 text-white py-2 rounded-lg mt-4 hover:bg-rose-800 transition disabled:bg-gray-300"
        type="submit"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
