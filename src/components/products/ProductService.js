import axios from "axios";

const PRODUCTS_API_BASE_URL = "http://localhost:3333/products";

class ProductService {
    saveProduct(product) {
        return axios.post(CATEGORY_API_BASE_URL, product);
    }

    getProducts() {
        return axios.get(CATEGORY_API_BASE_URL);
    }

    deleteProduct(id) {
        return axios.delete(CATEGORY_API_BASE_URL + "/" + id);
    }

    getProductById(id) {
        return axios.get(CATEGORY_API_BASE_URL + "/" + id);
    }

    updateProduct(product, id) {
        return axios.put(CATEGORY_API_BASE_URL + "/" + id, product);
    }
}