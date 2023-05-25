import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import colors from "../../../../styles/colors";
import api from "../../../../services/api";

function NumeroUsuarios() {

    const data = [
        {
            name: 'Janeiro',
            cliente: 2400,
            amt: 2400,
        },
        {
            name: 'Fevereiro',
            cliente: 1398,
            amt: 2210,
        },
        {
            name: 'Março',
            cliente: 9800,
            amt: 2290,
        },
        {
            name: 'Abril',
            cliente: 3908,
            amt: 2000,
        },
        {
            name: 'Maio',
            cliente: 4800,
            amt: 2181,
        },
        {
            name: 'Junho',
            cliente: 3800,
            amt: 2500,
        },
        {
            name: 'Julho',
            cliente: 4300,
            amt: 2100,
        },
        {
            name: 'Agosto',
            cliente: 1500,
            amt: 2100,
        },
        {
            name: 'Setembro',
            cliente: 4100,
            amt: 2100,
        },
        {
            name: 'Outubro',
            cliente: 3800,
            amt: 2100,
        },
        {
            name: 'Novembro',
            cliente: 2300,
            amt: 2100,
        },
        {
            name: 'Dezembro',
            cliente: 10500,
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
                <Line type="monotone" dataKey="cliente" stroke={`${colors.linck}`} activeDot={{ r: 8 }} />
            </LineChart>
    );
}

export default NumeroUsuarios;
