import React from 'react';

class Academic extends React.Component {
    render() {
        return (
            <div className="py-10">
                <h1 className="font-semibold tracking-wide text-center uppercase">Bachelor</h1>
                <div className="m-auto tableContainer xl:w-2/4 lg:w-2/4 md:w-3/4 sm:w-full">
                    <table className="mx-auto my-10 rounded-sm table-auto">
                        <thead>
                            <tr className="bg-green-200">
                                <th className="w-1/5 p-5 border border-green-600">Course</th>
                                <th className="w-4/5 p-5 border border-green-600">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-5 border border-green-600 ">IN1000</td>
                                <td className="p-5 border border-green-600 ">Introduction to Object-oriented programming</td>
                            </tr>
                            <tr className="bg-green-200">
                                <td className="p-5 border border-green-600 ">INF1080</td>
                                <td className="p-5 border border-green-600 ">Logical Methods for Computer Science</td>
                            </tr>
                            <tr>
                                <td className="p-5 border border-green-600">INF1050</td>
                                <td className="p-5 border border-green-600 ">Systems Development</td>
                            </tr>
                            <tr className="bg-green-200">
                                <td className="p-5 border border-green-600">INF2270</td>
                                <td className="p-5 border border-green-600 ">Computer Architecture</td>
                            </tr>
                            <tr>
                                <td className="p-5 border border-green-600">INF2100</td>
                                <td className="p-5 border border-green-600 ">Programming Project</td>
                            </tr>
                            <tr className="bg-green-200">
                                <td className="p-5 border border-green-600">IN2090</td>
                                <td className="p-5 border border-green-600 ">Databases and modelling</td>
                            </tr>
                            <tr>
                                <td className="p-5 border border-green-600">IN2140</td>
                                <td className="p-5 border border-green-600 ">Introduction to operating systems and data communication</td>
                            </tr>
                            <tr className="bg-green-200">
                                <td className="p-5 border border-green-600">IN2010</td>
                                <td className="p-5 border border-green-600 ">Algorithms and Data Structures</td>
                            </tr>
                            <tr>
                                <td className="p-5 border border-green-600">IN2150</td>
                                <td className="p-5 border border-green-600 ">IT in Organizations</td>
                            </tr>
                            <tr className="bg-green-200">
                                <td className="p-5 border border-green-600">INF3510</td>
                                <td className="p-5 border border-green-600 ">Information Security</td>
                            </tr>
                            <tr>
                                <td className="p-5 border border-green-600">INF3121</td>
                                <td className="p-5 border border-green-600 ">Software Testing</td>
                            </tr>
                            <tr className="bg-green-200">
                                <td className="p-5 border border-green-600">IN3100</td>
                                <td className="p-5 border border-green-600 ">Information Technology and Society</td>
                            </tr>
                            <tr>
                                <td className="p-5 border border-green-600">IN3030</td>
                                <td className="p-5 border border-green-600 ">Efficient Parallel Programming</td>
                            </tr>
                            <tr className="bg-green-200">
                                <td className="p-5 border border-green-600">IN3050</td>
                                <td className="p-5 border border-green-600 ">Introduction to Artificial Intelligence and Machine Learning</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h1 className="font-semibold tracking-wide text-center uppercase">Master</h1>
                <div className="m-auto tableContainer xl:w-2/4 lg:w-2/4 md:w-3/4 sm:w-full">
                    <table className="mx-auto my-10 rounded-sm table-auto">
                        <thead>
                            <tr className="bg-green-200">
                                <th className="w-1/5 p-5 border border-green-600">Course</th>
                                <th className="w-4/5 p-5 border border-green-600">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-5 border border-green-600 ">IN5130</td>
                                <td className="p-5 border border-green-600 ">Unassailable IT-systems</td>
                            </tr>
                            <tr className="bg-green-200">
                                <td className="p-5 border border-green-600 ">IN5140</td>
                                <td className="p-5 border border-green-600 ">Smart processes and agile methods in software engineering</td>
                            </tr>
                            <tr>
                                <td className="p-5 border border-green-600">IN5290</td>
                                <td className="p-5 border border-green-600 ">Ethical Hacking</td>
                            </tr>
                            <tr className="bg-green-200">
                                <td className="p-5 border border-green-600">IN4240</td>
                                <td className="p-5 border border-green-600 ">Software Testing</td>
                            </tr>
                            <tr>
                                <td className="p-5 border border-green-600">IN5030</td>
                                <td className="p-5 border border-green-600 ">Protocols and Routing in the Internet</td>
                            </tr>
                            <tr className="bg-green-200">
                                <td className="p-5 border border-green-600">IN5600</td>
                                <td className="p-5 border border-green-600 ">Programming Ubiquitous Things</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

export default Academic;