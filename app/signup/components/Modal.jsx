import React, { useState } from 'react';
import Link from "next/link"
const Modal = ({ isOpen, onClose ,user}) => {
  return (
    <>
    {isOpen && (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="fixed inset-0 dark:bg-black bg-white transition-opacity" aria-hidden="true"></div>
  
          <div className=" rounded-lg overflow-hidden shadow-xl  transform transition-all sm:max-w-lg sm:w-full">
           <h3 className="text-4xl py-4 leading-6 font-medium text-gray-900 dark:text-white mb-4">Join as :</h3>
            <fieldset>
              <legend className="sr-only">YTHub Services</legend>
  
              <div className="space-y-2">
                <label
                  htmlFor="Option1"
                  className="flex cursor-pointer items-start gap-4 rounded-lg border border-default-200 p-4 transition hover:bg-white/15 has-[:checked]:bg-purple-500/10"
                >
                  <div className="flex items-center">
                    &#8203;
                    <input type="radio" value='promoter' className="size-4 rounded accent-purple-500" id="Option1" name="option" />
                  </div>
  
                  <div>
                    <strong className="font-medium ">As a Youtube Channel Promoter</strong>
                  </div>
                </label>
  
                <label
                  htmlFor="Option2"
                  className="flex cursor-pointer items-start gap-4 rounded-lg border border-default-200 p-4 transition hover:bg-white/15 has-[:checked]:bg-purple-500/10"
                >
                  <div className="flex items-center">
                    &#8203;
                    <input type="radio" value='earn' className="size-4 rounded border-default-300/5 accent-purple-500" id="Option2" name="option" />
                  </div>
  
                  <div>
                    <strong className="font-medium ">Earn By Watching Videos</strong>
                </div>
                </label>
  
                <label
                  htmlFor="Option3"
                  className="flex cursor-pointer items-start gap-4 rounded-lg border border-default-200 p-4 transition hover:bg-white/15 has-[:checked]:bg-purple-500/10"
                >
                  <div className="flex items-center">
                    &#8203;
                    <input type="radio" value="promter&earn" className="size-4 rounded border-default-300/5 accent-purple-500" id="Option3" name="option" />
                  </div>
  
                  <div>
                    <strong className="text-pretty font-medium ">Both - Youtube Channel Promoter and Earn </strong>
                </div>
                </label>
              </div>
            </fieldset>
            <Link href="/profile/promoter" className="py-6 sm:flex sm:flex-row-reverse px-1">
              <button
                type="button"
                onClick={
                  () => {
                    user.type = document.querySelector('input[name="option"]:checked').value;
                    console.log(user);
                  }
                }
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    )}
  </>
  
  );
};

export default Modal;
