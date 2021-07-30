import { Component } from "react";

export default class Services extends Component {

    API_BASE = 'https://front-test.beta.aviasales.ru/';

    getSearchId = async () => {
        const response = await fetch(`${this.API_BASE}search`);
        const body = await response.json();
        
        return body;
    }

    getTickets = async (searchId) => {
        try {
            const response = await fetch(`${this.API_BASE}tickets?searchId=${searchId}`);
            const { tickets, stop} = await response.json();

            return [tickets, stop];

        } catch (error) { 
            return [[], false];
        }
    }
}