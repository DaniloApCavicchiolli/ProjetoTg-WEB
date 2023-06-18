import React, { useRef, useContext, useState, useEffect } from "react";
import * as Yup from "yup";
import Button from "../../../../../components/Button";
import Input from "../../../../../components/Input";
import { ContextProduto } from "../../../../../contexts/ProdutoContext";
import getValidationErrors from "../../../../../utils/getValidationErrors";
import api from "../../../../../services/api";
import Select from "react-select";
import { toast } from 'react-toastify';

import { Container, Forms, Body, Content, Column, Image } from "./styles";

function ModalEditProduto({ setShowModalEdit, user, loading, loadCategorias }) {
    const formRef = useRef(null);
    const { updateProduto } = useContext(ContextProduto);

    const [catego, setCatego] = useState([]);
    const [selectedCategorias, setSelectedCategorias] = useState([]);

    const handleSubmit = async (data) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                nome: Yup.string()
                    .required("Nome Obrigatório"),
                marca: Yup.string()
                    .required("Marca obrigatória!")
            });
            await schema.validate(data, {
                abortEarly: false,
            });
            formRef.current?.setErrors({});

            // data.categorias = data.categorias.split(/(,[ ]?)/g);
            data.categorias = selectedCategorias?.map(item => item.label);

            if (data.categorias.length != 0) {
                await updateProduto(data, user?.id);
                setShowModalEdit(false);
                await loading();
                await loadCategorias();
                window.location.reload();
            } else {
                toast.error("Selecione uma Categoria");
                return false;
            }

        } catch (err) {
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
        }
    };

    const loadingCategorias = async () => {
        try {
            const { data } = await api.get('/categoria_showAll');
            const categoria = user.fk_categoria;

            setSelectedCategorias(categoria?.map((data) => {
                return { value: data.id, label: data.nome }
            }));

            setCatego(data?.map(item => ({
                value: item.id, label: item.nome
            })));

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadingCategorias();
    }, []);

    return (
        <Container>
            <Body>
                <div>
                    <Image style={{ background: 'transparent' }} />
                    <h1>Editar Produto</h1>
                    <Image />
                </div>
                <p>Insira os dados referentes ao produto</p>
                <Forms ref={formRef} onSubmit={handleSubmit} initialData={{ ...user }}>
                    <Content>
                        <Column>
                            <div style={{ width: '90%', paddingRight: '10px' }}>
                                <span>Nome</span>
                                <Input name="nome" placeholder="Nome do Produto"
                                />
                            </div>
                            <div style={{ width: '90%', paddingRight: '10px' }}>
                                <span>Marca</span>
                                <Input name="marca" placeholder="Marca"
                                />
                            </div>
                            <div style={{ width: '90%', paddingRight: '10px' }}>
                                <span>Descrição</span>
                                <Input name="descricao" placeholder="Descrição"
                                />
                            </div>
                            <div style={{ width: '90%', paddingRight: '10px' }}>
                                <span>Categoria Vinculada</span>
                                <Select
                                    isMulti={true}
                                    onChange={value => setSelectedCategorias(value)}
                                    value={selectedCategorias}
                                    options={catego}
                                    placeholder='Selecione'
                                    maxMenuHeight={150}
                                    menuPlacement='auto'
                                    theme={(theme) => ({
                                        ...theme,
                                        colors: {
                                            ...theme.colors,
                                            primary25: 'rgb(122, 145, 134, 0.4)',
                                            primary: '#7a9186',
                                        },
                                    })}
                                />
                            </div>
                        </Column>
                    </Content>
                    <div style={{ backgroundColor: "#FFF", }}>
                        <Button style={{ fontSize: '18px', width: "30%" }}>Salvar</Button>
                    </div>
                </Forms>
                <a href="#" onClick={() => setShowModalEdit(false)}>
                    Voltar
                </a>
            </Body>
        </Container>
    );
}

export default ModalEditProduto;