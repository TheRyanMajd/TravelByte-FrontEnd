import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from 'next/image'; // Import if using Next.js's Image component
import Link from 'next/link'; // Import if using Next.js's Link component
import React from 'react';


function Card({className, user, job, inital, desc}: {className: string, user: string, job: string, inital: string, desc: string}) {
  return ( //relative overflow-hidden rounded-lg group anim-border p-1 m-1 max-w-xs max-h-48 text-sm
    <div className={className}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>{inital}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">{user}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{job}</p>
                      </div>
                    </div>
                    <p className="text-gray-500 dark:text-black">
                      &ldquo;{desc}&rdquo;
                    </p>
                  </div>
              
              </div>
    
  );
}

export default Card;
