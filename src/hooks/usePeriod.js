const usePeriod = (timeframe, data) => {
  switch (timeframe) {
    case "daily":
      return {
        current: `${data.current}hrs`,
        previous: `Yesterday-${data.previous}hrs`
      };
    case "weekly":
      return {
        current: `${data.current}hrs`,
        previous: `Last Week-${data.previous}hrs`
      };
    case "monthly":
      return {
        current: `${data.current}hrs`,
        previous: `Last Month-${data.previous}hrs`
      };
    default:
      return;
  }
};

export default usePeriod;
