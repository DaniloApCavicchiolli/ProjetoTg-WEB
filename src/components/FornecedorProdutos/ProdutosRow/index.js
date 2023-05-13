import React, { useEffect, useState } from 'react';

import { Container, Body, Buttons } from './styles';
import colors from '../../../styles/colors';

const ProdutosRow = ({ produtos }) => {

    const [checked, setChecked] = useState(false);

    const categorias = produtos.fk_categoria;
    const categoria = categorias?.map((data) => {
        return data.nome
    })

    return (
        <>
            <Container style={{ background: (checked) && 'rgb(248, 170, 39, 0.2)' }}>
                {/* <Body>
                    <img src='https://picsum.photos/200' />
                </Body> */}
                <header>
                    <p>Nome comercial</p>
                    <span>{produtos.nome}</span>
                </header>
                <Body>
                    <p>Categoria</p>
                    <span>{categoria.join(', ')}</span>
                </Body>
                <Buttons>
                    <div
                        type='checkbox'
                        value={checked}
                        onClick={() => { setChecked(!checked) }}
                        style={{ backgroundColor: checked && colors.secondary }}
                    />
                </Buttons>
            </Container>
        </>
    )
}

export default ProdutosRow;
