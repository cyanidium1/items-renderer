import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Container from "@mui/material/Container";
import { CircularProgress } from "@mui/material";
import MenuSection from "../components/MenuSection";
import { Tabs } from "@mui/material";



// const API_KEY = '176800db-c1ca-45aa-abe7-dba944a82968'
// const BASKET = 'menu'
// axios.get(`https://getpantry.cloud/apiv1/pantry/${API_KEY}/basket/${BASKET}`)

// interface MenuItem {
//     name: string;
//     items: Array<any>;
// }

const Menu: React.FC = () => {
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  const [value, setValue] = useState("1");
  const [loading, setLoading] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 767);

  // modals

  const menu = [
    { name: "!!!FILTERS NOT CONNECTED" },

    { name: "Постельное белье" },
    { name: "Ткань" },
    { name: "Полотенца " },
    { name: "Наволочки" },
    { name: "Детское постельное" },
  ]


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
                      <MenuSection />
                    </TabPanel>
                  ))}

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
