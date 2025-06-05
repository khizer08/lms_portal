import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({ className, children, noPadding = false }) => {
  return (
    <div
      className={cn(
        'bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden',
        !noPadding && 'p-6',
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return <div className={cn('flex flex-col space-y-1.5 mb-4', className)}>{children}</div>;
};

export const CardTitle: React.FC<{
  className?: string;
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
}> = ({ className, children, as: Component = 'h3' }) => {
  const classes = cn('font-semibold leading-none tracking-tight', className);
  
  switch (Component) {
    case 'h1':
      return <h1 className={cn('text-2xl', classes)}>{children}</h1>;
    case 'h2':
      return <h2 className={cn('text-xl', classes)}>{children}</h2>;
    case 'h3':
      return <h3 className={cn('text-lg', classes)}>{children}</h3>;
    case 'h4':
      return <h4 className={cn('text-base', classes)}>{children}</h4>;
    default:
      return <h3 className={cn('text-lg', classes)}>{children}</h3>;
  }
};

export const CardDescription: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return <p className={cn('text-sm text-gray-500', className)}>{children}</p>;
};

export const CardContent: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return <div className={cn('', className)}>{children}</div>;
};

export const CardFooter: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return <div className={cn('flex items-center mt-4 pt-4 border-t', className)}>{children}</div>;
};