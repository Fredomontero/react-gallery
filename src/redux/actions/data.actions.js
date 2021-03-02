import * as type from '../types/data.types';

export const requestData = () => ({
  type: type.LOAD_DATA_REQUEST
});

export const requestDataSuccess = data => ({
  type: type.LOAD_DATA_SUCCESS,
  payload: data
});

export const requestDataError = error => ({
  type: type.LOAD_DATA_ERROR,
  payload: error
});

export const updatePageNumber = (pageNumber) => ({
  type: type.UPDATE_PAGE_NUMBER,
  payload: pageNumber
});