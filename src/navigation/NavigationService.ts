import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/core';

export const navigationRef = React.createRef<NavigationContainerRef>();

export interface NavigationParams {
  [key: string]: any;
}

const navigate = (routeName: any, params?: NavigationParams) => {
  navigationRef.current?.navigate(routeName, params);
};

const pop = () => {
  navigationRef.current?.goBack();
};

export default {
  navigate,
  pop,
};
