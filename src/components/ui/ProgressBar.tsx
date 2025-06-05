import React from 'react';
import { cn } from '../../lib/utils';

interface ProgressBarProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  variant?: 'default' | 'success' | 'warning' | 'error';
  className?: string;
  valueClassName?: string;
}

const sizeClasses = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
};

const variantClasses = {
  default: 'bg-blue-600',
  success: 'bg-green-600',
  warning: 'bg-amber-500',
  error: 'bg-red-600',
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  size = 'md',
  showValue = false,
  variant = 'default',
  className,
  valueClassName,
}) => {
  const percentage = Math.min(Math.max(0, (value / max) * 100), 100);

  return (
    <div className="w-full">
      <div className={cn('w-full bg-gray-200 rounded-full overflow-hidden', sizeClasses[size], className)}>
        <div
          className={cn('transition-all duration-300 ease-in-out rounded-full', variantClasses[variant])}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showValue && (
        <div className={cn('text-xs font-medium text-gray-500 mt-1', valueClassName)}>
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  );
};