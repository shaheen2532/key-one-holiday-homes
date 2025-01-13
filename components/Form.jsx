import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import newLead from '@/app/actions/LeadsAction';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Alert = withReactContent(Swal);

const fireAlert = () => {
  Alert.fire({
    title: "Request submitted",
    text: "Our team will contact you as sson as possble",
    timer: 2000
});
}

const Example = () => {
  return (
    <form action={newLead}>
      <div className="space-y-12">

        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="family-name"
                  className="block w-full h-11 h-11 rounded-lg bg-zinc-100 px-3 py-1.5 text-base text-gray-900 placeholder:text-stone-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="block w-full h-11 rounded-lg bg-zinc-100 px-3 py-1.5 text-base text-gray-900 placeholder:text-stone-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="number" className="block text-sm/6 font-medium text-gray-900">
              </label>
              <div className="mt-2">
                <input
                  id="number"
                  name="number"
                  type="text"
                  placeholder="Phone Number"
                  autoComplete="Phone Number"
                  className="block w-full h-11 rounded-lg bg-zinc-100 px-3 py-1.5 text-base text-gray-900 placeholder:text-stone-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="location" className="block text-sm/6 font-medium text-gray-900">
              </label>
              <div>
                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="Location"
                  autoComplete="Location"
                  className="block w-full h-11 rounded-lg bg-zinc-100 px-3 py-1.5 text-base text-stone-500 placeholder:text-stone-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="property_type" className="block text-sm/6 font-medium text-gray-900">
              </label>
              <div className=" grid grid-cols-1">
                <select
                  id="property_type"
                  name="property_type"
                  autoComplete="property_type"
                  placeholder="Residential"
                  className="col-start-1 row-start-1 w-full h-11 appearance-none rounded-lg bg-zinc-100 py-1.5 pl-3 pr-8 text-base text-stone-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option>Residential</option>
                  <option>Commercial</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="bedrooms" className="block text-sm/6 font-medium text-gray-900">
              </label>
              <div className=" grid grid-cols-1">
                <select
                  id="bedrooms"
                  name="bedrooms"
                  placeholder="Number of bedrooms"
                  autoComplete="Number of Bedrooms"
                  className="col-start-1 row-start-1 w-full h-11 appearance-none rounded-lg bg-zinc-100 py-1.5 pl-3 pr-8 text-base text-stone-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option>Number of bedrooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="message" className="block text-sm/6 font-medium text-gray-900">
              </label>
              <div>
                <input
                  id="message"
                  name="message"
                  type="text"
                  placeholder="Message"
                  autoComplete="message"
                  className="block w-full h-11 rounded-lg bg-zinc-100 px-3 py-1.5 text-base text-gray-900 placeholder:text-stone-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
                <button onClick={fireAlert()}
                    className=" w-full h-11 rounded-lg bg-black px-3 py-2 text-m font-semibold text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Request Evaluation
                </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Example;