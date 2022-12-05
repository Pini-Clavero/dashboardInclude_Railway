import { useEffect, useState } from 'react';

export default function UsersList() {

    const [users, setUsers] = useState([]);
    // const [urlusersList, setUrlusersList] = useState([])

    //Listado de useros
  useEffect(() => {
    const url = "/api/users";
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setUsers(data.users)
    })
  },[]);

  return (
    <div>
      <div className="card bg-transparent pt-3">
        <div className="card-body text-light">
          <h4 className="card-title text-center">Listado de usuarixs</h4>
            <ul>
            {!users ? "cargando..." : users.map((user, index) => {
              return  (
                    <li key ={index} > {user.id + ". " + user.name} </li>
                    )
                  })}
                  <li> Alex Moncagata </li>
                  <li> Ingrid Colombo </li>
                  <li> Ariel Weiss  </li>
                  <li> Eugenia Ferreira </li>
                  <li> Santiago Ackerley </li>
                  <li> Viviana Amherdt </li>
                  <li> Maria José Tell </li>
                  <li> Luisina Coronel </li>
                  <li> Pini Clavero </li>
            </ul>
            <a href="https://ecommerce-vercel-production.up.railway.app/user/loginRegister" target="_blank" className="btn btn-outline-secondary rounded-0 w-80 text-center">Aquí para Registrarte</a>
        </div>
      </div>
    </div>
  )

}