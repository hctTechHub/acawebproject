import {useState,useEffect} from "react"
import {useArticles} from "./ArticleProvider"
import axios from "axios"
import {useLocation,Link,useOutletContext} from "react-router-dom"
const ArticlesComponent = () => {
    const baseURL = import.meta.env.VITE_BASE_URL
    const fileURL = import.meta.env.VITE_BASE_FILE_URL
    const location = useLocation()
    const {articles} = useArticles()
    console.log(typeof articles)
    const segments = location.pathname.split("/").filter(Boolean)

    useEffect(() => {
        console.log(articles)
    },[articles])
    return(

        <>
            
             <div className="flex mb-4 h-[70px] w-full bg-gray-100 rounded-sm">
                    <div className="px-3 flex gap-1 w-full items-center justify-between">
                        <div className="flex gap-1 items-center">
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                             </svg>

                            <h6 className="text-cyan-950">All Articles</h6>
                        </div>
                            <div className="flex flex-row">
                            {
                                segments.map((segment,index) => {
                                    const path = "/" + segments.slice(0,index + 1).join("/")
                                    const urlName = segment.replace(/_/g,"").replace(/\b\w/g,(char) => char.toUpperCase())
                                return  <div key={index}> 
                                            {index > 0 && <span className="px-2"> {'>'} </span>}
                                            <Link to={path}>{urlName}</Link> 
                                    </div>
                                })
                            }
                            </div>
                            
                        </div>
                    </div>

                    {
                       <div className="overflow-x-auto rounded-lg border border-gray-200">
                            <table className="w-full text-sm table-fixed  border-collapse text-left">
                                <thead className="bg-cyan-600 text-cyan-50">
                                    <tr>
                                        <th className="px-6 py-3 font-semibold">Created Date</th>
                                        <th className="px-6 py-3 font-semibold">Banner Image</th>
                                        <th className="px-6 py-3 font-semibold">Article Name</th>
                                        <th className="px-6 py-3 font-semibold">Category</th>
                                        <th className="px-6 py-3 font-semibold">Has Carousel</th>
                                        <th className="px-6 py-3 font-semibold">Is Published</th>
                                        <th className="px-6 py-3 font-semibold">Preview</th>
                                        <th className="px-6 py-3 font-semibold">Edit</th>
                                        <th className="px-6 py-3 font-semibold">Delete</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {
                                        articles.map((article,index) => {
                                        return <tr key={index} className="odd:bg-white even:bg-gray-50 hover:bg-cyan-50">
                                                    <td className="px-6 py-3">{
                                                        article.created_at
                                                    }</td>
                                                    <td className="px-6 py-3"><img  className="h-20 w-25 rounded-lg shadow shadow-cyan-600" src={`${fileURL}/uploads/${article.bannerImg}`}/></td>
                                                    <td className="px-6 py-3">{article.title}</td>
                                                    <td className="px-6 py-3">
                                                        <ul className="list-disc">
                                                            {
                                                                article.category.map((category) => {
                                                                 return <li>{category.categoryName}</li>
                                                                })
                                                            }
                                                        </ul>
                                                    </td>
                                                    <td className="px-6 py-3">{
                                                            article.carouselImages.length > 0 ?<span className="px-2 py-2 text-sm text-green-600">Yes</span> : <span className="px-2 py-2 text-sm  text-cyan-950">No</span>
                                                      }
                                                    </td>
                                                    <td className="px-6 py-3">{
                                                            article.isPublished ?<span className="px-2 py-2  text-sm  text-green-600">Yes</span> : <span className="px-2 py-2 text-sm   text-cyan-950">No</span>
                                                      }
                                                    </td>
                                                    <td className="px-6 py-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-cyan-500">
                                                        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                                        <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
                                                        </svg>
                                                    </td>
                                                    <td className="px-6 py-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-cyan-950">
                                                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                                        <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                                        </svg>
                                                    </td>
                                                    <td className="px-6 py-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-600">
                                                        <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                                                        </svg>
                                                    </td>
                                                </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    }
        </>
    )

}

export default ArticlesComponent