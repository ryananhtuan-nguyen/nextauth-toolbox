import React, { PropsWithChildren } from 'react';

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full flex items-center justify-center bg-pink-200 bg-gradient-to-r from-indigo-500 to-indigo-100">
      {children}
    </div>
  );
};

export default AuthLayout;
