// // src/hooks/useLogin.ts
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import api from "../api";
// import { useUserStore } from "../store/useUserStore";

// const loginApi = async (payload: { email: string; password: string }) => {
//   const res = await api.post("/auth/login", payload);
//   return res.data; // giả sử { token, user }
// };

// export function useLogin() {
//   const login = useUserStore((state) => state.login);
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: loginApi,
//     onSuccess: (data) => {
//       // Lưu token + user vào Zustand
//       login(data.user, data.token);

//       // invalidate query userProfile nếu có
//       queryClient.invalidateQueries({ queryKey: ["userProfile"] });
//     },
//     onError: (error: any) => {
//       console.error("Login failed:", error.response?.data || error.message);
//     },
//   });
// }
