import React from 'react'
import TabelContact from '../components/contacttable'
import SearchBar from '../components/searchbar'
import CreateBtn from '../components/createbtn'

function Contact() {
    return (
        <div className='max-w-screen-md mx-auto flex flex-col mt-10 gap-5'>
            <div className='flex items-center justify-between gap-4'>
                <SearchBar/>
                <CreateBtn/>
            </div>
            <TabelContact />
        </div>
    )
}

export default Contact
