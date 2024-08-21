"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Breadcrumb = () => {
const [mounted, setMounted] = useState(false);
const pathname = usePathname(); // Get the current path using usePathname

useEffect(() => {
setMounted(true); // Ensure the component is mounted on the client side
}, []);

if (!mounted || !pathname) {
return null;
}

// Split the path into an array of segments
const pathArray = pathname.split('/').filter((path) => path);

// Map specific paths to display names
const pathNames = {

'666fc98dd8e9995494722989': 'Battery Energy Storage System',
'666fca0ed8e999549472298a': 'HF-H Series Inverter',
'667574e89aa0a0e3bc8ac422': 'Solar Panels',

// Add other specific path mappings here

// Add other specific path mappings here
};

return (
<div className="container mx-auto px-2">
  <div className="flex justify-start items-center py-5">
    {/* Home link */}
    <Link href="/">
    <span className="text-[18px] text-green hover:text-gray-800">
      Home
    </span>
    </Link>

    {/* Separator after Home */}
    {pathArray.length > 0 && (
    <span className="text-[18px]  text-gray-600 px-3">
      ❯
    </span>
    )}

    {/* Dynamic breadcrumb links */}
    {pathArray.map((path, index) => {
    const href = `/${pathArray.slice(0, index + 1).join('/')}`;
    const isLast = index === pathArray.length - 1;

    // Determine display name from the pathNames map or use the default path
    const displayName = pathNames[path] || path.charAt(0).toUpperCase() + path.slice(1);

    return (
    <div key={index} className="flex items-center">
      <Link href={href}>
      <span className={`text-[18px] ${ isLast ? 'text-gray-900' : 'text-green hover:text-gray-800' }`}>
        {displayName}
      </span>
      </Link>
      {!isLast && (
      <span className="text-[18px]  text-gray-600 px-3">
        <span>&#10095;</span>
      </span>
      )}
    </div>
    );
    })}
  </div>
</div>
);
};

export default Breadcrumb;