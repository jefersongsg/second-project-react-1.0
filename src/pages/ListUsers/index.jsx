import { useEffect, useState } from 'react';
import api from '../../services/api';
import Button from '../../components/Button';
import TopBackground from '../../components/TopBackground';
import Trash from '../../assets/trash.svg';
import { useNavigate } from 'react-router-dom';
import { Title, Container, ContainerUsers, CardUsers, TrashIcon, Avatar } from './styles';

const ListUsers = () => {
    const [users, setUsers] = useState([]);

    async function getUsers() {
        const usersFromApi = await api.get('/users');
        setUsers(usersFromApi.data);
    }

    async function deleteUser(id) {
        await api.delete(`/users/${id}`);
       
    }

    useEffect(() => {
        getUsers();
    }, []);

    const navigate = useNavigate();

    return (
        <Container>
            <TopBackground />
            <Title>Lista de Usuários</Title>
            <ContainerUsers>
                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <Avatar src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon src={Trash} alt="icon-delete" onClick={() => deleteUser(user.id)} />
                    </CardUsers>
                ))}
            </ContainerUsers>
            <Button onClick={() => navigate('/')}>voltar
            </Button>
        </Container>
    );
};

export default ListUsers;
