import {
  useLocation,
  useNavigate,
  useParams,
  useMatch,
} from 'react-router-dom';

const useRouter = () => {
  const navigate = useNavigate;
  const location = useLocation();
  const params = useParams();
  const routeMatch = useMatch;
  return { history: { push: navigate }, location, params, routeMatch };
};

export default useRouter;
