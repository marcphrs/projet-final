import { useState, useEffect } from "react"
import axios from 'axios'
import useAxiosPost from "../../hooks/useAxiosPost"
import useAxiosGet from "../../hooks/useAxiosGet"

const CreateProduct = ()=>{
    const [title,setTitle] = useState('')
    const [description, setDescription] =useState('')
    const [image,setImage] = useState(null)
    const [price,setPrice] = useState("")
    const formData = new FormData()
    formData.append("title",title)
    formData.append('description',description)
    formData.append('image',image)
    formData.append('price',price)
    const [data, error, isLoading,postData] = useAxiosPost('http://localhost:8000/product',formData,{headers:{'Content-Type': 'multipart/form-data'}})
    const handleSubmit = (e)=>{
        e.preventDefault();
        postData()
    }
    return(
        <>
        {data && data.message}
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ecrivez le titre" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <input type="text" placeholder="Le contenue" value={description} onChange={(e)=>setDescription(e.target.value)} />
            <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
            {image && <img alt="preview" src={URL.createObjectURL(image)} />}
            <input type="number" placeholder="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            <button type="submit">Enregistrer</button>
        </form>
        </>
    )
}

export default CreateProduct
