import type { HttpClient } from "@/core/interfaces/http-client.interface";
import axios from "axios";

export class AxiosHttpClient implements HttpClient {
    private httpClient: any;

    constructor() {
        this.httpClient = axios.create();
    }
    get(arg: any): any {
        return this.httpClient.get(arg);
    }
}