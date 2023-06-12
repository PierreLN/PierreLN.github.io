const useTimeAndDate = () => {
    const now = new Date();
    const options = {
      timeZone: "America/Montreal",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
     
    return now.toLocaleString("en-US", options);
  }

  export default useTimeAndDate;