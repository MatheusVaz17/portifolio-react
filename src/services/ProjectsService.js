import React, { useEffect, useState } from "react";
import api from './api';

const getProjectsData = async () => {

    const dataProjects = await api
    .get("/user/get-projects")
    .then((response) => (response.data))
    .catch((err) => {
        console.log("Erro: " + err);
    });

    return dataProjects;
    
    // return [
    //         {
    //             id: '1000',
    //             code: 'f230fh0g3',
    //             name: 'Bamboo Watch',
    //             description: 'Product Description',
    //             image: 'bamboo-watch.jpg',
    //             price: 65,
    //             category: 'Accessories',
    //             quantity: 24,
    //             inventoryStatus: 'INSTOCK',
    //             rating: 5
    //         },
    // ];

};

export default getProjectsData;