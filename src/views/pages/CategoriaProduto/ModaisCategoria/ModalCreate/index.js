import React, { useRef, useContext } from "react";
import * as Yup from "yup";
import { ContextCategoria } from "../../../../../contexts/CategoriaContext";
import Button from "../../../../../components/Button";
import Input from "../../../../../components/Input";
import getValidationErrors from "../../../../../utils/getValidationErrors";

import { Container, Forms, Body, Content, Column, Image } from "./styles";

function ModalCreate({ setShowModalCreate, user, loading }) {
    const formRef = useRef(null);

    const { createCategoria } = useContext(ContextCategoria);

    const handleSubmit = async (data) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                nome: Yup.string()
                    .required("Nome Obrigatório!")
            });

            await schema.validate(data, {
                abortEarly: false,
            });
            formRef.current?.setErrors({});

            const resp = await createCategoria(data);
            loading();
            setShowModalCreate(false);
        } catch (err) {
            console.log(err);
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
        }
    };

    return (
        <Container>
            <Body>
                <div>
                    <Image style={{ background: 'transparent' }} />
                    <h1>Adiciona Categoria</h1>
                    <Image />
                </div>
                <p>Insira os dados referentes a categoria</p>
                <Forms ref={formRef} onSubmit={handleSubmit}>
                    <Content>
                        <Column>
                            <div>
                                <span>Nome</span>
                                <Input name="nome" placeholder="Nome da Categoria"
                                // icon={RiBuilding4Line}
                                />
                            </div>
                        </Column>
                    </Content>
                    <div style={{ backgroundColor: "#FFF" }}>
                        <Button style={{ fontSize: '18px', width: "30%" }}>Salvar</Button>
                    </div>
                </Forms>
                <a href="#" onClick={() => setShowModalCreate(false)}>
                    Voltar
                </a>
            </Body>
        </Container>
    );
}

export default ModalCreate;