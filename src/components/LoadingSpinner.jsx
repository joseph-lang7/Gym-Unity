const LoadingSpinner = () => {
  return (
    <div className="flex justify-center w-screen items-center h-screen">
      <span className="animate-spin h-10 w-10 border-t-4 border-red-700 rounded-full"></span>
    </div>
  );
};

export default LoadingSpinner;
