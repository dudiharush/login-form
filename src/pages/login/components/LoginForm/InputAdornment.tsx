import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import MuiInputAdornment from '@mui/material/InputAdornment';

type InputAdornmentProps = {
    hasError: boolean
}

export const InputAdornment = ({hasError}:InputAdornmentProps) => {
    return hasError ? (
        <MuiInputAdornment position="start">
          <ErrorOutlineIcon color="error" />
        </MuiInputAdornment>
      ) : null
}