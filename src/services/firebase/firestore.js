import { firestoreDb } from "./index"
import {
    getDocs,
    where,
    query,
    collection
} from 'firebase/firestore'
import { createAdapterProduct } from "../../adapters/productAdapter"

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId
            ? query(collection(firestoreDb, 'productos'), where('category', '==', categoryId))
            : collection(firestoreDb, 'productos')

        getDocs(collectionRef).then(response => {
            console.log(response)
            const productos = response.docs.map(doc => {
                return createAdapterProduct(doc)
            })
            resolve(productos)
        })
        .catch(error => {
            reject(error)
        })
    })
}