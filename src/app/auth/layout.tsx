export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-domeo-gray-50">
      {/* Subtle background decoration - consistent across all auth pages */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-domeo-gray-200/20 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] border border-domeo-gray-200/20 rounded-full translate-x-[-50%] translate-y-[50%]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-domeo-gray-200/10 rounded-full"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 