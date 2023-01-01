import React, { useState } from 'react'
import Popup from 'react-animated-popup'


export default function AddCategory({ visible }) {
    return (
        <>
            <Popup visible={visible} onClose={() => setVisible(false)}>
                <form className="p-6 flex flex-col justify-center">
                    <div className="flex flex-col">
                        <input type="name" name="name" id="name" placeholder="Enter Category Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                    </div>
                    <div className="flex flex-col mt-2">
                        <input type="email" name="email" id="email" placeholder="Enter Sub Category Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                    </div>
                    <button type="submit" className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                        Submit
                    </button>
                </form>
            </Popup>
        </>
    )
}
