import { lazy } from 'react';

const Indexpage = lazy(() => import('../components/indexpage/indexpage'));

const Tabs = lazy(() => import('../components/elements/tabs/tabs'));


export const RouterData = [

  { path: `${import.meta.env.BASE_URL}indexpage`, element: <Indexpage /> },

  { path: `${import.meta.env.BASE_URL}twitter`, element: <Tabs /> },
];