import axios from "axios";

const PRODUCT_API_BASE_URL = "http://localhost:3333/products";

class ProductService {
    saveProduct(product) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getProducts() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    deleteProduct(id) {
        return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
    }

    getProductById(id) {
        return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
    }

    updateProduct(product, id) {
        return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee);
    }
}

export default new ProductService();