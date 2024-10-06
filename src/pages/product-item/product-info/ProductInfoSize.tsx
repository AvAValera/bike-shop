

export default function ProductInfoSize() {
  return (
    <div className="mb-2">
      <span className="text-gray-500@">Size</span>
      <div className='flex gap-2 items-center'>
        <button className="w-20 h-10 border-[3px] border-purple@ rounded text-black@ font-medium hover:bg-purple@ hover:text-white@ duration-300">52cm</button>
        <button className="w-20 h-10 border border-purple@ rounded text-black@ font-medium hover:bg-purple@ hover:text-white@ duration-300">54cm</button>
        <button className="w-20 h-10 border border-purple@ rounded text-black@ font-medium hover:bg-purple@ hover:text-white@ duration-300">56cm</button>
        <button className="w-20 h-10 border border-purple@ rounded text-black@ font-medium hover:bg-purple@ hover:text-white@ duration-300">59cm</button>
      </div>
    </div>
  );
}
