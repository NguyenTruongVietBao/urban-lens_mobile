// // src/hooks/useUsers.ts
// import { useQuery } from "@tanstack/react-query";
// import api from "../api";

// // Hàm fetch users
// const fetchUsers = async () => {
//   const res = await api.get("/users");
//   return res.data;
// };

// // Custom hook cho màn hình dùng
// export function useUsers() {
//   return useQuery({
//     queryKey: ["users"], // key để cache
//     queryFn: fetchUsers,
//     staleTime: 1000 * 60 * 5, // cache 5 phút
//   });
// }
