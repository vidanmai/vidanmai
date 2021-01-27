import React from 'react';

class Academic extends React.Component {
    render() {
        return (
            <div className="my-10">
                <h1 className="text-center">Bachelor</h1>
                <div className="table mx-auto">
                    <table class="table-auto rounded-md mx-auto my-10 bg-green-100">
                        <thead>
                            <tr>
                                <th class="w-1/5 p-5 text-green-500">Course</th>
                                <th class="w-4/5 p-5 text-green-500">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-green-600 p-5 ">Intro to CSS</td>
                                <td className="border border-green-600 p-5 ">Adam</td>
                            </tr>
                            <tr class="bg-green-200">
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
                <h1 className="text-center">Master</h1>
                <div className="table mx-auto">
                    <table class="table-auto rounded-md mx-auto my-10 bg-green-100">
                        <thead>
                            <tr>
                                <th class="w-1/5 p-5 text-green-500">Course</th>
                                <th class="w-4/5 p-5 text-green-500">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-green-600 p-5 ">Intro to CSS</td>
                                <td className="border border-green-600 p-5 ">Adam</td>
                            </tr>
                            <tr class="bg-green-200">
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