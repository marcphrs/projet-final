import {useEffect} from "react"
import {useNavigate, useParams} from "react-router-dom"
import useaxiosDelete from "../../hooks/useAxiosDelete"

const DeleteProduct = () => {
    let {productId} = useParams()
    const navigate = useNavigate()
    const [data, error, isLoading, deleteData] = useaxiosDelete ('http://localhost:8000/product/'+ productId)
        if(data){
            navigate('/')
        }
    return(
        <>
            {error && <p>Vous avez une erreur : {error.message}</p>}
            {isLoading && <p>Suppression en cours...</p>}
            <p>Etes-vous sur de vouloir supprimer ce produit ?</p>
            <button onClick={deleteData}>Oui</button>
        </>
    )
}
export default DeleteProduct;