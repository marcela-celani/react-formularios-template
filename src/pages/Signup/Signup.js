import React from 'react'
import { ContainerForm, ContainerSignup, Input } from './styled'
import useForm from '../../hooks/useForm'

export default function Signup() {
    // const [nomeUsuario, setNomeUsuario] = useState("")
    // const [email, setEmail] = useState("")
    // const [senha, setSenha] = useState("")
    // const [confirmaSenha, setConfirmaSenha] = useState("")

    // const onChangeNome = (e) => {
    //     setNomeUsuario(e.target.value)
    // }
    // const onChangeEmail = (e) => {
    //     setEmail(e.target.value)
    // }
    // const onChangeSenha = (e) => {
    //     setSenha(e.target.value)
    // }
    // const onChangeConfirmaSenha = (e) => {
    //     setConfirmaSenha(e.target.value)
    // }

    const enviarCadastro = (e) => {
        //* EXTRA: validando a senha - ter certeza que o usuário sabe qual senha cadastrou
        e.preventDefault()
        if (form.senha === form.confirmaSenha) {
            console.log(form)
            clearFields()
        } else {
            alert('O campo de senha e confirmação de senha devem ser iguais!')
        }
        console.log(form)
        alert('Usuário cadastrado com sucesso!')
    }

    const {form, onChangeInputs, clearFields} = useForm({nomeUsuario:'', email:'', senha:'', confirmaSenha:''})


    return (
        <ContainerSignup>
            <ContainerForm onSubmit={enviarCadastro}>
                <label htmlFor='nome'>Nome de usuario:</label>
                <Input
                    name='nomeUsuario'
                    id='nome'
                    value={form.nomeUsuario}
                    onChange={onChangeInputs}
                    placeholder="username"
                    type='text'
                    required
                />
                <label htmlFor='email'>Email:</label>
                <Input
                    name='email'
                    id='email'
                    value={form.email}
                    onChange={onChangeInputs}
                    placeholder="nome@email.com"
                    type='email'
                    required
                />
                <label htmlFor='senha'>Senha:</label>
                <Input
                    name='senha'
                    id='senha'
                    value={form.senha}
                    onChange={onChangeInputs}
                    placeholder="Crie sua senha"
                    type='password'
                    required
                />
                <label htmlFor='confirma-senha'>Confirmação de senha:</label>
                <Input
                    name='confirmaSenha'
                    id='confirma-senha'
                    value={form.confirmaSenha}
                    onChange={onChangeInputs}
                    placeholder="Confirme a senha"
                    type='password'
                    required
                />
                <button>Cadastrar</button>
            </ContainerForm>
        </ContainerSignup>
    )
}
