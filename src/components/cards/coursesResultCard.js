import React from 'react';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import mobile from "../../../styles/mobile.module.css";

const CoursesResultCard = (props) => {

    const [isPremium, setIsPremium] = React.useState(false);

    React.useEffect(() => {
        if(props.premium) setIsPremium(true);
    }, [props.premium])


    return <div className={`grid md:grid-cols-none grid-cols-none space-y-1 md:grid-rows-none grid-rows-none bg-white shadow-md grid-flow-row md:gap-2 md:p-4 p-2 rounded-lg relative ${isPremium ? "border-4 border-custom-primary border-t-4" : ""}`}>
        {/* {isPremium && (
            <div className="absolute -top-8 left-0">
                <img src="../../premiumCourse.png" alt=""/>
            </div>
        )} */}
        <div className="row-span-2 col-span-3 border-0">
            <div className="grid md:grid-cols-4 grid-cols-1 md:gap-2 -mt-1">
                <div className="col-span-1 md:block flex justify-between">
                    <div className="text-green-600 font-normal flex flex-1 items-center justify-start md:hidden">
                        <div className="flex ml-8 space-x-1">
                            <FontAwesomeIcon icon={faCircle} className="w-2" /> <span>Admission Open</span>
                        </div>
                    </div>
                    <div>
                        <img src="../../courseSearch.jpg" alt="" className="object-contain md:h-full h-12"/>
                    </div>
                </div>
                <div className="col-span-3 md:p-3 flex flex-col justify-between space-y-1">
                <div class="space-x-1 -mt-4">
                <div class="inline-block">
                    <Link href={"/courses/2000/page-of-test"}>
                        <a className={`${mobile.lblColor} text-custom-primary text-2xl font-normal block truncate-2-lines max-h-14 leading-7 mt-4 md:mt-0`}>Computer Engineering, BEng</a>
                        
                    </Link>
                    </div>
                    <div class="inline-block">
                 
           
                    

                    <span className={`${mobile.dot}`}></span>
                    
                    <svg class="-my-7 stroke-current text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
</svg>         
         
               
                    </div>
                    </div>
                    
                    <div className="flex justify-between items-center md:space-y-6 my-3 md:my-0 text-base">
                        <div className="font-normal">
                            <div className="flex items-center space-x-1">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="w-3" /> <span>Ota, Nigeria </span>
                            </div>
                        </div>
                        <div className="text-green-600 font-normal hidden md:block">
                            <div className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faCircle} className="w-2" /> <span>Admission Open</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:space-x-4 space-x-2 text-base font-normal">
                        <span>Covenant University</span>
                        <span className={`${mobile.lblColor} text-custom-primary text-sm`}>(76 Courses)</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="row-span-3 col-span-1 md:border-l-2 border-gray-200 md:px-4 my-4 md:my-0 md:pr-2 md:space-y-4 md:block flex justify-between items-center space-x-2 md:space-x-0 w-full text-sm md:text-base">
            <div className={`${mobile.divBackCol} flex flex-col gap-1 items-center text-center md:px-2 px-4 md:py-3 py-1 md:text-base rounded-lg md:w-full`}>
                <span className={`${mobile.lblColorSp}`}>Tuition fees/year</span>
                <span className={`${mobile.lblColorData} md:text-lg`}>KSh 100,000</span>
            </div>
            <div className={` ${mobile.divBackCol} flex flex-col gap-1 items-center text-center md:px-2 px-4 md:py-3 py-1 md:text-base rounded-lg md:w-full`}>
                <span className={`${mobile.lblColorSp}`}>Class Begin</span>
                <span className={`${mobile.lblColorData} md:text-lg`}>Jan 2021 | Aug 2021</span>
            </div>
        </div>
        <div className={` ${mobile.txtItem} row-span-1 col-span-3 border-t-2 border-gray-100 p-0 text-gray-400 md:text-base md:font-normal`}>
            <div className="flex items-center justify-between h-full">
                <div>Bachelor</div>
                <div>Part-time</div>
                <div>4 years</div>
            </div>
        </div>
    </div>
};

export default CoursesResultCard;