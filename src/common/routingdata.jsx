import { lazy } from 'react';

const Indexpage = lazy(() => import('../components/indexpage/indexpage'));

const X = lazy(() => import('../components/elements/x/x'));
const Facebook = lazy(() => import('../components/elements/facebook/facebook'));

const Avatar = lazy(() => import('../components/elements/listgroup/listgroup'));
const Profile = lazy(() => import('../components/pages/settings/settings'));
const DetailProfile = lazy(() => import('../components/pages/profile/profile'));
const Table = lazy(() => import('../components/tables/datatables/datatables'));



export const RouterData = [

  { path: `${import.meta.env.BASE_URL}indexpage`, element: <Indexpage /> },

  { path: `${import.meta.env.BASE_URL}twitter`, element: <X /> },
  { path: `${import.meta.env.BASE_URL}facebook`, element: <Facebook /> },
  { path: `${import.meta.env.BASE_URL}profiles`, element: <Profile /> },
  { path: `${import.meta.env.BASE_URL}instagram`, element: <Avatar /> },
  { path: `${import.meta.env.BASE_URL}table`, element: <Table /> },





];