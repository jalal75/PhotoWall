export default class TodoService {

    static getPhotoist () {
        return fetch('http://localhost:4000/photos')
        .then(response => this.checkStatusCode(response))   
    }

    static AddPhoto (data) {        
        return fetch('http://localhost:4000/photos', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
        .then(response => this.checkStatusCode(response))
    }

    static checkStatusCode (response) {
        if (response.status === 200 || response.status === 201) {
            return response.json();
        } else {
            throw response.json();
        }
    }
}