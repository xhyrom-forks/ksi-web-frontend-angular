/**
 * EduLint web API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.1
 * Contact: contact@edulint.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { AnalyzeResponse } from '../model/analyzeResponse';
import { CodeFile } from '../model/codeFile';
import { CodeRequest } from '../model/codeRequest';
import { Hash } from '../model/hash';
import { HashStr } from '../model/hashStr';
import { QueryConfig } from '../model/queryConfig';
import { TrueBoolean } from '../model/trueBoolean';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class APIService {

    protected basePath = 'https://edulint.com';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Analyzes the code with the given hash with the given version of EduLint
     * 
     * @param version The version of EduLint to use. Currently, you can only use \&quot;latest\&quot;.
     * @param hash the hash of the code to analyze
     * @param config extra configuration to use (equivalent to command line configuration described in [EduLint&#x27;s documentation](https://edulint.rtfd.io#configuration)).
     * @param use_cached_result enables/disables using cached linting results
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public analyzeUploaded(version: string, hash: HashStr, config?: QueryConfig, use_cached_result?: TrueBoolean, observe?: 'body', reportProgress?: boolean): Observable<AnalyzeResponse>;
    public analyzeUploaded(version: string, hash: HashStr, config?: QueryConfig, use_cached_result?: TrueBoolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AnalyzeResponse>>;
    public analyzeUploaded(version: string, hash: HashStr, config?: QueryConfig, use_cached_result?: TrueBoolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AnalyzeResponse>>;
    public analyzeUploaded(version: string, hash: HashStr, config?: QueryConfig, use_cached_result?: TrueBoolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling analyzeUploaded.');
        }

        if (hash === null || hash === undefined) {
            throw new Error('Required parameter hash was null or undefined when calling analyzeUploaded.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (config !== undefined && config !== null) {
            queryParameters = queryParameters.set('config', <any>config);
        }
        if (use_cached_result !== undefined && use_cached_result !== null) {
            queryParameters = queryParameters.set('use-cached-result', <any>use_cached_result);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<AnalyzeResponse>('get',`${this.basePath}/api/${encodeURIComponent(String(version))}/analyze/${encodeURIComponent(String(hash))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves the code with the given hash
     * 
     * @param hash hash of the code to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiCodeHashGet(hash: HashStr, observe?: 'body', reportProgress?: boolean): Observable<CodeFile>;
    public apiCodeHashGet(hash: HashStr, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CodeFile>>;
    public apiCodeHashGet(hash: HashStr, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CodeFile>>;
    public apiCodeHashGet(hash: HashStr, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (hash === null || hash === undefined) {
            throw new Error('Required parameter hash was null or undefined when calling apiCodeHashGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<CodeFile>('get',`${this.basePath}/api/code/${encodeURIComponent(String(hash))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Uploads some code
     * 
     * @param body information on the code to upload
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiCodePost(body: CodeRequest, observe?: 'body', reportProgress?: boolean): Observable<Hash>;
    public apiCodePost(body: CodeRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Hash>>;
    public apiCodePost(body: CodeRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Hash>>;
    public apiCodePost(body: CodeRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling apiCodePost.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<Hash>('post',`${this.basePath}/api/code`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Uploads some code and returns its analysis
     * This endpoint combines the /code and /api/{version}/analyze/{hash} endpoints.
     * @param body the code to upload and analyze
     * @param version The version of EduLint to use. Currently, you can only use \&quot;latest\&quot;.
     * @param config extra configuration to use (equivalent to command line configuration described in [EduLint&#x27;s documentation](https://edulint.rtfd.io#configuration)).
     * @param use_cached_result enables/disables using cached linting results
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiVersionAnalyzePost(body: CodeRequest, version: string, config?: QueryConfig, use_cached_result?: TrueBoolean, observe?: 'body', reportProgress?: boolean): Observable<AnalyzeResponse>;
    public apiVersionAnalyzePost(body: CodeRequest, version: string, config?: QueryConfig, use_cached_result?: TrueBoolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AnalyzeResponse>>;
    public apiVersionAnalyzePost(body: CodeRequest, version: string, config?: QueryConfig, use_cached_result?: TrueBoolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AnalyzeResponse>>;
    public apiVersionAnalyzePost(body: CodeRequest, version: string, config?: QueryConfig, use_cached_result?: TrueBoolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling apiVersionAnalyzePost.');
        }

        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling apiVersionAnalyzePost.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (config !== undefined && config !== null) {
            queryParameters = queryParameters.set('config', <any>config);
        }
        if (use_cached_result !== undefined && use_cached_result !== null) {
            queryParameters = queryParameters.set('use-cached-result', <any>use_cached_result);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<AnalyzeResponse>('post',`${this.basePath}/api/${encodeURIComponent(String(version))}/analyze`,
            {
                body: body,
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
