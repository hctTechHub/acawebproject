import {useRef,useState,useEffect} from "react"

export const CarouselComponent = (props) => {
    const carouselSelectorRef = useRef([])
    const fileTooLargeError = props.fileTooLargeError
    const setFileTooLargeError = props.setFileTooLargeError
    const selectedFiles = props.selectedFiles
    const setSelectedFiles = props.setSelectedFiles()
    const carouselPreview = props.carouselPreview
    const setCarouselPreview = props.setPreview()
    const setErrors = props.setErrors
    const errors = props.errors
    //console.log(errors))
    const numberOfImages = props.numberOfImages
    const carouselLength = Array.from({length:numberOfImages},(_,index) => (index + 1))
    let    previewURL = ""
    const handleCarouselImageSelector = (index) => {
           carouselSelectorRef.current[index]?.click()
    }
    const handleSelectCarouselImage = (event,index) => {
        const selectedFile = event.target.files[0]
        if((selectedFile.size / 1024) > 2000){
            const exists = fileTooLargeError.some((error) => error.index === index)
            if(exists){
                setFileTooLargeError(fileTooLargeError.map((hasError) => {
                    if(hasError.index === index){
                            hasError.error =  true
                            setErrors(prev => ({...prev,fileTooLargeError:true}))
                    }
                    return hasError
                }))
            }
            else{
                    setFileTooLargeError((prev) => [...prev,{index:index,error:true}])
                    setErrors(prev => ({...prev,fileTooLargeError:true}))
            }
        }
        else{

                setFileTooLargeError(fileTooLargeError.map((hasError) => {
                    if(hasError.index === index){
                            hasError.error =  false
                            setErrors(prev => ({...prev,fileTooLargeError:false}))
                    }
                    return hasError
                }))
                
                previewURL = URL.createObjectURL(selectedFile)
                const exists = carouselPreview.some((tempObj) => tempObj.index === index)
                if(exists){ //change image
                    setCarouselPreview((prev) => prev.map((tempObj,i) => tempObj.index === index ? {...tempObj,previewURL:previewURL} : tempObj))
                    setSelectedFiles((prev) => prev.map((tempObj,i) => tempObj.index === index ? {...tempObj,file:selectedFile,caption:caption} : tempObj))
                }
                else{
                        setCarouselPreview((prev) => [...prev,{index:index,previewURL:previewURL}])
                        setSelectedFiles((prev) => [...prev,{index:index,file:selectedFile,caption:''}])
                }
        }

    }
    const handleCaptionChange = (event,index) => {
            const caption = event.target.value
            const exists = selectedFiles.some((file) => file.index === index)
            if(exists){
                 setSelectedFiles((prev) => prev.map( file => file.index === index ? {...file,caption:caption} : file ))
            }
            else{
                    return
            }
    }
    const handleRemoveSelectedCarouselImage = (index) => {
        const tempObj = carouselPreview.find((obj) => obj.index === index)
        const fileObj = selectedFiles.find((file) => file.index === index)
        const fileSizeError = fileTooLargeError.find((obj) => obj.index === index)
        if(tempObj){ //remove image from the preview array
            setCarouselPreview((prev) => prev.filter(savedObj => savedObj.index != tempObj.index))
            setSelectedFiles((prev) => prev.filter(file => file.index != fileObj.index))
        }
        if(fileSizeError?.error){
                setFileTooLargeError((prev) => prev.map((obj) => {
                    if(obj.index === index){
                            obj.error = false
                    }
                    return obj
                }))
        }
    }

    useEffect(() => {
        //console.log(selectedFile)
        console.log(carouselPreview)
    },[carouselPreview])
    useEffect(() => {
        console.log(selectedFiles)
        if(selectedFiles.length > 0){ 
            setErrors(prev => ({...prev,selectedFiles:false}))
        }
    },[selectedFiles])
    
    useEffect(() => {
        console.log(fileTooLargeError)
    },[fileTooLargeError])
    return(
        <>
        <div className="grid grid-cols-4 gap-4 auto-cols-fr">
            {
                carouselLength.map((imgDiv,index) => {
                    const tempObj = carouselPreview.find((obj) => obj.index === index)
                    const errorAtIndex = fileTooLargeError.find((obj) => obj.index === index)
                    return(
                        <div key={index} className={` ${errors.selectedFiles  ? 'border-2 border-red-600' : ''} relative bg-gray-200 flex flex-col items-center justify-center h-50 rounded-sm border-1 border-dotted`}>
                            {
                                  errorAtIndex?.error ? <div className="flex flex-col"><span className="text-red-400">Image size too large</span>
                                        <span onClick={() => handleCarouselImageSelector(index)} className="hover:cursor-pointer">Select an image</span>
                                    </div>
                                   : tempObj ? <div className="h-full">
                                        <img src={tempObj.previewURL} className="h-4/5"/>
                                        <textarea onChange={(event) => handleCaptionChange(event,index)} placeholder="Enter Capption Here" className="text-xs outline h-2/10 w-full resize-none pl-2 bg-white"></textarea>
                                    </div> : <div className="flex flex-col"><span className="text-gray-400">No Image Selected</span>
                                        <span onClick={() => handleCarouselImageSelector(index)} className="hover:cursor-pointer">Select an image</span>
                                    </div>


                            }
                             <input hidden  accept="image/*" onChange={(event) => handleSelectCarouselImage(event,index)} ref={(element) => carouselSelectorRef.current[index] = element} type="file" name="carouselImages" />
                            <div onClick={() => handleRemoveSelectedCarouselImage(index)} className={`absolute hover:cursor-pointer h-5 w-5 font-semibold text-xs text-white rounded-full -top-2 -right-2 flex items-center justify-center ${errors.selectedFiles ? 'bg-red-600' : 'bg-gray-900'} `}>x</div>
                        </div>

                    )
                })
            }
        </div>
          {
            errors.selectedFiles && <span className="text-red-600">*Carousel must contain one or more images </span>
          }
        </>
    )

}


