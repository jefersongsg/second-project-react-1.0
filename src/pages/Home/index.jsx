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


const Home = () => {

    const inputName = useRef()
    const inputAge  = useRef()
    const inputEmail = useRef()
    const navigate = useNavigate()

    async function userRegistration() {
        try {
          const res = await api.post('/users', {
            email: inputEmail.current.value,
            age: parseInt(inputAge.current.value),
            name: inputName.current.value
          });
      
          if (res.status === 201) {
            navigate('/users');
          } else {
            alert('Erro ao criar usuário');
          }
        } catch (error) {
          console.error('Erro ao cadastrar usuário:', error);
          alert('Erro ao cadastrar usuário');
        }
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

                        <Input type="number" placeholder="Idade do usuário" ref={inputAge}/>
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

                <Button type="button" onClick={() => navigate ('/users')}>
                    Ver Lista de Usuários
                </Button>
               
            </Form>

         

        </Container>
    )
}
export default Home