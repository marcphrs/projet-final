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
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ecrivez le titre" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <input type="text" placeholder="Le contenue" value={description} onChange={(e)=>setDescription(e.target.value)} />
            <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
            {image && <img alt="preview" src={URL.createObjectURL(image)} />}
            <input type="number" placeholder="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            <button type="submit">Modifier</button>
        </form>
        }
        </>
        
    )
}

export default UpdateProduct;