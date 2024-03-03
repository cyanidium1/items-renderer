import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/material";

interface PromoCardProps {
  item: any;
}

const PromoCard: React.FC<PromoCardProps> = (props) => {
  const { item } = props;

  return (
    <Card
      className="cardPromo"
      sx={{
        marginBottom: 0,
        height: "143px",
        minWidth: "275px",
        borderRadius: "8px",

        "@media(min-width:768px)": {
          height: "181px",
          minWidth: "348px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "100%",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexGrow: 1,
            "@media(max-width:600px)": {
              fontSize: "10px",
              padding: "8px",
            },
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              color: "#762507",
              fontSize: " 16px",
              fontWeight: 600,
            }}
          >
            {item.name}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="body1"
                sx={{
                  color: "#ff0000",
                  fontWeight: 700,
                  "@media(max-width:768px)": {
                    fontSize: "14px",
                  },
                }}
              >
                {item.promoPrice} лек
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#252525",
                  fontWeight: 700,
                  textDecoration: "line-through",
                  "@media(max-width:768px)": {
                    fontSize: "12px",
                  },
                }}
              >
                {item.price} лек
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                color: "#252525",
                fontWeight: 700,
                "@media(max-width:768px)": {
                  fontSize: "12px",
                },
              }}
            >
              {item.portionSize}
            </Typography>
          </Box>
        </CardContent>

        <CardMedia
          component="img"
          // height="100"
          image={
            item.photo ||
            "https://res.cloudinary.com/dbfdkml1k/image/upload/v1707057787/fallback_nwcghc.jpg"
          }
          alt={item.name}
          sx={{
            margin: "16px 16px 0",
            width: "auto",
            borderRadius: "8px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            "@media (max-width:768px)": {
              margin: "8px 8px 8px 0",
              minWidth: "114px",
              maxWidth: "114px",
            },
            "@media (min-width:768px)": {
              margin: "8px 8px 8px 0",
              minWidth: "153px",
              maxWidth: "153px",
            },
          }}
        />
      </Box>
    </Card>
  );
};

export default PromoCard;
