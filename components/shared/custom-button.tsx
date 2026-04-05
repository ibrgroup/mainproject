import Link from 'next/link';
import React from 'react';

interface CustomButtonProps {
    href: string; 
    title: string; 
    className?: string; 
}

const CustomButton: React.FC<CustomButtonProps> = ({ href, title, className }) => {
    const baseClass = "rounded-2xl bg-tiffany px-8 py-5 text-sm font-bold text-white active:bg-[#5dc9c5da] shadow-sm hover:bg-[#57cfcbef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

    return (
        <Link href={href} className={`${baseClass} ${className}`}>
            {title}
        </Link>
    );
};

export default CustomButton;