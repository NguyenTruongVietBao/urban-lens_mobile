// src/hooks/useLogin.ts
import { loginApi } from '@/api/authApi';
import { useAuthStore } from '@/stores/useAuthStore';
import { useMutation } from '@tanstack/react-query';

export function useLoginMutation() {
  const { login } = useAuthStore();

  return useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      login(data.data.user, data.data.accessToken);
    },
    onError: (error: any) => {
      console.error('Login failed:', error.response?.data || error.message);
    },
  });
}
