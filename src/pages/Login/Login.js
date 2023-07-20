import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { irParaCadastro } from '../../Routes/coordinator'
import { ContainerForm, ContainerLogin, Input } from './styled'
import useForm from '../../hooks/useForm'

export default function Login() {
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  

  // const onChangeEmail = (e) => {
  //   setEmail(e.target.value)
  // }
  // const onChangeSenha = (e) => {
  //   setPassword(e.target.value)
  // }
  const navigate = useNavigate()

  const {form, onChangeInputs, clearFields} = useForm({email:'', password:''})

  const enviaLogin = (e) => {
    e.preventDefault()
    console.log(form)
    clearFields()
  }

  return (
    <ContainerLogin>
      <ContainerForm onSubmit={enviaLogin}>
        <label htmlFor='email'>Email:</label>
        <Input
          name='email'
          id='email'
          type='email'
          value={form.email}
          onChange={onChangeInputs}
          placeholder="nome@email.com"
          required
        />
        <label htmlFor='senha'>Senha:</label>
        <Input
          name='password'
          id='senha'
          type='password'
          value={form.password}
          onChange={onChangeInputs}
          placeholder="Digite sua senha"
          pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$'
          title='A senha deve possuir letras maiúsculas, minúsculas, números e caracteres especiais.'
          required
        />
        <button>Fazer Login</button>
      </ContainerForm>
      <button onClick={() => irParaCadastro(navigate)}>Ainda não tenho uma conta</button>
    </ContainerLogin>
  )
}
