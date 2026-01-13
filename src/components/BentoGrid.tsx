import { cn } from "@/lib/utils";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // We use auto-rows so items stretch nicely
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoItem = ({
  className,
  title,
  description,
  header,
  icon,
  href,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
}) => {
  const CardContent = () => (
    <div
      className={cn(
        // Base styles for the card
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 bg-slate-900 border border-white/[0.1] justify-between flex flex-col space-y-4 h-full",
        className
      )}
    >
      {header}
      <div className='group-hover/bento:translate-x-2 transition duration-200'>
        {icon}
        <div className='font-sans font-bold text-neutral-200 mb-2 mt-2'>
          {title}
        </div>
        <div className='font-sans font-normal text-neutral-300 text-xs'>
          {description}
        </div>
      </div>
    </div>
  );

  return href ? (
    <Link
      href={href}
      className={cn(
        "block h-full",
        className?.includes("col-span") ? className : ""
      )}
    >
      <CardContent />
    </Link>
  ) : (
    <CardContent />
  );
};
