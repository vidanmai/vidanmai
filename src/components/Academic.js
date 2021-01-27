import React from 'react';

class Academic extends React.Component {
    render() {
        return (
            <div className="bg-green-700 py-10">
                <h1 className="text-center text-white font-semibold">Bachelor</h1>
                <div className="tableContainer xl:w-1/4 lg:w-2/4 md:w-3/4 sm:w-full m-auto">
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
                                <td className="border border-green-600 p-5 ">INF1080</td>
                                <td className="border border-green-600 p-5 ">Logical Methods for Computer Science</td>
                            </tr>
                            <tr>
                                <td className="border border-green-600 p-5">INF1050</td>
                                <td className="border border-green-600 p-5 ">Systems Development</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h1 className="text-center text-white font-semibold">Master</h1>
                <div className="tableContainer xl:w-1/4 lg:w-2/4 md:w-3/4 sm:w-full m-auto">
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
                                <td className="border border-green-600 p-5 ">INF1080</td>
                                <td className="border border-green-600 p-5 ">Logical Methods for Computer Science</td>
                            </tr>
                            <tr>
                                <td className="border border-green-600 p-5">INF1050</td>
                                <td className="border border-green-600 p-5 ">Systems Development</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

export default Academic;