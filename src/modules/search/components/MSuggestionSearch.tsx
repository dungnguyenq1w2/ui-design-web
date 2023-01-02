/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

export interface IMSuggestionSearchProps {
    suggestions: any[]
    onClose: any
    onPress: any
}

export default function MSuggestionSearch({
    suggestions,
    onClose,
    onPress,
}: IMSuggestionSearchProps) {
    const handleSuggestionClick = (title: string) => () => {
        onPress(title)
    }

    return (
        <div className='absolute top-16 left-0 w-full bg-gray-100'>
            <div className='relative z-20'>
                {suggestions.map((suggestion) => (
                    <div
                        key={suggestion.id}
                        className='p-3 px-5 border-b text-sm'
                        onClick={handleSuggestionClick(suggestion.title)}
                    >
                        <p>{suggestion.title}</p>
                    </div>
                ))}
                <div className='absolute z-10 -top-14 left-0 h-[6vh] w-screen' onClick={onClose} />
            </div>
        </div>
    )
}
