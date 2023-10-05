import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const LinkButton = styled(Button)(({ theme }) => {
  return {
    color: theme.palette.action.active,
    ':hover': {
      backgroundColor: '#EBEBEC',
    },
    padding: 2,
    borderRadius: 4
  };
}) as typeof Button;

const SubmitButton = styled(Button)(({ theme }) => {
  return {
    marginTop: 8,
    marginBottom: 4,
    clear: 'both',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.secondary.main,
    ':hover': {
      backgroundColor: theme.palette.action.hover,
    },
  };
}) as typeof Button;

const Form = styled('form')({
  width: '400px'
})

const styledComponents = {
  LinkButton,
  SubmitButton,
  Form
};

export default styledComponents;
