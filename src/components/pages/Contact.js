import React from 'react';

function Contact() {
    return (
        <div className="font-sans container my-24 px-6 mx-auto">
            <section className="mb-32 text-center text-gray-800">
                <div className="max-w-[700px] mx-auto px-3 lg:px-6">
                    <h2 className="text-3xl font-bold mb-12">Contact Me!</h2>
                    <form>
                        <div class="form-group mb-6">
                            <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" placeholder="Name">
                            </input>
                        </div>

                        <div className="form-group mb-6">
                            <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8" placeholder="Email address">
                            </input>
                        </div>

                        <div class="form-group mb-6">
                            <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlTextarea13" rows="3" 
                            placeholder="Message">
                            </textarea>
                        </div>

                        <button type="submit" className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700          hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                            Send
                        </button>
                    </form>
                </div>
            </section>
        </div>
        )
        }


export default Contact;