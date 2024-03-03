import React, { useState, useEffect } from 'react';
import { Box, Button, IconButton, Modal, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import pinIcon from '../images/location-pin.svg';

interface MapModalProps {
    open: boolean;
    onClose: () => void;
    setCoords: React.Dispatch<React.SetStateAction<[number, number]>>;
}

const MapModal: React.FC<MapModalProps> = ({ open, onClose, setCoords }) => {
    const [selectedPosition, setSelectedPosition] = useState<[number, number] | null>(null);

    const handleConfirm = () => {
        if (selectedPosition) {
            setCoords(selectedPosition);
            onClose();
        }
    };

    const customIcon = L.icon({
        iconUrl: pinIcon,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setSelectedPosition([latitude, longitude]);
            },
            (error) => {
                console.error('Error getting location:', error.message);
                // В случае ошибки, устанавливаем координаты Дурреса
                setSelectedPosition([41.3236, 19.4419]);
            }
        );
    }, []);

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                className='rounded-2xl bg-modal'
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',

                    boxShadow: 24,
                    p: 0,
                }}
            >
                <Box className='w-96 h-[500px] p-4'>
                    <IconButton
                        sx={{ position: 'absolute', top: 0, right: 0 }}
                        onClick={onClose}
                    >
                        <Close />
                    </IconButton>
                    <Typography className='text-center' variant='h6' component='div'>
                        Выберите ваше местоположение
                    </Typography>
                    <Box className='w-full h-4/5 my-4'>
                        <MapContainer center={selectedPosition || [41.3236, 19.4419]} zoom={13} style={{ width: '100%', height: '100%' }} scrollWheelZoom={true}>
                            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                            {selectedPosition && <Marker icon={customIcon} position={selectedPosition}><Popup>Ваше местоположение</Popup></Marker>}
                            <MapEventHandler setSelectedPosition={setSelectedPosition} />
                        </MapContainer>
                    </Box>
                    <Button variant='outlined' fullWidth onClick={handleConfirm}>Подтвердить</Button>
                </Box>
            </Box>
        </Modal>
    );
};

interface MapEventHandlerProps {
    setSelectedPosition: React.Dispatch<React.SetStateAction<[number, number] | null>>;
}

const MapEventHandler: React.FC<MapEventHandlerProps> = ({ setSelectedPosition }) => {
    const map = useMap();

    useEffect(() => {
        map.invalidateSize();
    }, [map]);

    map.addEventListener('click', (e) => {
        setSelectedPosition([e.latlng.lat, e.latlng.lng]);
    });

    return null;
};

export default MapModal;
