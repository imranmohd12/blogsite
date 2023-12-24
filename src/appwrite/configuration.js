import config from "../config/config";
import {Client,ID,Databasees,Storage,Query, Account} from 'appwrite';

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(config.appWriteUrl)
            .setProject(config.appWriteProjectId);
        this.databases = new Databasees(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return this.databases.createDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log(error);
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log(error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug,
            )
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log(error);
        }
    }

    async getPosts(queries = [Query.query("status","active")]){
        try {
            return await this.databases.listDocuments(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    // File Upload Service

    async uploadFile(file){
        try {
            return this.bucket.createFile(
                config.appWriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log(error);
        }
    }

    async deleteFile(fileId){
        try {
            this.bucket.deleteFile(
            config.appWriteBucketId,
            fileId,
           ) 
           return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getFilePreview(fileId){
        try {
            this.bucket.getFilePreview(
                config.appWriteBucketId,
                fileId
            )
        } catch (error) {
            console.log(error);
        }
    }
}

const service = new Service();

export default service;