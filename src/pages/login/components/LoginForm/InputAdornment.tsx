import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import MuiInputAdornment from '@mui/material/InputAdornment';

type InputAdornmentProps = {
    hasError?: boolean
}

export const InputAdornment = ({hasError = false}:InputAdornmentProps) => {
    return hasError ? (
        <MuiInputAdornment position="start">
          <ErrorOutlineIcon color="error" titleAccess='error'/>
        </MuiInputAdornment>
      ) : null
}