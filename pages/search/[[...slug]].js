import React from 'react';
import Head from "next/dist/next-server/lib/head";
import {useRouter} from "next/router";
import styles from "../../styles/globals.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FilterSection from "../../src/components/sections/search/Filter";
import CoursesResultCard from "../../src/components/cards/coursesResultCard";
import {faAdjust, faFilter, faPlus, faSlidersH, faTimes} from "@fortawesome/free-solid-svg-icons";
import {
    ButtonDefault,
    ButtonDefaultSecondary,
    ButtonRedPrimary,
    ButtonRedSecondary
} from "../../src/components/styleComponent/button";
import {faBell} from "@fortawesome/free-regular-svg-icons";
import {useMediaQuery} from "react-responsive";
import Pagination from "../../src/components/general/pagination";
import mobile from "../../styles/mobile.module.css";


const SearchPage = (props) => {

    const router = useRouter();

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [isCurrentMobile, setIsCurrentMobile] = React.useState(false);
    const [isOpenFilter, setIsOpenFilter] = React.useState(false);

    React.useEffect(() => {
        setIsCurrentMobile(isMobile);
    }, [isMobile])

    const toggleFilter = (value = undefined) => {
        if(value !== undefined){
            setIsOpenFilter(value);
        }else{
            setIsOpenFilter(!isOpenFilter);
        }

    };

    // console.log(router.query);

    return <div>
        <Head>
            <title>Name search page - Afriuni</title>
        </Head>

        <div className="container mx-auto md:px-6 px-3 md:py-14 py-6">
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6">
                <div className="md:col-span-1">
                    <FilterSection openFilter={isOpenFilter} toggleFilter={toggleFilter}/>
                </div>

                <div className="md:col-span-2 space-y-2">

                    <div>
                        <div className="grid grid-cols-3 gap-2 w-full text-base md:border-b border-gray-400 md:pb-3 pb-2 items-center">
                            <div className="font-medium hidden md:block">158 Computer Engineering Courses</div>
                            <div className={`${mobile.btnSize} ${mobile.txtSize} flex justify-center`}>
                                <ButtonDefaultSecondary className="flex items-center justify-center md:space-x-0 space-x-0 rounded-lg w-full md:w-auto">
                                <span className="relative">
                                    <span className={`${mobile.circleSize} absolute -top-1.5 inline-flex rounded-full text-white bg-custom-secondary`}>
                                        <FontAwesomeIcon icon={faPlus} className={`${mobile.svgPlusSize} w-1`}/>
                                    </span>
                                    {/* <FontAwesomeIcon icon={faBell} className="md:w-5 w-4 text-custom-secondary" /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className={`${mobile.svgSize}`} >
  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
</svg>
                                </span>
                                    <span className={`md:text-sm text-xs ${mobile.spanBal}`}>Create Alert</span>
                                </ButtonDefaultSecondary>
                            </div>
                            <div className="grid md:grid-cols-2 grid-cols-1 items-center md:space-x-2 font-normal">
                                <span className="block text-right hidden md:inline-block">Sort by</span>
                                <select name="" id="" className={`${mobile.optSize} text-xs py-2 md:text-sm block w-full md:mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}>
                                    {isCurrentMobile && (
                                        <option value="">Sort By</option>
                                    )}
                                    <option value="revelance">Revelance</option>
                                </select>
                            </div>
                            <div className="flex md:hidden justify-center" onClick={toggleFilter}>
                                <ButtonRedPrimary className={`block w-full ${mobile.btnRedSize} rounded-lg flex items-center justify-center space-x-1 font-medium `}>
                                    <FontAwesomeIcon icon={faSlidersH} className="w-4" />
                                    <span className={`${mobile.filterTxtStyle}`}>Filters</span>
                                    <span className="bg-white px-1 py-0.5 rounded-full text-custom-secondary text-xs text-center flex items-center">10</span>
                                </ButtonRedPrimary>
                            </div>
                        </div>

                        <div className="font-normal pl-1 md:hidden block">158 Computer Engineering Courses</div>

                        <div className="flex items-center space-x-2 text-sm md:text-xs mt-2 md:mt-4">
                            <span className="font-medium hidden md:inline-block">Filter :</span> <span className="cursor-pointer bg-white border border-gray-400 px-3 rounded-full flex space-x-2"><span className={`${mobile.pointerStyle}`}>Computer Engineering</span> <FontAwesomeIcon icon={faTimes} className="w-2" /></span>
                        </div>
                    </div>

                    <CoursesResultCard premium={true}/>
                    <CoursesResultCard premium={true}/>
                    <CoursesResultCard premium={true}/>
                    <CoursesResultCard/>
                    <CoursesResultCard/>
                    <CoursesResultCard/>
                    <CoursesResultCard/>

                    {/* <Pagination totalRecords={150} pageLimit={10} pageNeighbours={2} onPageChanged={(data) => console.log(data) } pageCurrent={3}/> */}


                    
                    <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">

  <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
    <div>
      <p class="text-sm text-gray-700">
        Showing
        <span class="font-medium">1</span>
        to
        <span class="font-medium">10</span>
        of
        <span class="font-medium">97</span>
        results
      </p>
    </div>
    <div>
      <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          <span class="sr-only">Previous</span>
          
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </a>
        <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
          1
        </a>
        <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
          2
        </a>
        <a href="#" class="hidden md:inline-flex relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
          3
        </a>
        <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
          ...
        </span>
        <a href="#" class="hidden md:inline-flex relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
          8
        </a>
        <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
          9
        </a>
        <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
          10
        </a>
        <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          <span class="sr-only">Next</span>
          
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </a>
      </nav>
    </div>
  </div>
</div>



                </div>
            </div>
        </div>


    </div>
}

// This function gets called at build time
export async function getStaticPaths() {
    return {
        // Only `/posts/1` and `/posts/2` are generated at build time
        paths: [],
        // Enable statically generating additional pages
        // For example: `/posts/3`
        fallback: true,
    }
}

// This also gets called at build time
export async function getStaticProps({ params }) {

    // console.log(params)
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    // const res = await fetch(`https://.../posts/${params.id}`)
    const post = [];

    // Pass post data to the page via props
    return {
        props: { post },
        // Re-generate the post at most once per second
        // if a request comes in
        revalidate: 1,
    }
}

export default SearchPage;