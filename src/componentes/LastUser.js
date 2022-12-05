import { useEffect, useState } from 'react';

export default function LastUser() {

  const [lastUser, setlastUser] = useState([]);
  const [imagen, setImagen] = useState([]);

  //Último user
  useEffect(() => {
    const url = "/api/users/lastUser";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setlastUser(data)
        setImagen(data.avatarURL)
      })
  }, []);

  return (
    <>
      {!lastUser ? "cargando..." :

        <div className="card bg-transparent pt-3">
            <h5 className="card-body text-center mb-0">Último usuarix creado</h5>
          <img src="/user_avatar_.jpg" alt="imagen user" /> 
          <div className="card-body text-light">
            <h4 className="card-title">{lastUser.userName}</h4>
            <ul>
              <li><b>Nombre completo:</b> Pini Clavero {lastUser.name}</li>
              <li><b>Email:</b> {lastUser.email} pini.clavero@include.com</li>
              <li><b>ID:</b> {lastUser.id} 10</li>
            </ul>
          </div>
        </div>
      }

    </>

  )


}
