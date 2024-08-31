import { type PropsWithChildren } from 'react';

import './styles.scss';

export const Section = ({ children }: PropsWithChildren) => {
  return <section className="container">{children}</section>;
};
