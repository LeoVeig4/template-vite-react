import studentRoutes from '@/routes/roles/student';
import publicRoutes from '@/routes/roles/public';
export const routes = [...studentRoutes, ...publicRoutes];