import React from 'react'
import { Link } from 'react-router-dom' // importing link tag

// Since Cards contains props that are going to be inherited by the som elements in the HomeCards we will have to import it.
import Cards from './Cards'



const HomeCards = () => {
  return (
    <section className="py-[-1px]">
      <div class="flex flex-wrap justify-center items-center max-w-[80rem] mt-12">
        <div class="m-4 flex-1 p-6 text-center text-inherit no-underline border border-[#f5a625] rounded-lg transition-colors duration-150 ease-in-out hover:text-black hover:bg-[#f5a625]">
          SIGN UP TODAY
        </div>
        <div class="m-4 flex-1 p-6 text-center text-inherit no-underline border border-[#f5a625] rounded-lg transition-colors duration-150 ease-in-out hover:text-black hover:bg-[#f5a625]">
          INVEST WITH US
        </div>
        <div class="m-4 flex-1 p-6 text-center text-inherit no-underline border border-[#f5a625] rounded-lg transition-colors duration-150 ease-in-out hover:text-black hover:bg-[#f5a625]">
          SPEAK TO AN INVESTMENT ADVISOR
        </div>
      </div>


      {/* <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg"> */}

      {/* First Card   */}
      {/* <Cards>
            <h2 className="text-2xl font-bold">For Developers</h2>
            <p className="mt-2 mb-4">
              Browse our React jobs and start your career today
            </p>
            <Link
              to="/jobs.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Jobs
            </Link>
          </Cards> */}

      {/* Second Card */}
      {/* <Cards bg='bg-indigo-100'>
            <h2 className="text-2xl font-bold">For Employers</h2>
            <p className="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>
            <Link
              to="/add-job.html"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Add Job
            </Link>
          </Cards>
        </div>
      </div> */}
    </section>
  )
}

export default HomeCards


{/* [#f5a625] - Yellow*/}

{/* [#f5a625] - Orange */}