### singleton
```typescript
const singleton = Symbol();
const singletonEnforcer = Symbol();

let itemsCollector;

/**
* Class representing fetchId
* @class
*/
class FetchId {
    /**
    * Get instance or create new one
    * @return {FetchId} a FetchId object
    */
    static get instance() {
        if (!this[singleton]) {
            this[singleton] = new FetchId(singletonEnforcer);
        }

        return this[singleton];
    }

    /**
    * Return items
    * @return {Object} items collector object
    */
    get fetchItemsById() {
        return itemsCollector;
    }

    /**
    * Get items collector values
    * @return {Object} collector value
    */
    set fetchItemsById(value) {
        if (!itemsCollector) {
            itemsCollector = value;
        }
    }

    /**
    * Create a FetchId instance
    * @param {Symbol} enforcer - lock to prevent invalid instantiation
    */
    constructor(enforcer) {
        if (enforcer !== singletonEnforcer) {
            throw new Error('Cannot construct singleton. Use FetchId.instance instead.');
        }

        this.fetchItemsById = {};
    }

    /**
    * Register new type
    * @param {String} type - format of new type
    * @param {String} id - id of new request
    */
    registerType(type, id) {
        this.fetchItemsById[type] = id;
    }

    /**
    * Unregister type
    * @param {String} type - type of request to unregister
    */
    unregisterType(type) {
        delete this.fetchItemsById[type];
    }

    /**
    * Get request id by its type
    * @param {String} type - type of request
    * @return {String} id of request
    */
    getId(type) {
        return this.fetchItemsById[type] || null;
    }
}

export default FetchId.instance;
```
### singleton
```typescript
//Simulate a database connectino class
class MyDBConn{

    protected static instance: MyDBConn | null = null
    private id: number = 0

    constructor() {
        //... db connection logic
        this.id = Math.random() //the ID could represent the actual connection to the db
    }
    
    public getID(): number {
        return this.id
    }

    public static getInstance(): MyDBConn {
        if(!MyDBConn.instance) {
            MyDBConn.instance = new MyDBConn()
        }
        return MyDBConn.instance
    }
}


const connections = [
                        MyDBConn.getInstance(),
                        MyDBConn.getInstance(),
                        MyDBConn.getInstance(),
                        MyDBConn.getInstance(),
                        MyDBConn.getInstance()
                ]

connections.forEach( c => {
    console.log(c.getID())
})
```
