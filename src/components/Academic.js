import React from 'react';

class Academic extends React.Component {
    render() {
        return (
            <div className="py-10">
                <h1 className="text-center uppercase tracking-wide font-semibold">Bachelor</h1>
                <div className="tableContainer xl:w-2/4 lg:w-2/4 md:w-3/4 sm:w-full m-auto">
                    <table className="table-auto rounded-sm mx-auto my-10 bg-green-100">
                        <thead>
                            <tr>
                                <th className="border border-green-600 w-1/5 p-5 text-green-500">Course</th>
                                <th className="border border-green-600 w-4/5 p-5 text-green-500">Name</th>
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
                            <tr className="bg-green-200">
                                <td className="border border-green-600 p-5">INF2270</td>
                                <td className="border border-green-600 p-5 ">Computer Architecture</td>
                            </tr>
                            <tr>
                                <td className="border border-green-600 p-5">INF2100</td>
                                <td className="border border-green-600 p-5 ">Programming Project</td>
                            </tr>
                            <tr className="bg-green-200">
                                <td className="border border-green-600 p-5">IN2090</td>
                                <td className="border border-green-600 p-5 ">Databases and modelling</td>
                            </tr>
                            <tr>
                                <td className="border border-green-600 p-5">IN2140</td>
                                <td className="border border-green-600 p-5 ">Introduction to operating systems and data communication</td>
                            </tr>
                            <tr className="bg-green-200">
                                <td className="border border-green-600 p-5">IN2010</td>
                                <td className="border border-green-600 p-5 ">Algorithms and Data Structures</td>
                            </tr>
                            <tr>
                                <td className="border border-green-600 p-5">IN2150</td>
                                <td className="border border-green-600 p-5 ">IT in Organizations</td>
                            </tr>
                            <tr className="bg-green-200">
                                <td className="border border-green-600 p-5">INF3510</td>
                                <td className="border border-green-600 p-5 ">Information Security</td>
                            </tr>
                            <tr>
                                <td className="border border-green-600 p-5">INF3121</td>
                                <td className="border border-green-600 p-5 ">Software Testing</td>
                            </tr>
                            <tr className="bg-green-200">
                                <td className="border border-green-600 p-5">IN3100</td>
                                <td className="border border-green-600 p-5 ">Information Technology and Society</td>
                            </tr>
                            <tr>
                                <td className="border border-green-600 p-5">IN3030</td>
                                <td className="border border-green-600 p-5 ">Efficient Parallel Programming</td>
                            </tr>
                            <tr className="bg-green-200">
                                <td className="border border-green-600 p-5">IN3050</td>
                                <td className="border border-green-600 p-5 ">Introduction to Artificial Intelligence and Machine Learning</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h1 className="text-center uppercase tracking-wide font-semibold">Master</h1>
                <div className="tableContainer xl:w-2/4 lg:w-2/4 md:w-3/4 sm:w-full m-auto">
                    <table className="table-auto rounded-sm mx-auto my-10 bg-green-100">
                        <thead>
                            <tr>
                                <th className="border border-green-600 w-1/5 p-5 text-green-500">Course</th>
                                <th className="border border-green-600 w-4/5 p-5 text-green-500">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-green-600 p-5 ">IN5130</td>
                                <td className="border border-green-600 p-5 ">Unassailable IT-systems</td>
                            </tr>
                            <tr className="bg-green-200">
                                <td className="border border-green-600 p-5 ">IN5140</td>
                                <td className="border border-green-600 p-5 ">Smart processes and agile methods in software engineering</td>
                            </tr>
                            <tr>
                                <td className="border border-green-600 p-5">IN5290</td>
                                <td className="border border-green-600 p-5 ">Ethical Hacking</td>
                            </tr>
                            <tr className="bg-green-200">
                                <td className="border border-green-600 p-5">IN4240</td>
                                <td className="border border-green-600 p-5 ">Software Testing</td>
                            </tr>
                            <tr>
                                <td className="border border-green-600 p-5">IN5030</td>
                                <td className="border border-green-600 p-5 ">Protocols and Routing in the Internet</td>
                            </tr>
                            <tr className="bg-green-200">
                                <td className="border border-green-600 p-5">IN5600</td>
                                <td className="border border-green-600 p-5 ">Programming Ubiquitous Things</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

export default Academic;