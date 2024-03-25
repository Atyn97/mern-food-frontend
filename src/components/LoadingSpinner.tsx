const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12 gap-4">
      <div
        className="text-green-500 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
      <span>Please wait...</span>
    </div>
  );
};

export default LoadingSpinner;
