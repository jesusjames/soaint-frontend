import React,{useState, useEffect} from 'react';

export const FetchGithubHook = () =>  {
    
    const [state, setState] = useState({name: '', location: ''});
    
    //Similar al ciclo de vida ComponentDidMount
    // solo se ejecuta una vez al montarse el component ya que estoy
    // enviandole un array de dependencias vacío.
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        return fetch('https://api.github.com/users/workshopsjsmvd')
            .then(res => {
                //Cuando la promesa de respuesta se valida que la respuesta este ok
                // y si quiero valido tambien el codigo status de la respuesta
                if (res.ok) {
                    //si la respuesta es correcta, obtengo el objeto json de la respuesta
                    //o la data con el metodo .json() que viene en el prototype del response
                    return res.json();
                }
            })
            .then(json => {
                // ya teniendo acceso a los datos podemos actualizar el estado
                // para generar otro nuevo render con la nueva data
                setState({
                    name: json.name,
                    location: json.location
                })
            })
            // atrapamos cualquier error del fetch con un catch y lo imprimos
            .catch(error => console.log('Hubo un error en la petición: ' + error.message));
    }

    
    // destructuración de data
    const { name, location } = state;

    return (
        <>
            <h1>Componente funcional hooks</h1>
            <h1 key="name">{`Nombre: ${name}`}</h1>
            <h1 key="location">{`País: ${location}`}</h1>
        </>
    );
}

export default FetchGithubHook;