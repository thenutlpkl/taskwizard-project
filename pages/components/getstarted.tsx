import Image from 'next/image'
import React from 'react';

const GetStarted = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center sm:text-4xl">
          Ready to get started?
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 rounded-full bg-indigo-50">
              <Image src="/icon-1.svg" alt="Icon 1" width={48} height={48} />
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-900">Easy to Use</h3>
            <div className="mt-2 text-gray-600">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper
                felis at tristique commodo. Fusce fringilla orci quis aliquam venenatis.
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="mx-auto h-12 w-12 rounded-full bg-indigo-50">
              <Image src="/icon-2.svg" alt="Icon 2" width={48} height={48} />
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-900">Fast Performance</h3>
            <div className="mt-2 text-gray-600">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper
                felis at tristique commodo. Fusce fringilla orci quis aliquam venenatis.
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="mx-auto h-12 w-12 rounded-full bg-indigo-50">
              <Image src="/icon-3.svg" alt="Icon 3" width={48} height={48} />
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-900">24/7 Support</h3>
            <div className="mt-2 text-gray-600">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper
                felis at tristique commodo. Fusce fringilla orci quis aliquam venenatis.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <p className="text-base font-medium text-gray-500">
            Hear that? The sweet sigh of relief. Start getting more done.
          </p>
          <a href="#" className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Sign up
          </a>
        </div>
      </div>
    </section>
  )
}

export default GetStarted;
