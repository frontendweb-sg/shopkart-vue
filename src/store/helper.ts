export const errorHandler = (error: Error) => {
  let message = "Unknown Error";
  if (error instanceof Error) message = error.message;
  return message;
};
