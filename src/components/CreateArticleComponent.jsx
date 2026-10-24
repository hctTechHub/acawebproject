import {useRef,useState,useEffect} from "react"
import axios from "axios"
import {useOutletContext,useLocation,Link} from "react-router-dom"
import TextEditor from "./TextEditor"
import {useCategories} from "./CategoryProvider"
import {CarouselComponent} from "./CarouselComponent"

const CreateArticleComponent = () => {
const carouselRef = useRef(null)
const [toggleSelectCategory,setToggleSelectCategory] = useState(false)
const [selectedCategories,setSelectedCategories] = useState([])
const [searchKeyword,setSearchKeyword] = useState(null)
const [errors,setErrors] = useState({})
const [fileTooLargeError,setFileTooLargeError] = useState([])
const [showErrors,setShowErrors] = useState(false)
const [showSuccessMsg,setShowSuccessMsg] = useState(false)
const {decodedAuthToken} = useOutletContext()
const baseURL = import.meta.env.VITE_BASE_URL
const location = useLocation()
const segments = location.pathname.split("/").filter(Boolean)
const {categories,token} = useCategories()
const [initialCategories,setInitialCategories] = useState(categories)
const [showCarousel,setShowCarousel] = useState(false)
const inputFileRef =  useRef(null)
const [selectedNoOfImages,setSelectedNoOfImages] = useState(1)
const [selectedFiles,setSelectedFiles] = useState([])
const handleOpenFilePicker = () => {
    inputFileRef.current.click()
}
const [articleState,setArticleState] = useState({
    title:'',
    article_banner:'',
    article_content:'',
    isPublished:false
})

const [preview,setPreview] = useState(null)
const [carouselPreview,setCarouselPreview] = useState([])
const [file,setFile] = useState(null)
const [content,setContent] = useState(null)
const handleSelectFile = (event) => {
    const selectedFile = event.target.files[0]
    if((selectedFile.size/1024) > 2000){
            setErrors({...errors,fileSizeError:true})
    }
    else{
            setErrors({...errors,fileSizeError:false})
            const preview = URL.createObjectURL(selectedFile)
            setPreview(preview)
            setFile(selectedFile)
    }
   
    //console.log(selectedFile)
    
}
useEffect(() => {
    console.log(decodedAuthToken)
},[decodedAuthToken])
useEffect(() => {

   setArticleState({...articleState,article_banner:file?.name})
    if(file != null){
        setErrors({...errors,file:false})
    }
   
},[file])
useEffect(() => {
    setArticleState({...articleState,article_content:content})
    if(content){
        setErrors({...errors,article_content:false})
    }
    console.log(content)

},[content])
const handleRemoveImage = () => {
    setPreview(null)
    setFile(null)
    if(errors.fileSizeError){
        setErrors({...errors,fileSizeError:false})
    }
}

const handleCloseErrorMsg = () => {
        setShowErrors(false)
}

const handleCloseSuccessMsg = () => {
    setShowSuccessMsg(false)
}

const handleToggleSelectCategory = () =>{
    setToggleSelectCategory((prevState) => (!prevState) )
}

const handleSelectedCategory = (category) => {
        const selectedCategory = category
        setSelectedCategories((prevState) => 
            {
                const categoryExists = prevState.some(selected => selected.id === selectedCategory.id)
                return categoryExists ? prevState.filter(selected => selected.id !== selectedCategory.id )
                : prevState.concat(selectedCategory)
            }
        )
        console.log(selectedCategories)
}

const handleSearch = (event) => {
    setSearchKeyword(event.target.value)
}

const handleNoOfImages = (event) => {
        setSelectedNoOfImages(event.target.value)

}

const toggleShowCarousel = () => {
    setSelectedNoOfImages(1)
    setShowCarousel((prev) => !prev)
    setErrors({...errors,selectedFiles:false})
}

const setSelectedFilesHelper = () => {
    return setSelectedFiles
}

const setPreviewHelper = () => {
    return setCarouselPreview
}

useEffect(() => {
    setInitialCategories( (searchKeyword) ? categories.filter( category => category.categoryName.toLowerCase().includes(searchKeyword)) : categories)
},[searchKeyword])

useEffect(() => {
    if(selectedCategories.length > 0){
        setErrors({...errors,selectedCategories:false})
    }
},[selectedCategories])

const handleInfoChange = (event) => {
    let {name,value,type,checked} = event.target
    const newValue = type === "checkbox" ? checked : value

    setArticleState({...articleState,[name]:newValue})
    if(newValue){
        setErrors({...errors,[name]:false})
    }
}

const validateForm = () => {
    const newError = {}
    Object.entries(articleState).forEach(([key,value]) => {
        if(value === null || value === undefined || (typeof value === "string" && value.trim() === "")){
             newError[key] = true
        }
    })
    if(file === null){
        newError["file"] = true
    }
   
    if(selectedCategories.length === 0){
        newError["selectedCategories"] = true
    }
    if(showCarousel && selectedFiles.length === 0){
        newError["selectedFiles"]  = true
    }
    if(fileTooLargeError.some((hasError) => hasError.error === true)){
        newError["fileTooLargeError"] = true
    }
    setErrors(newError)
    return Object.keys(newError).length === 0
}

const createArticle = async () => {

    if((!validateForm()) || (file === null)){
        setShowErrors(true)
        setShowSuccessMsg(false)
        console.log(errors)
       
    }
    else{

             if(carouselRef.current){
                carouselRef.current.checked = false
            }
            setShowErrors(false)
            console.log(selectedFiles)
            const formData = new FormData()
            formData.append("userId",JSON.stringify(decodedAuthToken.id))
            formData.append("file",file)
            formData.append("data",JSON.stringify(articleState))
            formData.append("selectedCategories",JSON.stringify(selectedCategories))
            selectedFiles.forEach((selectedFile) => {
                formData.append("carouselImages",selectedFile.file)
            })
            formData.append("selectedFiles",JSON.stringify(selectedFiles.map((selectedFile) => ({index:selectedFile.index,caption:selectedFile.caption}))))
            //console.log(formData.get("file"))
            console.log(formData.get("carouselImages"))
            const res = await axios.post(`${baseURL}/create_article`,formData,{
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })
            if(res.status === 201){
                //reset  article state
                setArticleState({
                    title:'',
                    article_banner:'',
                    article_content:'',
                    isPublished:false
                })

                //reset article banner preview
                setPreview(null)
                setFile(null)
                setSelectedCategories([])
                setShowSuccessMsg(true)
                setShowErrors(false)
                setContent(null)
                setSelectedFiles([])
                setCarouselPreview([])
                setSelectedNoOfImages(1)
                setShowCarousel((prev) => !prev)
            }
            
            console.log(res.data)
    }
}

    return (
        <>
           <div className="flex mb-4 h-[70px] w-full bg-gray-100 rounded-sm">
                    <div className="px-3 flex gap-1 w-full items-center justify-between">
                        <div className="flex gap-1 items-center">
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
                            </svg>
                            <h6 className="text-cyan-950">CREATE ARTICLE</h6>
                        </div>
                        <div className="flex">
                            {
                                segments.map((segment,index) => {
                                    const path = "/" + segments.slice(0,index + 1).join("/")
                                    const urlName = segment.replace(/_/g," ").replace(/\b\w/g,(char) => char.toUpperCase())
                                    
                                    return(
                                            
                                                <div key={index}>
                                                   {(index > 0) && <span className="px-2">{'>'}</span>}
                                                    <Link to={path}>{urlName}</Link>
                                                </div>
                                    )
                                })
                            } 
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-1' >
                    {
                        showErrors && 
                        <div className="relative rounded-sm p-4 w-3/5 mb-4 bg-red-600 text-red-50">
                            <p>One or more errors occurred please try again!!!</p>
                             <span title="close" onClick={handleCloseErrorMsg} className="absolute border-3 border-white -top-2 -right-2 flex items-center justify-center rounded-full p-3 w-6 h-6 bg-red-100 text-red-600 text-sm font-bold hover:cursor-pointer">x</span>
                        </div>
                    }
                    {
                        showSuccessMsg && 
                        <div className="relative rounded-sm p-4 w-3/5 mb-4 bg-green-600 text-green-50">
                            <p>Article created successfully!!!</p>
                             <span title="close" onClick={handleCloseSuccessMsg} className="absolute border-3 border-white -top-2 -right-2 flex items-center justify-center rounded-full p-3 w-6 h-6 bg-green-100 text-green-600 text-sm font-bold hover:cursor-pointer">x</span>
                        </div>
                    }
                    <label className="text-cyan-950">Enter Title</label>
                    <input onChange={handleInfoChange} name="title" value={articleState.title} className={`p-2 w-2/5 rounded-sm outline placeholder:p-2 ${errors.title ? 'border-2 border-red-600 outline-none'  : '' }`} placeholder="Enter a title" />
                    {
                        errors.title && <span className="text-red-600">*title field is required</span>
                    }
                    <label className="mt-2 text-cyan-950">Select Category</label>
                    <div className='relative w-2/5 mb-6'>
                        <div className={`p-2 ${errors.selectedCategories ? 'border-2 border-red-600 outline-none': ''} rounded-sm flex items-center justify-between full outline`}>
                            {selectedCategories.length > 0 ? <div className="grid grid-cols-3 gap-2">
                                    {
                                        (selectedCategories.length > 0) ?
                                            selectedCategories.map((category,index) => {
                                                //console.log(category)
                                                return <div key={index} className="flex items-center justify-between p-2 text-xs bg-gray-300 rounded-xl"><span>{category.categoryName}</span> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
                                                    </svg>
                                                    </span>
                                                </div>
                                            }) : ''
                                        
                                    }
                                </div> :<span className="text-gray-500">---select a category---</span>
                            }
                            
                            <svg onClick={handleToggleSelectCategory} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        {
                             
                            errors.selectedCategories && <span className="text-red-600">*select at least one category</span>
                    
                        }
                        <div className={`p-2 absolute ${toggleSelectCategory ? "block":"hidden"} top-10 outline w-full z-1 bg-white`}>
                            <input type="text" onChange={handleSearch} name="search" className="mt-2 mb-2 p-1 w-full rounded-lg outline-transparent bg-gray-100" placeholder="search a category"/>
                            <div className="pl-2 flex flex-col gap-2 justify-center hover:cursor-pointer">
                                
                                { 
                                    initialCategories.map((category,index) => {
                                        return <div key={index}  className="pl-2 hover:cursor-pointer hover:bg-blue-200"><input  name="selectedCategories" onChange={() => handleSelectedCategory(category)} type="checkbox" value={category.id} 
                                         checked={selectedCategories.some((selected) => selected.id === category.id)}/> {category.categoryName} </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    
                    <div className={`relative rounded-sm bg-gray-100 flex flex-col items-center justify-center h-[300px] w-[300px] border-1 border-dashed flex-col gap-2 ${errors.file ? 'border-2 border-red-600' : ''}`}>
                            
                            { 
                                errors.fileSizeError ? <div className="flex flex-col items-center"><span className="text-red-600">Image size too large(max filesize is 2MB)</span>
                                <span className="hover:cursor-pointer text-gray-600" onClick={handleOpenFilePicker}>Select an image</span></div>
                                  : file && preview ? <img className="h-full w-full" src={preview} />: 
                                <div className="flex flex-col"><span className={`${errors.file ? 'text-red-600' : 'text-gray-400'}`}>No image selected</span><span className="hover:cursor-pointer text-gray-600" onClick={handleOpenFilePicker}>Select an image</span></div>

                            }
                       
                        <input type="file" ref={inputFileRef} hidden name="file" onChange={handleSelectFile} accept="image/*" />
                        <div onClick={handleRemoveImage} className={`${errors.file ? 'bg-red-600' : ''} absolute hover:cursor-pointer flex items-center justify-center -top-2 -right-2 w-5 h-5 bg-cyan-950 text-white font-bold text-xs rounded-full`}><span>x</span></div>
                    </div>
                    {/*<div className="p-1 rounded-sm bg-cyan-950 text-cyan-50 w-50 text-center">Upload Banner Image</div>*/}
                    <h6 className="mt-8 mb-1 text-cyan-950">Enter Content</h6>
                    <div className={errors.article_content ? 'rounded-xl border-2 border-red-600':''}>
                        <TextEditor onContentChange={setContent} content={content}/>
                    </div>
                    { errors.article_content && <span className="text-red-600">*content field is required</span>}
                    
                    <label className="mt-2 mb-2">
                        <input onChange={toggleShowCarousel} type="checkbox" ref={carouselRef} /> Add carousel
                        <p className="text-cyan-950 font-semibold">*A maximum of four(4) images can be added to a carousel.</p>
                        <p className="text-red-600 font-semibold">*Max filesize allowed is 2MB</p>
                    </label>
                    {/** Carousel Creator */}
                    { showCarousel && <div>
                            <div className="flex gap-2 mb-4">
                                <label>Select No Of Images To Display</label>
                                <select onChange={handleNoOfImages}  className="outline rounded-sm">
                                        
                                        {
                                            Array.from({length:4},(_,index) => 
                                                <option selected={ selectedNoOfImages === (index + 1) ? 'selected' : ''} key={index}>{index + 1} </option>)
                                        }
                                    
                                </select>
                            </div>
                            <CarouselComponent errors={errors} showErrors={showErrors} setErrors={setErrors} selectedFiles={selectedFiles} setSelectedFiles={setSelectedFilesHelper} setPreview={setPreviewHelper} carouselPreview={carouselPreview} numberOfImages={selectedNoOfImages} fileTooLargeError={fileTooLargeError} setFileTooLargeError={setFileTooLargeError} />
                        </div>
                    }
                    <label className="mt-2 mb-2">
                        <input type="checkbox" name="isPublished" onChange={handleInfoChange} checked={articleState.isPublished}/> Publish Article
                    </label>
                    <div className="p-2  hover:cursor-pointer flex items-center justify-center rounded-sm bg-cyan-950 text-cyan-50 w-2/5" onClick={createArticle}>Publish and Preview</div>
                </div>
        </>
    )

}



export default CreateArticleComponent