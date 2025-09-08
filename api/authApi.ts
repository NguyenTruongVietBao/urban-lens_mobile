import apiClient from '@/lib/api';

export const loginApi = async (data: any) => {
  const res = await apiClient.post('/auth/login', data);
  return res.data;
};

export const registerApi = async (data: any) => {
  const res = await apiClient.post('/auth/register', data);
  return res.data;
};
