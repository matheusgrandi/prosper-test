export function LinearLoader() {
  const circleCommonClasses = 'h-1 w-1 bg-black rounded-full';
  return (
    <div className='flex'>
      <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
      <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
      <div className={`${circleCommonClasses} animate-bounce400`}></div>
    </div>
  );
}
