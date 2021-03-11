import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import tutorial from '../model/tutorial';

@Injectable({
    providedIn: 'root'
})
export class TutorialService {

    private dbPath = '/shops';

    tutorialsRef: AngularFireList<tutorial>;

    constructor(private db: AngularFireDatabase) {
        this.tutorialsRef = db.list(this.dbPath);
    }

    getAll(): AngularFireList<tutorial> {
        return this.tutorialsRef;
    }

    create(tutorial: tutorial): any {
        return this.tutorialsRef.push(tutorial);
    }

    update(key: string, value: any): Promise<void> {
        return this.tutorialsRef.update(key, value);
    }

    delete(key: string): Promise<void> {
        return this.tutorialsRef.remove(key);
    }

    deleteAll(): Promise<void> {
        return this.tutorialsRef.remove();
    }
}
// http://api.linkpreview.net/?key=900f21bddede2041b566d29bacef2d7f&q=https://perfit.co.il/?fbclid=IwAR0FDObqyBJ1dIXIeerDA03h_NANrtVspeMv3akpVuyjawYU4JDLlXMAOKo