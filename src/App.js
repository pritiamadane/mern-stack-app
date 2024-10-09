import React from 'react';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import Statistics from './components/Statistics';
import TransactionsTable from './components/TransactionsTable';

function App() {
    return (
        <div className="App">
            <h1>Transactions Dashboard</h1>
            <TransactionsTable />
            <Statistics />
            <BarChart />
            <PieChart />
        </div>
    );
}

export default App;
