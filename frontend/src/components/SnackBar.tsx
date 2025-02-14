
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface AutohideSnackbarProps {
    open: boolean;
    message: string | null;
    severity: string;
    onClose: (event: React.SyntheticEvent<any> | Event, reason?: SnackbarCloseReason) => void;
  }
  export default function AutohideSnackbar({ open, message ,onClose , severity}: AutohideSnackbarProps) {
    return (
      <div>
        <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={open}
          autoHideDuration={2000}
          message={message}
          onClose={onClose}
        >
            <Alert
          onClose={onClose}
          severity={severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
        </Snackbar>
      </div>
    );
  }