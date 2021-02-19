// import TaskerView from './views/TaskerView';
import CardsView from 'views/CardsView';
import SwiperView from 'views/SwiperView';
import CommentsView from 'views/CommentsView';

// import CardsView from './views/CardsView';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/comments',
    label: 'Comments',
    exact: true,
    component: CommentsView,
  },
  {
    path: '/swiper',
    label: 'Swiper',
    exact: true,
    component: SwiperView,
  },
  // {
  //   path: '/tasker',
  //   label: 'Tasker',
  //   exact: true,
  //   component: TaskerView,
  // },
  {
    path: '/cards',
    label: 'Cards',
    exact: true,
    component: CardsView,
  },
];
