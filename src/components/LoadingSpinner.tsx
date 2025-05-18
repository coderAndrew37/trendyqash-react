const LoadingSpinner = () => {
  return (
    <div className="h-[70vh] flex flex-col items-center justify-center text-center gap-4">
      {/* Optional logo */}
      <img
        src="/images/trendyqash-logo.png"
        alt="TrendyQash"
        className="w-16 h-16 animate-bounce"
      />

      <div className="w-12 h-12 border-4 border-secondary border-t-primary rounded-full animate-spin" />

      <p className="text-secondary text-lg font-medium">
        Loading, please wait...
      </p>
    </div>
  );
};

export default LoadingSpinner;
