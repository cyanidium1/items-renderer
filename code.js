const API_KEY = '176800db-c1ca-45aa-abe7-dba944a82968';
const BASKET = 'menu';

const foodNames = ['Вареники', 'Пельмени', 'Персики', 'Жаренные гвозди'];

const requestData = {
    sections: foodNames,
};

fetch(`https://getpantry.cloud/apiv1/pantry/${API_KEY}/basket/${BASKET}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
})
    .then(response => response.json())
    .then(data => {
        console.log('Menu updated successfully:', data);
    })
    .catch(error => {
        console.error('Error updating menu:', error);
    });
