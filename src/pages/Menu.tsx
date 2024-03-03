import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Container from "@mui/material/Container";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import MenuSection from "../components/MenuSection";
import { Fab, Tabs } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../redux/menuSlice";
import Cart from "../components/Cart";
import OrderFormModal from "../components/OrderFormModal";
import ThanksModal from "../components/ThanksModal";
import { RootState } from "../redux/store";
import PromoCard from "../components/PromoCard";
import { styled } from "@mui/system";

import SwipeIcon from '@mui/icons-material/Swipe';

const ScrollableContainer = styled(Box)({
  display: "flex",
  overflowX: "auto",
  maxWidth: "100%",
  scrollbarWidth: "thin",
  "::-webkit-scrollbar": {
    width: "8px",
  },
});

// const API_KEY = '176800db-c1ca-45aa-abe7-dba944a82968'
// const BASKET = 'menu'
// axios.get(`https://getpantry.cloud/apiv1/pantry/${API_KEY}/basket/${BASKET}`)

// interface MenuItem {
//     name: string;
//     items: Array<any>;
// }

const Menu: React.FC = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state: RootState) => state.menuState.menu);
  const promoItems = menu
    .map((item) => item.items)
    .flat()
    .filter((item) => item.promoPrice);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [value, setValue] = useState("1");
  const [loading, setLoading] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 767);

  // modals
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isThanksModalOpen, setIsThanksModalOpen] = useState(false);

  const totalAmount = cartItems.reduce(
    (total: number, item: { price: number; quantity: number }) =>
      total + item.price * item.quantity,
    0
  );
  useEffect(() => {
    axios
      .get(
        "https://65bb61a052189914b5bbeb61.mockapi.io/menu"
        // `https://api.jsonstorage.net/v1/json/543d57dc-bf32-4cf7-851a-9ba536178e76/873e8471-e741-44c3-aa20-583474238c4e`
      )
      .then((response) => {
        dispatch(setMenu(response.data[0]?.sections || []));
        // setMenu(response.data.sections || []);
        setLoading(false);
        return response.data;
      })
      .catch((error) => {
        console.error("Error fetching menu data:", error);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <section className="bg-menu bg-no-repeat bg-cover bg-center min-h-[100vh]">
      <Container
        sx={{ paddingTop: "16px", paddingBottom: "116px" }}
        maxWidth="xl"
      >
        <Box>
          {loading ? (
            <CircularProgress
              size={70}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#FFAA90",
              }}
            />
          ) : menu && menu.length > 0 ? (
            <>
              {promoItems.length > 0 && (
                <>
                  {/* promo */}
                  <div className="flex justify-between">
                    <p className="text-gray-100 font-semibold mb-4 md:text-2xl">
                      Акция
                    </p>
                    <div className="md:hidden" >
                      <SwipeIcon />
                    </div>
                  </div>
                  <ScrollableContainer className="flex gap-4 mb-4">
                    {promoItems.map((item, idx) => (
                      <PromoCard item={item} key={idx} />
                    ))}
                  </ScrollableContainer>
                </>
              )}

              {/* menu */}
              <TabContext value={value}>
                <div className="md:flex md:items-start phone:block gap-4">
                  {/* список доступных категорий еды */}

                  {/* <div className="hidden md:block md:min-w-[225px]"></div> */}
                  <Tabs
                    orientation={isLargeScreen ? "vertical" : "horizontal"}
                    variant="scrollable"
                    scrollButtons={!isLargeScreen}
                    value={value}
                    onChange={handleChange}
                    sx={{

                      top: "20px", // Настройте отступ сверху, как вам нужно
                      zIndex: 1000,
                      padding: 0,
                      "@media (min-width:768px)": {
                        position: "sticky",
                        padding: "16px",
                        minWidth: "225px",
                        borderRadius: "20px",
                        backgroundColor: "#FBF9F7",
                      },

                      "& .MuiTabs-indicator": {
                        display: "none",
                      },
                    }}
                  >
                    {menu.map((el, index) => (
                      <Tab
                        sx={{
                          padding: "8px 12px",
                          borderRadius: "100px",
                          border: "1px solid #FFAA90",
                          marginBottom: "12px",
                          marginRight: "16px",
                          backgroundColor: "#FFFFFF",

                          "&.Mui-selected": {
                            color: "#000000",
                            fontWeight: 500,
                            backgroundColor: "#FFAA90",
                          },

                          "@media (min-width:768px)": {
                            marginRight: 0,
                            backgroundColor: "transparent",
                          },
                        }}
                        label={el.name}
                        key={index}
                        value={`${index + 1}`}
                      />
                    ))}
                  </Tabs>
                  {/* </Box> */}
                  {/* список еды в категории */}
                  {menu.map((el, index) => (
                    <TabPanel
                      sx={{ padding: 0 }}
                      value={`${index + 1}`}
                      key={index}
                    >
                      <MenuSection data={el.items} />
                    </TabPanel>
                  ))}
                  {/* корзина icon */}
                  {cartItems.length > 0 && (
                    <div className="fixed bottom-5 flex justify-center w-full">
                      <Fab
                        variant="extended"
                        onClick={() => setIsCartOpen(true)}
                      >
                        <ShoppingCartIcon />
                        Ваш заказ ({cartItems.length})
                      </Fab>
                    </div>
                  )}
                  <Cart
                    setIsCartOpen={setIsCartOpen}
                    open={isCartOpen}
                    setIsOrderModalOpen={setIsOrderModalOpen}
                    totalAmount={totalAmount}
                  />
                  <OrderFormModal
                    onClose={() => setIsOrderModalOpen(false)}
                    open={isOrderModalOpen}
                    totalAmount={totalAmount}
                    setIsThanks={setIsThanksModalOpen}
                  />
                  <ThanksModal
                    onClose={() => setIsThanksModalOpen(false)}
                    open={isThanksModalOpen}
                  />
                </div>
              </TabContext>
            </>
          ) : (
            <p>Нет доступных блюд.</p>
          )}
        </Box>
      </Container>
    </section>
  );
};

export default Menu;
