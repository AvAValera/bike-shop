export default function ProductInfoColor() {
  return (
    <div className="mb-2">
      <span className='text-gray-500@'>Color</span>
      <div className='flex items-center gap-2'>
        <div className='w-5 h-5 bg-green-500 rounded-full'></div>
        <div className='w-5 h-5 bg-red-500 rounded-full'></div>
        <div className='w-5 h-5 bg-blue-500 rounded-full'></div>
      </div>
    </div>
  );
}
