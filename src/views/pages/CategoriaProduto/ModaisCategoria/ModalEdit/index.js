import React, { useRef, useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import Button from "../../../../../components/Button";
import Input from "../../../../../components/Input";
import { ContextCategoria } from "../../../../../contexts/CategoriaContext";
import getValidationErrors from "../../../../../utils/getValidationErrors";

import { Container, Forms, Body, Content, Column, Image } from "./styles";

function ModalEdit({ setShowModalEdit, user, loading, loadingProdutos }) {
    const formRef = useRef(null);
    const { updateCategoria } = useContext(ContextCategoria);

    const handleSubmit = async (data) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                nome: Yup.string()
                    .required("Nome Obrigatório"),
            });
            await schema.validate(data, {
                abortEarly: false,
            });
            formRef.current?.setErrors({});

            await updateCategoria(data, user?.id);
            await loading();
            await loadingProdutos();
            setShowModalEdit(false);
        } catch (err) {
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
        }
    };

    return (
        <>
            <Container>
                <Body>
                    <div>
                        <Image style={{ background: 'transparent' }} />
                        <h1>Editar Categoria</h1>
                        <Image />
                    </div>
                    <p>Insira os dados referentes a categoria</p>
                    <Forms ref={formRef} onSubmit={handleSubmit}
                        initialData={{...user}}>
                        <Content>
                            <Column>
                                <div>
                                    <span>Nome</span>
                                    <Input name="nome" placeholder="Nome da Categoria"
                                    />
                                </div>
                            </Column>
                        </Content>
                        <div style={{ backgroundColor: "#FFF" }}>
                            <Button style={{ fontSize: '18px', width: "30%" }}>Salvar</Button>
                        </div>
                    </Forms>
                    <a href="#" onClick={() => setShowModalEdit(false)}>
                        Voltar
                    </a>
                </Body>
            </Container>
        </>
    );
}

export default ModalEdit;