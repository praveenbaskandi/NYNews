import {toastError} from '../UI/Toast';

export const extractError = error => {
  return error.error.message;
};

export const errorHandler = ({
  onFailure,
  error,
  errors,
  dispatch,
  subTitleMessage,
}) => {
  const errorMessage = extractError(error) || errors.errorBackend;

  if (subTitleMessage) {
    toastError(errorMessage, subTitleMessage);
  } else {
    toastError(errorMessage);
  }

  dispatch(onFailure(errorMessage));
};

export const submitFormHandler = ({
  onFailure,
  error,
  errorTranslations,
  dispatch,
}) => {
  const errorSubTitle = error?.error?.errors?.reduce(
    (accum, elem) => `${accum}${elem.path}`,
    errorTranslations.checkOutFields,
  );

  errorHandler({
    onFailure,
    error,
    errors: errorTranslations,
    dispatch,
    subTitleMessage: errorSubTitle,
    withSubmissionError: true,
  });
};
