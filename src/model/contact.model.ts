export class Contact {

    constructor(public id?: string, public title?: string, public url?: string, public image?: string, public description?: string) {

    }

    setId?(length = 8) {
        var text = "";
        var possible = "0123456789ABCDEFGHIJKLMNOP";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }


}
export class Filter {

    constructor(public term?: string) {

    }
    setId?(length = 8) {
        var text = "";
        var possible = "0123456789ABCDEFGHIJKLMNOP";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }


}