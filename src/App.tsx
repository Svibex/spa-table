import React from 'react';

function App() {
    return (
        <div className="App">
            <header className="App-header">
            </header>
            <table>
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Название</th>
                        <th>Количество</th>
                        <th>Расстояние</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>11.11</td>
                    <td>Name</td>
                    <td>number</td>
                    <td>length</td>
                </tr>
                </tbody>
            </table>
            <div className='pagination'>
                <button>Previous</button>
                <p>Current  page</p>
                <button>Next</button>
            </div>
        </div>
    );
}

export default App;
