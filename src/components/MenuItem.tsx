import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Button, Box, CardActions } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

interface MenuItemProps {
  item: any;
}

function MenuItem(props: MenuItemProps) {
  const { item } = props;
  const isPromo = !!item.promoPrice;
  const priceTextDecoration = isPromo ? "line-through" : "none";
  const priceTextColor = isPromo ? "#ff0000" : "#252525";

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        portionSize: item.portionSize,
        price: item.price,
        quantity: 1,
      })
    );
  };

  return (
    <Card
      data-aos="fade-up"
      data-aos-duration="1500"
      sx={{
        marginBottom: 2,
      }}
    >
      <Box>
        <CardMedia
          component="img"
          height="140"
          image={item.photo || "https://via.placeholder.com/150"}
          alt={item.name}
          sx={{
            width: 140,
            objectFit: "cover",
          }}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography gutterBottom variant="h6" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {item.description.length > 100 ? `${item.description.substring(0, 100)}...` : item.description}
          </Typography>

          <Typography variant="body2" color="text.primary">
            Цена:{" "}
            <span style={{ textDecoration: priceTextDecoration, color: priceTextColor }}>
              {item.price} грн
            </span>
          </Typography>
          {/* Добавленные поля */}
          <Typography variant="body2" color="text.secondary">
            Постельное белье: {item.bedsheet}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Цвет: {item.color}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Плотность: {item.density}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Пододеяльник: {item.duvet_cover}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Тип ткани: {item.fabric_type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Особенность наволочек: {item.pillowcase_feature}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Тип комплекта: {item.set_type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Тип: {item.type}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default MenuItem;
