import axiosClient from '../utils/axios';

export const postData = async (endpoint, formData, params, headers) => {
  try {
    const response = await axiosClient.post(`/${endpoint}`, formData, {
      headers,
      params,
    });
    return {
      // status: HTTP_STATUS.SUCCESS,
      data: response.data,
    };
  } catch (error) {
    return {
      // NOTE: HTTPエラーの場合
      // status: error?.response?.status || HTTP_STATUS.FORBIDDEN,
      data: error?.response?.data,
      // headers: error?.response?.headers || { server: WAF_HEADER },
    };
  }
};

export const getData = async (endpoint, params, headers) => {
  try {
    const response = await axiosClient.get(`/${endpoint}`, { params, headers });

    return {
      // status: response.status,
      data: response.data,
    };
  } catch (error) {
    return {
      // status: error.response.status,
      data: error.response.data,
    };
  }
};

export const patchData = async (
  endpoint,
  id,
  formData,
  endpointSuffix,
  headers,
) => {
  try {
    const response = await axiosClient.patch(
      `/${endpoint}/${id}${endpointSuffix ? `/${endpointSuffix}` : ''}`,
      formData,
      { headers },
    );

    return {
      // status: response.status,
      data: response.data,
    };
  } catch (error) {
    console.log(error);
    return {
      // status: error.response.status,
      data: error.response.data,
    };
  }
};

export const deleteData = async (endpoint, id, config) => {
  try {
    const response = await axiosClient.delete(`/${endpoint}/${id}`, config);
    return {
      // status: HTTP_STATUS.SUCCESS,
      data: response.data,
    };
  } catch (error) {
    return {
      // NOTE: HTTPエラーの場合
      // status: error.response.status,
      data: error.response.data,
    };
  }
};
