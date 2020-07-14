import {
  useLocation,
  useHistory,
  useParams,
  useRouteMatch,
} from 'react-router-dom';

const useRouter = () => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const routeMatch = useRouteMatch;
  return { history, location, params, routeMatch };
};

export default useRouter;
