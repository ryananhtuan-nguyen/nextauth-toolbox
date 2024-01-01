import React, { PropsWithChildren } from 'react';

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full flex items-center justify-center bg-pink-200">
      {children}
    </div>
  );
};

export default AuthLayout;
