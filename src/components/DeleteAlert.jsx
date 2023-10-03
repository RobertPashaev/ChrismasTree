import * as React from 'react';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DeleteForever from '@mui/icons-material/DeleteForever';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

export default function DeleteAlert({ card, handleDelete }) {
  const [open, setOpen] = React.useState(false);

  const handleDeleteClick = () => {
    handleDelete(card);
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant='outlined'
        color='danger'
        
        onClick={() => setOpen(true)}
        sx={{ position: 'absolute', top: '5px', left: '10px', width: '30px' }}
      >
        <DeleteForever />
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog variant='outlined' role='alertdialog'>
          <DialogTitle sx={{ alignItems: 'center' }}>
            <WarningRoundedIcon />
            Подтверждение
          </DialogTitle>
          <Divider />
          <DialogContent>Вы уверены что хотите удалить товар?</DialogContent>
          <DialogActions>
            <Button
              variant='solid'
              color='danger'
              onClick={() => setOpen(false)}
            >
              Нет
            </Button>
            <Button
              variant='plain'
              color='success'
              onClick={handleDeleteClick}
            >
              Да
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}