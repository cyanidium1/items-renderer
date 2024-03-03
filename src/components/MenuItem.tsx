import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Button, Box, CardActions } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
// import fallbackImg from "../images/fallback.jpg";

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
        marginBottom: 0,
      }}
    >
      <Box
        sx={{
          minHeight: "100%",
          display: "flex",

          "@media (min-width:768px)": {
            flexDirection: "column",
          },
        }}
      >
        <CardMedia
          component="img"
          height="100"
          image={
            item.photo ||
            "https://res.cloudinary.com/dbfdkml1k/image/upload/v1707057787/fallback_nwcghc.jpg"
          }
          alt={item.name}
          sx={{
            width: "112px",
            height: "152px",
            borderRadius: "8px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            margin: "8px 0 8px 8px",

            "@media (max-width:767px)": {
              minWidth: "112px",
              maxWidth: "112px", height: "auto"
            },
            "@media (min-width:768px)": {
              margin: "16px 16px 0",
              width: "auto",

            },
          }}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            fontSize: "10px",

            padding: "8px",
            "@media(min-width:768px)": {
              fontSize: "18px",
              padding: "16px",
            },
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              color: "#762507",
              fontSize: " 18px",
              fontWeight: 600,
            }}
          >
            {item.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              flexGrow: 1,
              color: "#252525",
              marginBottom: 2,
              fontSize: "10px",
              "@media(min-width:600px)": {
                fontSize: "14px",
              },
            }}
          >
            {item.description}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", gap: "4px" }}>
              <Typography
                variant="body1"
                sx={{
                  color: "#252525",
                  fontWeight: 700,
                  textDecoration: priceTextDecoration,
                  "@media(max-width:767px)": {
                    fontSize: "12px",
                  },
                }}
              >
                {item.price}
              </Typography>
              {isPromo && (
                <Typography
                  variant="body1"
                  sx={{
                    color: "#ff0000",
                    fontWeight: 700,
                    "@media(max-width:767px)": {
                      fontSize: "12px",
                    },
                  }}
                >
                  {item.promoPrice}
                </Typography>
              )}
              <Typography
                variant="body1"
                sx={{
                  color: priceTextColor,
                  fontWeight: 700,
                  "@media(max-width:767px)": {
                    fontSize: "12px",
                  },
                }}
              >
                лек
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                color: "#252525",
                fontWeight: 700,
                "@media(max-width:767px)": {
                  fontSize: "12px",
                },
              }}
            >
              {item.portionSize}
            </Typography>
          </Box>

          {/* <Typography variant="body1">
            Availability: {item.availability}
          </Typography> */}
        </CardContent>
        <CardActions
          className="flex justify-center cardActions"
          sx={{
            minHeight: "72px",
            "@media(max-width:767px)": {
              minWidth: "68px",
            },
          }}
        >
          <Button
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            onClick={handleAddToCart}
          >
            <AddIcon
              sx={{
                color: "#000",
                height: 33,
                width: 33,
                transition: "all 300ms linear",
                "&:hover": {
                  height: 38,
                  width: 38,
                },
              }}
            />
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}

export default MenuItem;
