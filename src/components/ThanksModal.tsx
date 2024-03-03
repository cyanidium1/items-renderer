import { Close } from "@mui/icons-material";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import React from "react";

interface ThanksProps {
    open: boolean;
    onClose: () => void;
}

const ThanksModal: React.FC<ThanksProps> = ({ open, onClose }) => (
    <Modal open={open} onClose={onClose}>
        <Box
            className='rounded-2xl bg-modal '
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 300,
                boxShadow: 24,
                p: 4,
            }}
        >
            <IconButton
                sx={{ position: 'absolute', top: 0, right: 0 }}
                onClick={onClose}
            >
                <Close />
            </IconButton>
            <Typography className='text-center' variant="h6" component="div">
                Спасибо за ваш заказ!
            </Typography>
            <Typography className='text-center'>
                Мы свяжемся с Вами в ближайшее время.
            </Typography>
        </Box>
    </Modal>
);

export default ThanksModal