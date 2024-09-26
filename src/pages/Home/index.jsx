import {useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import api from '../../services/api'

import {
    Title,
    Container,
    Form,
    ContainerInputs,
    Input,
    InputLabel,
} from'./styles'

import Button  from '../../components/Button'
import TopBackground  from '../../components/TopBackground'


function Home() {

    const navigate = useNavigate()

    const inputName = useRef()
    const inputAge = useRef()
    const inputEmail = useRef()

    async function userRegistration() {
    const data = await api.post('http://localhost:3000/usuarios',{
            email: inputEmail.current.value,
            age: parseInt(inputAge.current.value),
            name: inputName.current.value
        })
   
    }


    return(
        <Container>
            <TopBackground/>   
            <Form>
                <Title >Cadastro de Usuarios</Title >

                <ContainerInputs>
                    <div>
                        <InputLabel>
                          Nome<span> *</span>
                        </InputLabel>
                        <Input type="text" placeholder="Nome do usuário" ref={inputName}/>
                    </div>
                    <div>
                        <InputLabel>
                          Idade<span> *</span>
                        </InputLabel>

                        <Input type= 'number'placeholder="Idade do usuário" ref={inputAge}/>
                    </div>
                </ContainerInputs>


                <div style={{ width:'100%'}}>
                  <InputLabel>
                      E-mail<span> *</span>
                  </InputLabel>

                  <Input type="email" placeholder="E-mail do usuário" ref={inputEmail}/>
                </div>

                <Button type ="button" onClick={userRegistration} theme="primario">
                    Cadastrar Usuário
                </Button>

                <Button type="button" onClick={() => navigate ('/lista-de-usuarios')}>
                    Ver Lista de Usuários
                </Button>
               
            </Form>

         

        </Container>
    )
}
export default Home