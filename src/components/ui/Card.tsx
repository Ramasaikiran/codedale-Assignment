import React from 'react';
import { cn } from '@/utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = true, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'bg-white rounded-xl border border-neutral-100 shadow-card overflow-hidden',
                    hoverEffect && 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';
