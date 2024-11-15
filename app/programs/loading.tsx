import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <Skeleton className="h-12 w-48" />
          <Skeleton className="h-6 w-full max-w-2xl" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`${
                i % 3 === 0 ? 'md:col-span-6 md:row-span-2' :
                i % 3 === 1 ? 'md:col-span-4 md:row-span-2' :
                'md:col-span-3 md:row-span-1'
              }`}
            >
              <Skeleton className="h-full min-h-[200px] rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 