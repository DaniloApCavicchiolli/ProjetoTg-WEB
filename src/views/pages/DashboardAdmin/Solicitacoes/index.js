import React, { useEffect, useState } from "react";
import { BarChart, XAxis, YAxis, CartesianGrid, Bar, Cell, } from 'recharts';

import colors from "../../../../styles/colors";
import api from "../../../../services/api";

function NumeroSolicitacoes() {

    const data = [
        {
            name: 'Janeiro',
            solicitacoes: 2400,
            amt: 2400,
        },
        {
            name: 'Fevereiro',
            solicitacoes: 1398,
            amt: 2210,
        },
        {
            name: 'Março',
            solicitacoes: 9800,
            amt: 2290,
        },
        {
            name: 'Abril',
            solicitacoes: 3908,
            amt: 2000,
        },
        {
            name: 'Maio',
            solicitacoes: 4800,
            amt: 2181,
        },
        {
            name: 'Junho',
            solicitacoes: 3800,
            amt: 2500,
        },
        {
            name: 'Julho',
            solicitacoes: 4300,
            amt: 2100,
        },
        {
            name: 'Agosto',
            solicitacoes: 1500,
            amt: 2100,
        },
        {
            name: 'Setembro',
            solicitacoes: 4100,
            amt: 2100,
        },
        {
            name: 'Outubro',
            solicitacoes: 3800,
            amt: 2100,
        },
        {
            name: 'Novembro',
            solicitacoes: 2300,
            amt: 2100,
        },
        {
            name: 'Dezembro',
            solicitacoes: 10500,
            amt: 2100,
        },
    ];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <BarChart
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
            <Bar dataKey="solicitacoes" stroke={`${colors.primary}`} shape={<TriangleBar />} label={{ position: 'top' }}>
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={`${colors.secondary}`} />
                ))}
            </Bar>
        </BarChart>
    );
}

export default NumeroSolicitacoes;
