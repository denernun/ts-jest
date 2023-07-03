### observer
```typescript
type InternalState = {
    event: String
}

abstract class Observer { 
    abstract update(state:InternalState): void 
} 

abstract class Observable {

    protected observers: Observer[] = [] //the list of observers
    protected state:InternalState = { event: "" } //the internal state observers are watching

    public addObserver(o:Observer):void {
        this.observers.push(o)
    }
    
    protected notify() {
        this.observers.forEach( o => o.update(this.state) )
    }
}

//Actual implementations
class ConsoleLogger extends Observer  {

    public update(newState: InternalState) {
        console.log("New internal state update: ", newState)
    }
}

class InputElement extends Observable {

    public click():void {
        this.state = { event: "click" }
        this.notify()
    }

}

const input = new InputElement()
input.addObserver(new ConsoleLogger())

input.click()
```
### observer
```typescript
/**
* Class presenting a magazine
* @class
*/
class Magazine {
  /**
  * Create a magazine
  * @param {String} title - title of fresh magazine version
  * @param {Type} type - type of magazine (for example - Airports daily)
  */
  constructor({title, type}) {
    this.title = title;
    this.type = type;
    console.log(`New magazine successfully created: ${title}`);
  }

  /**
  * Get a magazine title
  * @return {String} title of magazine
  */
  getTitle() {
    return this.title;
  }
}

/**
* Class presenting an airport
* @class
*/
class Airport {
  /**
  * Create an airport (subscriber)
  * @param {String} name - name of airport
  */
  constructor({name}) {
    this.name = name;
    console.log(`New airport successfully created: ${name}`);
  }

  /**
  * Compose notification message: what message should airport receive when new magazine posted
  * @param {Object} magazine - magazine instance
  */
  onMagazinePublished(magazine) {
    console.log(`Hi ${this.name}! 
    There are some news for you: ${magazine.getTitle()}`);
  }
}

/**
* Class presenting a publisher (which publishing new magazine versions)
* @class
*/
class Publisher {
  /**
  * Create a publisher
  */
  constructor() {
    this.subscribers = {};
    console.log(`New publisher successfully created.`);
  }

  /**
  * Notify all interested subscribers about new magazine of specific type
  * @param {String} type - type of magazine ('Airports daily' for example)
  * @param {Object} magazine - fresh magazine
  */
  notify(type, magazine) {
    this.subscribers[type].forEach(subscriber => 
      subscriber.onMagazinePublished(magazine));
  }

  /**
  * Add subscriber for list of notificaiton by specific magazine type
  * @param {Object} subscriber - subscriber to add to notification list
  * @param {String} type - type of notification list to add
  * @return {Object} instance
  */
  attach(subscriber, type) {
    if (!this.subscribers[type]) {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(subscriber);
    console.log(`${subscriber.name} successfully added to subscription: ${type}`);
    return this;
  }

  /**
  * Add new magazine and notify subscribers
  * @param {Object} magazine - fresh published magazine
  */
  addNewMagazine(magazine) {
    console.log(`I'm going to notify all subscribers by type ${magazine.type}...`);
    this.notify(magazine.type, magazine);
  }
}

// ==========================================================================
// USAGE
// ==========================================================================

// Create new publisher (1)
const publisher = new Publisher();

// Create some airports, that are interested in magazine (2)
const dali = new Airport({name: 'Dali International Airport'});
const charlesDeGaulle = new Airport({name: 'Charles De Gaulle International Airport'});
const boryspil = new Airport({name: 'Boryspil International Airport'})

// Add airports as subscribers for 'Airports daily' magazine (3)
publisher
    .attach(dali, 'Airports daily')
    .attach(charlesDeGaulle, 'Airports daily')
    .attach(boryspil, 'Airports daily');

// Publish new version of magazine 'Airports daily' (4)
publisher.addNewMagazine(
    new Magazine({title: 'Fresh news for today', type: 'Airports daily'}));

// New publisher successfully created. (1)

// (2)
// New airport successfully created: Dali International Airport
// New airport successfully created: Charles De Gaulle International Airport
// New airport successfully created: Boryspil International Airport

// (3)
// Dali International Airport successfully added to subscription: Airports daily
// Charles De Gaulle International Airport successfully added to subscription: Airports daily
// Boryspil International Airport successfully added to subscription: Airports daily

// (4)
// I'm going to notify all subscribers by type Airports daily...
// Hi Dali International Airport! 
//    There are some news for you: Fresh news for today
// Hi Charles De Gaulle International Airport! 
//    There are some news for you: Fresh news for today
// Hi Boryspil International Airport! 
//    There are some news for you: Fresh news for today
```
