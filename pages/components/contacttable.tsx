import React from 'react'

function TabelContact() {
    return (
        <div>
            <table className='container '>
                <thead>
                    <tr className='bg-gray-100'>
                        <th className='py-3 px-6 text-gray-600'>#</th>
                        <th className='py-3 px-6 text-gray-600'>Name</th>
                        <th className='py-3 px-6 text-gray-600'>Phone Number</th>
                        <th className='py-3 px-6 text-gray-600'>Create At</th>
                        <th className='py-3 px-6 text-gray-600'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='py-3 px-6'></td>
                        <td className='py-3 px-6'></td>
                        <td className='py-3 px-6'></td>
                        <td className='py-3 px-6'></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TabelContact
