/**
 * web-backend-swagger
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface AdminTaskCreation { 
    title: string;
    wave: number;
    author: number;
    git_path: string;
    git_branch: string;
    git_commit?: string;
    git_create: boolean;
}