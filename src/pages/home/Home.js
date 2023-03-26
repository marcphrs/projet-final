import {useState} from 'react'
import { Link } from 'react-router-dom'
import useAxiosGet from '../../hooks/useAxiosGet'
import style from '../home/home.module.css'

const Home = ()=>{
    const [products,errorProducts,isLoadingProducts,refreshProducts] = useAxiosGet('http://localhost:8000/product')
    return(
        <>
            <header>
            <button><Link to="/product/create">Créer un product</Link></button>
                <h1>Projet CRUD de Marc B2_WEB pour Charly</h1>
            </header>
            {isLoadingProducts ?
                <p>Chargement des données en cours...</p>
            :
            <table>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>url de l'image</th>
                <th>price</th>
                <th>Voir</th>
                <th>Modifier</th>
                <th>Supprimer</th>
            </tr>
            {products.map((p)=>(
                <tr>
                    <td>{p.title}</td>
                    <td>{p.description}</td>
                    <td>{p.imageUrl}</td>
                    <td>{p.price}</td>
                    <td><Link to={`/product/see/${p._id}`}>Voir</Link></td>
                    <td><Link to={`/product/update/${p._id}`}>Modifier</Link></td>
                    <td><Link to={`/product/delete/${p._id}`}>Supprimer</Link></td>
                </tr>
            ))}
        </table>
            }
        </>
    )
}

export default Home