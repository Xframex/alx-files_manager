<<<<<<< HEAD
// utils/db.js
=======
>>>>>>> a3a46d7639c71819ea4abbe5618cea40fb5b05e6

import { MongoClient } from 'mongodb';

class DBClient {
    constructor() {
        this.host = process.env.DB_HOST || 'localhost';
        this.port = process.env.DB_PORT || 27017;
        this.database = process.env.DB_DATABASE || 'files_manager';
        this.client = new MongoClient(`mongodb://${this.host}:${this.port}`, { useUnifiedTopology: true });
        this.client.connect();
        this.db = this.client.db(this.database);
    }

    async isAlive() {
        return this.client.isConnected();
    }

    async nbUsers() {
        const usersCollection = this.db.collection('users');
        return await usersCollection.countDocuments();
    }

    async nbFiles() {
        const filesCollection = this.db.collection('files');
        return await filesCollection.countDocuments();
    }
}

const dbClient = new DBClient();
export default dbClient;
<<<<<<< HEAD
=======

>>>>>>> a3a46d7639c71819ea4abbe5618cea40fb5b05e6
