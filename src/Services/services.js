import { Component } from "react";

export default class Services extends Component {
    
    async getResourse(url, options) {
        const response = await fetch(url, options);

        if(!response.ok) {
            return new Error(`Could not fetch ${url} received ${response.status}`)
        };

        const body = await response.json();

        return body;
    };

    getSearchId() {
        return this.getResourse(`https://front-test.beta.aviasales.ru/search`);
    };

    getTickets(searchId) {
        return this.getResourse(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
    };
}