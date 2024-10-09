import axios from 'axios';
import React, { useEffect, useState } from 'react';

function TransactionsTable() {
    const [transactions, setTransactions] = useState([]);
    const [month, setMonth] = useState('March');
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchTransactions = async () => {
            const response = await axios.get(`/api/v1/product?month=${month}&page=${page}`);
            setTransactions(response.data);
        };
        fetchTransactions();
    }, [month, page]);

    return (
        <div>
            <h2>Transactions</h2>
            <select value={month} onChange={(e) => setMonth(e.target.value)}>
                <option value="March">March</option>
                {/* Add other months */}
            </select>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TransactionsTable;
