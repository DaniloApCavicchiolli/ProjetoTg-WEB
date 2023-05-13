import React, { useEffect, useState } from 'react';

import { Container, Body, Buttons } from './styles';
import colors from '../../../styles/colors';

const ProdutosRow = ({ produtos, setSelected, selected }) => {

    const [checked, setChecked] = useState(false);

    const categorias = produtos.fk_categoria;
    const categoria = categorias?.map((data) => {
        return data.nome
    });

    function handleClick() {
        const index = selected.findIndex(item => item == produtos.id)
        if (index != -1) {
            selected.splice(index, 1)
            setSelected(selected)
        } else {
            const auxiliar = [...selected]
            auxiliar.push(produtos.id)
            setSelected(auxiliar)
        }
    };

    return (
        <>
            <Container style={{ background: (checked) && `${colors.secondaryRGB}` }}>
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
                        onClick={() => { setChecked(!checked); handleClick() }}
                        style={{ backgroundColor: checked && colors.secondary }}
                    />
                </Buttons>
            </Container>
        </>
    )
}

export default ProdutosRow;
