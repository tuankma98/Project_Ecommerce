import { useAppSelector } from '@/store/hook';
import { userDataSelector } from '@/store/userSlice';

const useCurrentOrganizationRole = () => {
  const data = useAppSelector(userDataSelector);
  return data?.role === 'admin' || data?.role === 'teacher';
};

export default useCurrentOrganizationRole;
