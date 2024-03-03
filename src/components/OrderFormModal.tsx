import React, { useState, useEffect } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  IconButton,
  FormHelperText,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { sendMessage } from "../functions/sendMessage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { clearCart } from "../redux/cartSlice";
import MapModal from "./MapModal";

interface OrderFormModalProps {
  open: boolean;
  onClose: () => void;
  totalAmount: number;
  setIsThanks: (arg: boolean) => void;
}

interface FormValues {
  name: string;
  phone: number;
  city: string;
  location: string;
  messenger: string;
  deliveryComment: string;
}

const OrderFormModal: React.FC<OrderFormModalProps> = ({
  open,
  onClose,
  totalAmount,
  setIsThanks,
}) => {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const dispatch = useDispatch();

  const [mapModal, setMapModal] = useState(false);
  const [coords, setCoords] = useState(['', '']);

  const toggleMap = () => {
    setMapModal(!mapModal)
  }

  const cartItems = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    if (coords[0] === '') {
      return
    }
    const latitude = coords[0];
    const longitude = coords[1];

    const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
    setValue("location", mapsLink);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coords]);

  const onSubmit: SubmitHandler<FormValues> = (orderData) => {
    const order = cartItems
      .map((item) => `${item.name} ${item.quantity}шт`)
      .join(",\n ");

    const message = `Пользователь ${orderData.name} из ${orderData.city
      } оставил заказ на вашем сайте в ${new Date().toLocaleTimeString()} на сумму ${totalAmount} лек. \nЕго телефон - ${orderData.phone
      }, мессенджер - ${orderData.messenger}, координаты - ${orderData.location
      }. ${orderData.deliveryComment ? "Так же пользователь оставил комментарий: " : ""} ${orderData.deliveryComment ? orderData.deliveryComment : ""}  \nЗАКАЗ: \n ${order}`;
    sendMessage(message);
    onClose();
    setIsThanks(true);
    dispatch(clearCart());
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        className="rounded-2xl bg-modal "
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: '90%', sm: 'auto' },
          boxShadow: 24,
          p: 4,
        }}
      >
        <IconButton
          sx={{ position: "absolute", top: 0, right: 0 }}
          onClick={onClose}
        >
          <Close />
        </IconButton>
        <Typography className="text-center" variant="h6" component="div">
          Оформление доставки
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center"
        >
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{
              required: "Обязательное поле",
              minLength: {
                value: 2,
                message: "Минимум 2 символа",
              },
            }}
            render={({ field }) => (
              <div className="relative">
                <TextField
                  label="Имя"
                  {...field}
                  error={Boolean(errors.name)}
                  fullWidth
                  margin="normal"
                />
                {errors.name && (
                  <FormHelperText
                    error={Boolean(errors.name)}
                    sx={{
                      position: "absolute",
                      right: 0,
                      bottom: "-12px",
                    }}
                  >
                    {errors.name.message}
                  </FormHelperText>
                )}
              </div>
            )}
          />

          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Обязательное поле",
              minLength: {
                value: 6,
                message: "Минимум 6 символов",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "Только цифры",
              },
            }}
            render={({ field }) => (
              <div className="relative">
                <TextField
                  label="Албанский номер телефона"
                  {...field}
                  error={Boolean(errors.phone)}
                  fullWidth
                  margin="normal"
                />
                {errors.phone && (
                  <FormHelperText
                    error={Boolean(errors.phone)}
                    sx={{
                      position: "absolute",
                      right: 0,
                      bottom: "-12px",
                    }}
                  >
                    {errors.phone.message}
                  </FormHelperText>
                )}
              </div>
            )}
          />

          <Controller
            name="city"
            control={control}
            defaultValue=""
            rules={{ required: "Обязательное поле" }}
            render={({ field }) => (
              <>
                <FormControl fullWidth margin="normal">
                  <InputLabel error={Boolean(errors.city)} id="city-label">
                    Город
                  </InputLabel>
                  <Controller
                    name="city"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Обязательное поле" }}
                    render={({ field }) => (
                      <div className="relative">
                        <Select
                          fullWidth
                          labelId="city-label"
                          label="Город"
                          {...field}
                          error={Boolean(errors.city)}
                        >
                          <MenuItem value={"Дуррес"}>Дуррес</MenuItem>
                          <MenuItem value={"Тирана"}>Тирана</MenuItem>
                          <MenuItem value={"Саранда"}>Саранда</MenuItem>
                          <MenuItem value={"Влера"}>Влера</MenuItem>
                        </Select>
                        <FormHelperText
                          error={Boolean(errors.city)}
                          sx={{
                            position: "absolute",
                            right: "-12px",
                            bottom: "-20px",
                          }}
                        >
                          {errors.city?.message}
                        </FormHelperText>
                      </div>
                    )}
                  />
                </FormControl>
              </>
            )}
          />

          {/* <FormControlLabel
            control={
              <Checkbox
                sx={{
                  "&.Mui-checked": {
                    color: "#FFAA90", // Колір коли чекбокс відмічено
                  },
                }}
                checked={checked}
                onChange={handleChange}
              />
            }
            label="Использовать мою локацию"
            sx={{ color: "#00000099" }}
          /> */}

          <Controller
            name="location"
            control={control}
            rules={{ required: "Обязательное поле" }}
            defaultValue=""
            render={({ field }) => (
              <div className="relative">
                <TextField
                  label="Ваша локация (ссылка на GMaps)"
                  {...field}
                  error={Boolean(errors.location)}
                  fullWidth
                  margin="normal"
                />
                {errors.location && (
                  <FormHelperText
                    error={Boolean(errors.location)}
                    sx={{
                      position: "absolute",
                      right: 0,
                      bottom: "-12px",
                    }}
                  >
                    {errors.location.message}
                  </FormHelperText>
                )}
              </div>
            )}
          />
          <p className="text-center text-sm mb-2">или</p>
          <Button variant="outlined" onClick={toggleMap} >Указать на карте</Button>
          <Controller
            defaultValue=""
            name="messenger"
            control={control}
            rules={{ required: "Обязательное поле" }}
            render={({ field }) => (
              <div className="relative">
                <TextField
                  label="Telegram/Whatsapp"
                  {...field}
                  error={Boolean(errors.messenger)}
                  fullWidth
                  margin="normal"
                />
                {errors.messenger && (
                  <FormHelperText
                    error={Boolean(errors.messenger)}
                    sx={{
                      position: "absolute",
                      right: 0,
                      bottom: "-12px",
                    }}
                  >
                    {errors.messenger.message}
                  </FormHelperText>
                )}
              </div>
            )}
          />

          <Controller
            defaultValue=""
            name="deliveryComment"
            control={control}
            render={({ field }) => (
              <TextField
                label="Комментарий"
                {...field}
                error={Boolean(errors.deliveryComment)}
                fullWidth
                margin="normal"
              />
            )}
          />

          <Button
            type="submit"
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
          >
            Разместить заказ
          </Button>
        </form>
        <MapModal open={mapModal} onClose={toggleMap} setCoords={setCoords} />
      </Box>

    </Modal>
  );
};

export default OrderFormModal;
