import React, { useState } from 'react'
import Select from "react-select";


const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two', className: 'myOptionClassName' },
    {
        type: 'group', name: 'group1', items: [
            { value: 'three', label: 'Three', className: 'myOptionClassName' },
            { value: 'four', label: 'Four' }
        ]
    },
    {
        type: 'group', name: 'group2', items: [
            { value: 'five', label: 'Five' },
            { value: 'six', label: 'Six' }
        ]
    }
];

function NinmConference() {

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className='flex flex-col items-center mt-20 '>
            <h2 className=' font-bold mt-10  lg:text-[64px] text-3xl text-justify mb-5 '>  NIMNConferences, Events, Training & News</h2>
            <p className='lg:text-[24px] lg:px-40 px-10  text-lg text-p_gray text-justify leading-10 flex-wrap  mt-10 w-full '>
                Membership of the Institute is compulsory for all practitioners of the marketing profession.
                Membership of the Institute is compulsory for all practitioners of the marketing profession.
            </p>
            <div className=' flex  flex-row  justify-left  gap-10  items-left mt-10  '>
                <div className="dropdown dropdown-start w-80 ">
                    <Select
                        // options={uniqueRevenueTypesArr}
                        placeholder="All product Avalable"
                        // value={filterInitialData}
                        // onChange={(e) => updateValue(e)}
                        isMulti

                    />
                </div>

                <div className="dropdown dropdown-start w-80 ">
                    <Select
                        // options={uniqueRevenueTypesArr}
                        placeholder="All product Avalable"
                        // value={filterInitialData}
                        // onChange={(e) => updateValue(e)}
                        isMulti
                    />
                </div>

                <div className="dropdown dropdown-start w-80 ">
                    <Select
                        // options={uniqueRevenueTypesArr}
                        placeholder="All product Avalable"
                        // value={filterInitialData}
                        // onChange={(e) => updateValue(e)}
                        isMulti
                    />
                </div>



            </div>

        </div>
    )
}

export default NinmConference
