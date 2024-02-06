import axios from 'axios';

const categories = "products/discount"


export class RequestToTheServer {
    baseUrl = 'https://food-boutique.b.goit.study/api/'

    constructor(endPoint){
        this.endPoint = endPoint;
    }

    fetchBreeds(){
axios.get(`${this.baseUrl}${this.endPoint}`)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    })
    };
};

const request = new RequestToTheServer(categories);

request.fetchBreeds()