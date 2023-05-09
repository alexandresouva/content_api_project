import { Button } from '@material-ui/core';
import { Container, Titulo, InputContainer } from './styles';
import { Input, InputLabel, InputAdornment } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();
  return (
    <Container>
      <Titulo>Insira o seu nome</Titulo>
      <InputContainer>
        <InputLabel>Nome</InputLabel>
        <Input type="text" />
      </InputContainer>
      <InputContainer>
        <InputLabel>Saldo</InputLabel>
        <Input
          type="number"
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
        />
      </InputContainer>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push('/feira')}
      >
        Avançar
      </Button>
    </Container>
  );
}

export default Login;
