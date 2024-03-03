import { Box } from "@mui/system"
import React from "react"
import img from "../images/delivery.jpg";
import { Typography } from "@mui/material";

export default function Delivery() {
    return (
        <Box className="p-4 rounded-lg md:flex md:px-24 md:justify-around ">
            <img src={img} alt="Delivery" width='500px' className="rounded-xl" />
            <Box className='flex flex-col justify-center items-center'>
                <Typography variant="h6" className="mb-4">
                    Расписание доставки:
                </Typography>
                <ul className="list-disc pl-6">
                    <li className="mb-2">
                        <Typography>
                            <span className="font-bold">Дуррес:</span> ежедневно
                        </Typography>
                    </li>
                    <li className="mb-2">
                        <Typography>
                            <span className="font-bold">Тирана:</span> вторник / пятница
                        </Typography>
                    </li>
                    <li className="mb-2">
                        <Typography>
                            <span className="font-bold">Влера / Саранда:</span> четверг
                        </Typography>
                    </li>
                </ul>
                <Typography>
                    Возможен самовывоз в Дурресе
                </Typography>
            </Box>
        </Box>
    )
}