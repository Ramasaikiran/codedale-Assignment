import React from 'react';
import { cn } from '@/utils/cn';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    icon?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', icon = false, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
                    {
                        'bg-neutral-800 text-white hover:bg-neutral-900 hover:shadow-lg hover:-translate-y-0.5': variant === 'primary',
                        'bg-white text-neutral-800 border border-neutral-200 hover:border-neutral-300 hover:shadow-md': variant === 'secondary',
                        'bg-transparent border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:border-neutral-300': variant === 'outline',
                        'bg-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100': variant === 'ghost',
                        'px-4 py-2 text-sm': size === 'sm',
                        'px-6 py-3 text-base': size === 'md',
                        'px-8 py-4 text-lg': size === 'lg',
                    },
                    className
                )}
                {...props}
            >
                {children}
                {icon && <ArrowUpRight className="ml-2 h-4 w-4" />}
            </button>
        );
    }
);

Button.displayName = 'Button';
