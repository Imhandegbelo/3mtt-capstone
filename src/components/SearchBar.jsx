export function SearchBar({ searchQuery, onSearchQueryChange }) {
  return (
    <>
      <input
        type="text"
        placeholder="What do you want to watch?"
        className=" min-w-[240px] w-[60%] max-w-[500px] md:w-[60%] py-1.5 px-2.5 rounded-md border-2 border-gray-300 justify-between items-center gap-2.5 inline-flex bg-transparent caret-white placeholder-white text-white text-base font-normal leading-normal focus:outline-0"
        value={searchQuery}
        onChange={onSearchQueryChange}
      />
    </>
  );
}
