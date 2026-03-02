import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  withRail?: boolean;
};

export function Container({ children, className = '', withRail = false }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 ${className}`}>
      {withRail ? (
        <div className="relative pl-6 md:pl-8">
          <span aria-hidden className="absolute inset-y-0 left-0 w-[2px] bg-rail" />
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
}
