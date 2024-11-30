function Loading() {
  const isLoading = false;

  return (
    isLoading && (
      <div className="page-loading">
        <h2>Loading...</h2>
      </div>
    )
  );
}

export default Loading;
