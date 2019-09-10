import { createStore } from 'redux';
import { SidebarReducer } from './reducers/sidebarReducer';

export const store = createStore(SidebarReducer);