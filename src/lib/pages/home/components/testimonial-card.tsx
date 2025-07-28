import Image from 'next/image';
import React from 'react';

export interface TestimonialCardProps {
  name: string;
  description: string;
  profileAlt: string;
  profileSrc: string;
  channel: string;
}

export function TestimonialCard({ name, description, profileAlt, profileSrc, channel }: TestimonialCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-lg border border-gray-800 bg-gray-900 p-6">
      <div className="space-y-4">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 fill-yellow-500 text-yellow-500"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <Image
          src={profileSrc}
          width={40}
          height={40}
          alt={profileAlt}
          className="rounded-full w-10 h-10 object-cover"
          loading="lazy"
        />
        <div>
          <p className="font-medium text-white">{name}</p>
          <p className="text-sm text-gray-400">{channel}</p>
        </div>
      </div>
    </div>
  );
} 