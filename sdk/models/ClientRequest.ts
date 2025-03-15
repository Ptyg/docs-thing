/* tslint:disable */
/* eslint-disable */
/**
 * CRM System API
 * API for managing Clients and Invoices
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ClientRequest
 */
export interface ClientRequest {
    /**
     * 
     * @type {string}
     * @memberof ClientRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ClientRequest
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof ClientRequest
     */
    phone?: string;
}

/**
 * Check if a given object implements the ClientRequest interface.
 */
export function instanceOfClientRequest(value: object): value is ClientRequest {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    return true;
}

export function ClientRequestFromJSON(json: any): ClientRequest {
    return ClientRequestFromJSONTyped(json, false);
}

export function ClientRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClientRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'email': json['email'],
        'phone': json['phone'] == null ? undefined : json['phone'],
    };
}

export function ClientRequestToJSON(json: any): ClientRequest {
    return ClientRequestToJSONTyped(json, false);
}

export function ClientRequestToJSONTyped(value?: ClientRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'email': value['email'],
        'phone': value['phone'],
    };
}

