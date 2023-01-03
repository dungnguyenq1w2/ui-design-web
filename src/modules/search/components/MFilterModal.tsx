interface IMFilterModalProps {
    // onFilterChange: () => void
    onFilterChange: any
    onClose: () => void
    filter: any
    onApply: any
}

// const MFilterModal = ({ onTypeChange }: { onTypeChange: (type:string) => void }) => {
const MFilterModal = ({ onFilterChange, onClose, filter, onApply }: IMFilterModalProps) => {
    // const [type, setType] = useState('all')

    const handleTypeChange = (typeVal: string) => () => {
        // if (type === typeVal) {
        //     setType('all')
        // } else {
        //     setType(typeVal)
        // }

        const newFilter = { ...filter }
        if (filter?.type == typeVal) {
            newFilter.type = 'all'
        } else {
            newFilter.type = typeVal
        }

        onFilterChange(newFilter)
    }

    const handleFilterChange = (key: string) => (e: any) => {
        // newFilter[filter.type]
        const newFilter = {
            ...filter,
            [filter.type]: { ...filter[filter.type], [key]: e.target.value },
        }

        onFilterChange(newFilter)
    }

    return (
        <div className='flex flex-col m-1 px-2 py-4 absolute top-16 left-0 w-full bg-white shadow-xl'>
            <div className='flex items-center m-3'>
                <span className='block mb-2 text-sm font-medium text-gray-900 w-24'>Type</span>
                <button
                    type='button'
                    onClick={handleTypeChange('course')}
                    className={
                        filter?.type == 'course'
                            ? 'bg-green-500 inline-flex w-24 justify-center rounded-full border-2 border-transparent px-4 py-2 font-bold text-white shadow-sm ml-3 text-sm'
                            : 'inline-flex w-24 justify-center rounded-full border-2 border-gray-500 px-4 py-2 font-bold text-gray-500 shadow-sm ml-3 text-sm'
                    }
                >
                    Course
                </button>
                <button
                    type='button'
                    onClick={handleTypeChange('video')}
                    className={
                        filter?.type == 'video'
                            ? 'bg-green-500 inline-flex w-24 justify-center rounded-full border-2 border-transparent px-4 py-2 font-bold text-white shadow-sm ml-3 text-sm'
                            : 'inline-flex w-24 justify-center rounded-full border-2 border-gray-500 px-4 py-2 font-bold text-gray-500 shadow-sm ml-3 text-sm'
                    }
                >
                    Video
                </button>
                <button
                    type='button'
                    onClick={handleTypeChange('creator')}
                    className={
                        filter?.type == 'creator'
                            ? 'bg-green-500 inline-flex w-24 justify-center rounded-full border-2 border-transparent px-4 py-2 font-bold text-white shadow-sm ml-3 text-sm'
                            : 'inline-flex w-24 justify-center rounded-full border-2 border-gray-500 px-4 py-2 font-bold text-gray-500 shadow-sm ml-3 text-sm'
                    }
                >
                    Creator
                </button>
            </div>
            <hr />
            {filter?.type === 'all' ? (
                <></>
            ) : filter?.type === 'course' ? (
                <>
                    <div className='flex justify-between items-center m-3'>
                        <label
                            htmlFor='duration'
                            className='block mb-2 text-sm font-medium text-gray-900 mr-3 w-24'
                        >
                            Duration
                        </label>
                        <select
                            id='duration'
                            defaultValue='0,1000'
                            onChange={handleFilterChange('duration')}
                            className='flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
                        >
                            <option value='0,1000'>All</option>
                            <option value='0,59.9'>&lt;1 hours</option>
                            <option value='60,119.9'>1-2 hours</option>
                            <option value='120,179.9'>2-3 hours</option>
                            <option value='180,1000'>&gt;3 hours</option>
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
                            defaultValue='0,1000'
                            onChange={handleFilterChange('price')}
                            className='flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
                        >
                            <option selected value='0,1000'>
                                All
                            </option>
                            <option value='0,0'>Free</option>
                            <option value='0,4.99'>&lt; $5</option>
                            <option value='5,9.99'>$5 - $10</option>
                            <option value='10,1000'>&gt; $10</option>
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
                            defaultValue='0,5'
                            onChange={handleFilterChange('rating')}
                            className='flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
                        >
                            <option value='0,5'>All</option>
                            <option value='4.5,5'>&gt;4.5</option>
                            <option value='4,4.49'>4.0-4.5</option>
                            <option value='3.5,3.99'>3.5-4.0</option>
                            <option value='0,3.49'>3.0-3.5</option>
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
                            defaultValue='all'
                            onChange={handleFilterChange('sortby')}
                            className='flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
                        >
                            <option value='all'>All</option>
                            <option value='popular'>Popular</option>
                            <option value='rating'>Ratings</option>
                        </select>
                    </div>

                    <div className='flex justify-end px-4'>
                        <button
                            type='button'
                            onClick={onClose}
                            className='inline-flex w-auto justify-center rounded-md border-2 border-red-500 px-4 py-2 font-bold text-red-500 shadow-sm ml-3 text-sm'
                        >
                            Cancel
                        </button>
                        <button
                            type='button'
                            onClick={() => {
                                onApply()
                                onClose()
                            }}
                            className='inline-flex w-auto justify-center rounded-md border-2 border-green-500 px-4 py-2 font-bold text-green-500 shadow-sm ml-3 text-sm'
                        >
                            Apply
                        </button>
                    </div>
                </>
            ) : filter?.type === 'video' ? (
                <>
                    <div className='flex justify-between items-center m-3'>
                        <label
                            htmlFor='duration'
                            className='block mb-2 text-sm font-medium text-gray-900 mr-3 w-24'
                        >
                            Duration
                        </label>
                        <select
                            id='duration'
                            defaultValue='0,1000'
                            onChange={handleFilterChange('duration')}
                            className='flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
                        >
                            <option value='0,1000'>All</option>
                            <option value='2,4.99'>2-5 minutes</option>
                            <option value='5,9.99'>5-10 minutes</option>
                            <option value='10,1000'>&gt;10 minutes</option>
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
                            defaultValue='0,5'
                            onChange={handleFilterChange('rating')}
                            className='flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
                        >
                            <option value='0,5'>All</option>
                            <option value='4.5,5'>&gt;4.5</option>
                            <option value='4,4.49'>4.0-4.5</option>
                            <option value='3.5,3.99'>3.5-4.0</option>
                            <option value='0,3.49'>3.0-3.5</option>
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
                            defaultValue='all'
                            onChange={handleFilterChange('sortby')}
                            className='flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
                        >
                            <option value='all'>All</option>
                            <option value='popular'>Popular</option>
                            <option value='rating'>Ratings</option>
                        </select>
                    </div>

                    <div className='flex justify-end px-4'>
                        <button
                            type='button'
                            onClick={onClose}
                            className='inline-flex w-auto justify-center rounded-md border-2 border-red-500 px-4 py-2 font-bold text-red-500 shadow-sm ml-3 text-sm'
                        >
                            Cancel
                        </button>
                        <button
                            type='button'
                            onClick={() => {
                                onApply()
                                onClose()
                            }}
                            className='inline-flex w-auto justify-center rounded-md border-2 border-green-500 px-4 py-2 font-bold text-green-500 shadow-sm ml-3 text-sm'
                        >
                            Apply
                        </button>
                    </div>
                </>
            ) : filter?.type === 'creator' ? (
                <>
                    <div className='flex justify-between items-center m-3'>
                        <label
                            htmlFor='level'
                            className='block mb-2 text-sm font-medium text-gray-900 mr-3 w-24'
                        >
                            Level
                        </label>
                        <select
                            id='level'
                            defaultValue='all'
                            onChange={handleFilterChange('level')}
                            className='flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
                        >
                            <option value='all'>All</option>
                            <option value='expert'>Expert</option>
                            <option value='teacher'>Teacher</option>
                            <option value='creator'>Creator</option>
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
                            defaultValue='0,5'
                            onChange={handleFilterChange('rating')}
                            className='flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
                        >
                            <option value='0,5'>All</option>
                            <option value='4.5,5'>&gt;4.5</option>
                            <option value='4,4.49'>4.0-4.5</option>
                            <option value='3.5,3.99'>3.5-4.0</option>
                            <option value='0,3.49'>3.0-3.5</option>
                        </select>
                    </div>

                    <div className='flex justify-end px-4'>
                        <button
                            type='button'
                            onClick={onClose}
                            className='inline-flex w-auto justify-center rounded-md border-2 border-red-500 px-4 py-2 font-bold text-red-500 shadow-sm ml-3 text-sm'
                        >
                            Cancel
                        </button>
                        <button
                            type='button'
                            onClick={() => {
                                onApply()
                                onClose()
                            }}
                            className='inline-flex w-auto justify-center rounded-md border-2 border-green-500 px-4 py-2 font-bold text-green-500 shadow-sm ml-3 text-sm'
                        >
                            Apply
                        </button>
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    )
}

export default MFilterModal
