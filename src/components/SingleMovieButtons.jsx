export default function Button({title, icon="", type}) {
  return (
    <button
      className={`inline-flex gap-4 border border-rose-700 rounded-lg items-center justify-center py-4 ${
        type === "primary"
          ? "bg-rose-700 text-white hover:bg-rose-600"
          : "bg-white text-rose-700 hover:bg-rose-100"
      }`}
    >
      <img src={icon} alt={icon} className="" />
      {title}
    </button>
  );
}
