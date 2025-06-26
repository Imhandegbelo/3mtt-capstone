export function Loading({text}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-rose-50">
      <div className="flex justify-center items-center gap-6">
        <div className="animate-ping">
          <div className="rounded-full h-12 w-12 bg-rose-700"></div>
        </div>
        <h2 className="text-rose-500 text-2xl font-bold">{text}...</h2>
      </div>
    </div>
  );
}
