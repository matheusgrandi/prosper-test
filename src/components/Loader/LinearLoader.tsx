export function LinearLoader() {
  const circleCommonClasses = 'h-1.5 w-1.5 bg-violet-900 rounded-full';
  return (
    <div className='flex'>
      <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
      <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
      <div className={`${circleCommonClasses} animate-bounce400`}></div>
    </div>
  );
}
