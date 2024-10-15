import { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => {
  return <div className="px-24 mobile:px-6">{children}</div>;
};

export default Container;
