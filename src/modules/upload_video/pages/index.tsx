import React from "react";
import { MHeader } from "~/modules/home/components";
import classNames from 'classnames'

// Import dropzone and file list components:
import { DropZone } from '../components/MDropZone'
import { FileList } from '../components/MFileList'
import CFooter from "~/common/components/CFooter";

export const MUploadVideo = React.memo(() => {
    const [isDropActive, setIsDropActive] = React.useState(false)
    const [files, setFiles] = React.useState<File[]>([])
    // Create handler for dropzone's onDragStateChange:
    const onDragStateChange = React.useCallback((dragActive: boolean) => {
        setIsDropActive(dragActive)
    }, [])

    // Create handler for dropzone's onFilesDrop:
    const onFilesDrop = React.useCallback((files: File[]) => {
        setFiles(files)
    }, [])

    const inputFile = React.useRef(null) 

    const handleButtonClick = () => {
        inputFile.current.click()
    }

    const handleFileChange = (ev) => {
        ev.preventDefault()
        ev.stopPropagation()
        const fs = []
        fs.push(ev.target.files[0])
        setFiles(fs)
    }

    return (
        <div
            className={classNames('dropZoneWrapper', {
                'dropZoneActive': isDropActive,
            },
            'min-h-screen flex flex-col')}
            
        >
            <MHeader />
            <div className="grow mx-8">
                <div className="">
                    <h1>Upload Video</h1>
                    <p>Upload your file here</p>
                    {/* Drag and drop */}

                    <DropZone 
                        onDragStateChange={onDragStateChange} 
                        onFilesDrop={onFilesDrop}
                        onClick={handleButtonClick}
                        className="px-6 py-24 w-52 border-2 my-8
                        border-grey-500 hover:border-green-300
                        rounded-xl border-dashed cursor-pointer"
                    >
                        <input type='file' id='file' ref={inputFile} style={{display: 'none'}} onChange={handleFileChange}/>
                        <h2>Drop your files here</h2>

                        {files.length === 0 ? (
                            <h3>No files to upload</h3>
                        ) : (
                            <h3>Files to upload: {files.length}</h3>
                        )}

                        <div 
                            className="grid bg-green-500 p-2 justify-items-center rounded-sm
                            hover:bg-green-600"
                        >
                            <span className="text-white">Select Video</span>
                        </div>

                        {/* Render the file list */}
                        
                        <FileList files={files} />
                    </DropZone>
                </div>
                <div>

                </div>
            </div>
            
            <CFooter />
        </div>
    )
})

MUploadVideo.displayName = "MUploadVideo"