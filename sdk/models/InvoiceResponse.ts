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
 * @interface InvoiceResponse
 */
export interface InvoiceResponse {
    /**
     * 
     * @type {number}
     * @memberof InvoiceResponse
     */
    amount: number;
    /**
     * 
     * @type {Date}
     * @memberof InvoiceResponse
     */
    date: Date;
    /**
     * 
     * @type {string}
     * @memberof InvoiceResponse
     */
    status?: InvoiceResponseStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof InvoiceResponse
     */
    clientId: number;
    /**
     * 
     * @type {number}
     * @memberof InvoiceResponse
     */
    id?: number;
}


/**
 * @export
 */
export const InvoiceResponseStatusEnum = {
    Pending: 'pending',
    Paid: 'paid'
} as const;
export type InvoiceResponseStatusEnum = typeof InvoiceResponseStatusEnum[keyof typeof InvoiceResponseStatusEnum];


/**
 * Check if a given object implements the InvoiceResponse interface.
 */
export function instanceOfInvoiceResponse(value: object): value is InvoiceResponse {
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('date' in value) || value['date'] === undefined) return false;
    if (!('clientId' in value) || value['clientId'] === undefined) return false;
    return true;
}

export function InvoiceResponseFromJSON(json: any): InvoiceResponse {
    return InvoiceResponseFromJSONTyped(json, false);
}

export function InvoiceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'date': (new Date(json['date'])),
        'status': json['status'] == null ? undefined : json['status'],
        'clientId': json['client_id'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function InvoiceResponseToJSON(json: any): InvoiceResponse {
    return InvoiceResponseToJSONTyped(json, false);
}

export function InvoiceResponseToJSONTyped(value?: InvoiceResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'amount': value['amount'],
        'date': ((value['date']).toISOString().substring(0,10)),
        'status': value['status'],
        'client_id': value['clientId'],
        'id': value['id'],
    };
}

