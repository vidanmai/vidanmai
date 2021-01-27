import React from 'react';

class Academic extends React.Component {
    render() {
        return (
            <div className="bg-green-700 py-10">
                <h1 className="text-center text-white font-semibold">Bachelor</h1>
                <div className="tableContainer lg:w-2/4 md:w-3/4 sm:w-full m-auto">
                    <table className="table-auto rounded-sm mx-auto my-10 bg-green-100">
                        <thead>
                            <tr>
                                <th className="w-1/5 p-5 text-green-500">Course</th>
                                <th className="w-4/5 p-5 text-green-500">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-green-600 p-5 ">IN1000</td>
                                <td className="border border-green-600 p-5 ">Introduction to Object-oriented programming</td>
                            </tr>
                            <tr className="bg-green-200">
                                <td className="border border-green-600 p-5 ">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                                <td className="border border-green-600 p-5 ">Adam</td>
                            </tr>
                            <tr>
                                <td className="border border-green-600 p-5">Intro to JavaScript</td>
                                <td className="border border-green-600 p-5 ">Chris</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h1 className="text-center text-white font-semibold">Master</h1>
                <div className="tableContainer lg:w-2/4 md:w-3/4 sm:w-full m-auto">
                    <table className="table-auto rounded-sm mx-auto my-10 bg-green-100">
                        <thead>
                            <tr>
                                <th className="w-1/5 p-5 text-green-500">Course</th>
                                <th className="w-4/5 p-5 text-green-500">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-green-600 p-5 ">IN1000</td>
                                <td className="border border-green-600 p-5 ">Introduction to Object-oriented programming</td>
                            </tr>
                            <tr className="bg-green-200">
                                <td className="border border-green-600 p-5 ">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                                <td className="border border-green-600 p-5 ">Adam</td>
                            </tr>
                            <tr>
                                <td className="border border-green-600 p-5 ">Intro to JavaScript</td>
                                <td className="border border-green-600 p-5 ">Chris</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

export default Academic;