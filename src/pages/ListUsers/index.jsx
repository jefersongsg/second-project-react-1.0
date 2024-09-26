
import { useEffect, useState } from 'react'
import api from '../../services/api'
import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'
import Trash from '../../assets/trash.svg'
import { useNavigate } from 'react-router-dom'
import { Title, Container, ContainerUsers, CardUsers, TrashIcon, Avatar } from './styles'


function ListUsers() {

    const navigate = useNavigate()

    const [user, setUser] = useState([])

    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get('http://localhost:3000/usuarios')

            setUser(data)
        }
        getUsers()
    },
    [])


    async function deleteUser(id){
        await api.delete(`http://localhost:3000/usuarios${id}`)

        const updateUser= user.filter(user.id !== id)


        setUser(updateUser)
    }
    return (
        <Container>
            <TopBackground/>
            <Title>Lista de Usuários</Title>
            <ContainerUsers>
                {user.map ((user) => (
                    <CardUsers key={user.id}>
                        <Avatar src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon src={Trash} alt={icon - delet} onClick={deleteUser(user.id)}/>
                    </CardUsers>
                ))}
            </ContainerUsers>

            <Button onClick={() => navigate ('/')}>voltar</Button>
        </Container>
    )

}

export default ListUsers
