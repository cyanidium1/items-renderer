import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { RootState } from "../redux/store";
import { Close } from "@mui/icons-material";

interface CartProps {
  open: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  setIsOrderModalOpen: (isOpen: boolean) => void;
  totalAmount: number;
}

const Cart: React.FC<CartProps> = ({
  setIsCartOpen,
  open,
  setIsOrderModalOpen,
  totalAmount,
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  useEffect(() => {
    if (cartItems.length === 0) {
      setIsCartOpen(false);
    }
  }, [cartItems, setIsCartOpen]);

  const handleIncrement = (id: string) => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrement = (id: string) => {
    dispatch(decrementQuantity({ id }));
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart({ id }));
  };

  const handleSubmit = () => {
    setIsOrderModalOpen(true);
    setIsCartOpen(false);
  };

  return (
    <Modal open={open} onClose={() => setIsCartOpen(false)}>
      <Box

        className="bg-modal flex flex-col justify-center rounded-2xl"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
          p: 4,
          width: { xs: '90%', sm: 'auto' },
        }}
      >
        <IconButton
          sx={{ position: "absolute", top: 0, right: 0 }}
          onClick={() => setIsCartOpen(false)}
        >
          <Close />
        </IconButton>
        <Typography className="text-center" variant="h6" component="div">
          Ваш заказ
        </Typography>
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
          {cartItems.map((item) => (
            <Box
              className="bg-white rounded-xl p-2"
              key={item.id}
              display={{ xs: 'block', sm: 'flex' }}
              justifyContent="space-between"
              alignItems="center"
              mt={2}
            >
              <Box className="w-full  flex justify-between sm:block">
                <Typography>{item.name}, {item.portionSize}</Typography>
                <Box display="flex" justifyContent="space-between">
                  <Typography>{item.price} лек</Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" justifyContent='center'>
                <IconButton
                  onClick={() => {
                    item.quantity === 1
                      ? handleRemove(item.id)
                      : handleDecrement(item.id);
                  }}
                  aria-label="delete"
                >
                  <RemoveIcon />
                </IconButton>
                <Typography className="rounded-full bg-darkRose w-8 h-8 flex justify-center items-center text-gray">
                  {item.quantity}
                </Typography>
                <IconButton
                  onClick={() => handleIncrement(item.id)}
                  aria-label="add"
                >
                  <AddIcon />
                </IconButton>
                <IconButton
                  onClick={() => handleRemove(item.id)}
                  aria-label="removeAll"
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          ))}
        </div>
        <Typography
          className="text-center "
          variant="h6"
          component="div"
          sx={{ mt: 2 }}
        >
          Итого: {totalAmount} Лек
        </Typography>
        {/* <Button
          variant="contained"
          color="primary"
          onClick={() => setIsCartOpen(false)}
          sx={{ mt: 2 }}
        >
          Закрыть
        </Button> */}
        <Button
          variant="contained"
          sx={{
            color: "black",
            fontWeight: 700,
            mt: 2,
            backgroundColor: "#FFAA90",
            "&:hover": {
              backgroundColor: "#E89F50", // Чуть темнее оранжевый цвет при наведении
            },
          }}
          onClick={handleSubmit}
        >
          Оформить заказ
        </Button>
      </Box>
    </Modal>
  );
};

export default Cart;
