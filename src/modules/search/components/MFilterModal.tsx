const MFilterModal = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex items-center my-2'>
                <span>Type </span>
                <button
                    type='button'
                    className='inline-flex w-full justify-center rounded-full border-2 border-gray-500 px-4 py-2 text-base font-bold text-gray-500 shadow-sm ml-3 w-auto text-sm'
                >
                    Course
                </button>
                <button
                    type='button'
                    className='inline-flex w-full justify-center rounded-full border-2 border-gray-500 px-4 py-2 text-base font-bold text-gray-500 shadow-sm ml-3 w-auto text-sm'
                >
                    Video
                </button>
                <button
                    type='button'
                    className='inline-flex w-full justify-center rounded-full border-2 border-gray-500 px-4 py-2 text-base font-bold text-gray-500 shadow-sm ml-3 w-auto text-sm'
                >
                    Creator
                </button>
            </div>
            <hr />
            <div className='flex justify-between items-center m-3'>
                <label
                    htmlFor='duration'
                    className='block mb-2 text-sm font-medium text-gray-900 mr-3 w-24'
                >
                    Duration
                </label>
                <select
                    id='duration'
                    className='flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
                >
                    <option selected value='0'>
                        All
                    </option>
                    <option value='1'>&lt;1 hours</option>
                    <option value='2'>1-2 hours</option>
                    <option value='3'>2-3 hours</option>
                    <option value='4'>&gt;3 hours</option>
                </select>
            </div>
            <div className='flex justify-between items-center m-3'>
                <label
                    htmlFor='price'
                    className='block mb-2 text-sm font-medium text-gray-900 mr-3 w-24'
                >
                    Price
                </label>
                <select
                    id='price'
                    className='flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
                >
                    <option selected value='0'>
                        All
                    </option>
                    <option value='1'>Free</option>
                    <option value='2'>&lt; $5</option>
                    <option value='3'>$5 - $10</option>
                    <option value='4'>&gt; $10</option>
                </select>
            </div>
            <div className='flex justify-between items-center m-3'>
                <label
                    htmlFor='rating'
                    className='block mb-2 text-sm font-medium text-gray-900 mr-3 w-24'
                >
                    Ratings
                </label>
                <select
                    id='rating'
                    className='flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
                >
                    <option selected value='0'>
                        All
                    </option>
                    <option value='1'>&gt;4.5</option>
                    <option value='2'>4.0-4.5</option>
                    <option value='3'>3.5-4.0</option>
                    <option value='4'>3.0-3.5</option>
                </select>
            </div>
            <div className='flex justify-between items-center m-3'>
                <label
                    htmlFor='sortby'
                    className='block mb-2 text-sm font-medium text-gray-900 mr-3 w-24'
                >
                    Sort by
                </label>
                <select
                    id='sortby'
                    className='flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
                >
                    <option selected value='0'>
                        All
                    </option>
                    <option value='1'>Newest</option>
                    <option value='2'>Popular</option>
                    <option value='3'>Ratings</option>
                </select>
            </div>

            <div className='bg-gray-50 flex flex-row-reverse px-6'>
                <button
                    type='button'
                    className='inline-flex w-full justify-center rounded-md border-2 border-green-500 px-4 py-2 text-base font-bold text-green-500 shadow-sm ml-3 w-auto text-sm'
                >
                    Apply
                </button>
                <button
                    type='button'
                    className='mt-3 inline-flex w-full justify-center rounded-md border-2 border-red-500 px-4 py-2 text-base font-bold text-red-500 shadow-sm mt-0 ml-3 w-auto text-sm'
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default MFilterModal
