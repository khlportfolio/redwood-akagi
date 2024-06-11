import { cn } from "../../utils/cn";

export const BentoGrid = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 w-full mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  header,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none bg-transparent border border-transparent justify-between flex flex-col space-y-4 overflow-hidden",
        className
      )}
    >
      <img src={header} alt="" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover" />   
    </div>
  );
};