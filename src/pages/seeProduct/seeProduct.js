import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useAxiosGet from "../../hooks/useAxiosGet"
import useAxiosPut from "../../hooks/useAxiosPut"

const UpdateProduct = ()=>{
    let {productId} = useParams()
    const [product, error, isLoading, getProduct] = useAxiosGet(`http://localhost:8000/product/${productId}`)
    const [title,setTitle] = useState('')
    const [description, setDescription] =useState('')
    const [image,setImage] = useState(null)
    const [price,setPrice] = useState('')

    const formData = new FormData()
    formData.append("title",title)
    formData.append('description',description)
    formData.append('image',image)
    formData.append('price',price)
    const [data,errorData,isLoadingData, putData] = useAxiosPut(`http://localhost:8000/product/${productId}`,formData,{headers:{'Content-Type': 'multipart/form-data'}})
    const handleSubmit = (e)=>{
        e.preventDefault()
        putData()
    }
    useEffect(()=>{
        if(product){
            setTitle(product.title)
            setDescription(product.description)
            setPrice(product.price)
        }
    },[product])

    return(
        <>
        {data && data.message}
        {error &&<p>{error}</p>}
        {isLoading ?
            <p>Chargement en cours</p>
        :
        <div>
            <p>
            <label>Title :</label>
            <span> {title}</span>
            </p>
            <p>
            <label>Description :</label>
            <span> {description}</span>
            </p>
            <p>
            <label>Image :</label>
            <img alt="preview" src={'http://localhost:8000/'+product.imageUrl} />
            </p>
            <p>
            <label>Price :</label>
            <span> {price}</span>
            </p>
        </div>
        }
        </>
        
    )
}

export default UpdateProduct;