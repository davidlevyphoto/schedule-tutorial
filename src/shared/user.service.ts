import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import { SqlStorage } from './shared';

//import * as _ from 'lodash';
const win: any = window;

@Injectable()
export class UserService{

	public sql: SqlStorage;

	constructor(private storage: Storage, private events: Events){
		if (win.sqlitePlugin) {
            this.sql = new SqlStorage();
        } else {
            console.warn('SQLite plugin not installed. Falling back to regular Ionic Storage.');
        }
	}

	favoriteBookstore(bookstore){
        if (this.sql){
            this.sql.set(bookstore.id.toString(), bookstore).then(data => {
                this.events.publish('favorites:changed');
            });
        } else {
            return new Promise(resolve => {
                this.storage.set(bookstore.id.toString(), bookstore).then(() => {
                    this.events.publish('favorites:changed');
                    resolve();
                });
            });
        }
	}

	unfavoriteBookstore(bookstore){
		if (this.sql){
            this.sql.remove(bookstore.id.toString()).then(data => {
                this.events.publish('favorites:changed');
            });
        } else {
            return new Promise(resolve => {
                this.storage.remove(bookstore.id.toString()).then(() => {
                    this.events.publish('favorites:changed');
                    resolve();
                });
            });
        }
	}

	isFavoriteBookstore(bookstoreId){
		if (this.sql){
            return this.sql.get(bookstoreId.toString()).then(value => value ? true : false);
        } else {
            return new Promise(resolve => resolve(this.storage.get(bookstoreId.toString()).then(value => value ? true : false)));
        }
	}

	// getAllFavorites(){
	// 	let items = [];
	// 	_.forIn(window.localStorage, (v, k) => {
	// 		items.push(JSON.parse(v));
	// 	});
	// 	return items.length ? items : null;
	// }

	getAllFavorites(){
		if (this.sql){
            return this.sql.getAll();
        } else {
            return new Promise(resolve => {
                let results = [];
                this.storage.forEach(data => {
                    results.push(data);
                    
                });
                return resolve(results);
            });
        }
    }

    initStorage(){
        if (this.sql){
            return this.sql.initializeDatabase();
        } else {
            return new Promise(resolve => resolve());
        }
    }
}