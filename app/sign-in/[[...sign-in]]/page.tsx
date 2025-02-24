import { SignIn, SignUp } from '@clerk/nextjs';
import React from 'react';

const Page = () => {
  return (
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
            <SignIn />
            </div>
    
          </div>
       
      </div>
  );
}

export default Page;
