import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import colors from "../../../../styles/colors";
import api from "../../../../services/api";

function NumeroFornecedores() {

    const data = [
        {
            name: 'Janeiro',
            fornecedor: 2400,
            amt: 2400,
        },
        {
            name: 'Fevereiro',
            fornecedor: 1398,
            amt: 2210,
        },
        {
            name: 'Março',
            fornecedor: 9800,
            amt: 2290,
        },
        {
            name: 'Abril',
            fornecedor: 3908,
            amt: 2000,
        },
        {
            name: 'Maio',
            fornecedor: 4800,
            amt: 2181,
        },
        {
            name: 'Junho',
            fornecedor: 3800,
            amt: 2500,
        },
        {
            name: 'Julho',
            fornecedor: 4300,
            amt: 2100,
        },
        {
            name: 'Agosto',
            fornecedor: 1500,
            amt: 2100,
        },
        {
            name: 'Setembro',
            fornecedor: 4100,
            amt: 2100,
        },
        {
            name: 'Outubro',
            fornecedor: 3800,
            amt: 2100,
        },
        {
            name: 'Novembro',
            fornecedor: 2300,
            amt: 2100,
        },
        {
            name: 'Dezembro',
            fornecedor: 10500,
            amt: 2100,
        },
    ];

    return (
            <LineChart
                width={1000}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey="name" stroke={`${colors.primary}`} />
                <YAxis stroke={`${colors.primary}`} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="fornecedor" stroke={`${colors.linck}`} activeDot={{ r: 8 }} />
            </LineChart>
    );
}

export default NumeroFornecedores;
