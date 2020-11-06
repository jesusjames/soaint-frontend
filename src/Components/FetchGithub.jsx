import React from 'react';

class FetchGithub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            location: ''
        };
    }

    //Primer ciclo de vida del component, solo se ejecuta una vez al montarse
    //el DOM del componente, ejecución del render()
    componentDidMount() {
        //llamada a fetch a API
        this.getData();
    }

    getData = () => {
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
                this.setState({
                    name: json.name,
                    location: json.location
                })
            })
            // atrapamos cualquier error del fetch con un catch y lo imprimos
            .catch(error => console.log('Hubo un error en la petición: ' + error.message));
    }

    //El render se ejecuta de primero y es el encargado de mostrar el DOM
    render() {
        // destructuración de data
        const { name, location } = this.state;
        return (
            <>
                <h1>Componente de clase</h1>
                <h2 key="name">{`Nombre: ${name}`}</h2>
                <h2 key="location">{`País: ${location}`}</h2>
            </>
        );
    }
}

export default FetchGithub;