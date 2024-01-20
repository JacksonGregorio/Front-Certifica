"use client"
import React from 'react';
import Image from 'next/image';
import  Link  from 'next/link';

export default function LoginSignForm(){
    return (
      <div class="flex h-100">
        <div class="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
          <div class="max-w-md text-center">
           <Image src="/next.svg" width={500} height={500}/>
          </div>
        </div>
        <div class="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
          <div class="max-w-md w-full p-6">
            <h1 class="text-3xl font-semibold mb-6 text-black text-center">Sign Up</h1>
            <h1 class="text-sm font-semibold mb-6 text-gray-500 text-center">Join to Our Community with all time access and free </h1>
            <form action="#" method="POST" class="space-y-4">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="text" id="email" name="email" class="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"></input>
              </div>
              <div>
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" name="password" class="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"></input>
              </div>
              <div>
              <Link href="/userview">
                <button type="submit" class="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">
                Sign Up
                </button>
              </Link>
              </div>
            </form>
            <div class="mt-4 text-sm text-gray-600 text-center">
              <p>Already dontn have an account? <a href="#" class="text-black hover:underline">Create here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};