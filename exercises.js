// Exercise 1 

// Objective: Understand the Observer design pattern

// Instructions:

// 1. Add methods to the Subject class to addObserver, removeObserver, and notifyObservers.
// 2. When notifyObservers is called on a Subject instance, each observer's update method should be invoked.
// 3. Instantiate the Subject and add multiple observers. Afterward, call notifyObservers and ensure each observer gets updated.

// class Subject {
// 	constructor() {
// 		this.observers = [];
// 	}
//     addObserver(observer) {
//         this.observers.push(observer);
//     }
//     removeObserver(observer) {
//         this.observers = this.observers.filter(obs => obs !== observer);
//     }
//     notifyObservers() {
//         this.observers.forEach(observer => observer.update());
//     }
// }

// class Observer {
// 	update() {
// 		console.log('Observer updated!');
// 	}
// }

// const subject = new Subject();
// const observer1 = new Observer();
// const observer2 = new Observer();
// const observer3 = new Observer();
// const observer4 = new Observer();

// subject.addObserver(observer1);
// subject.addObserver(observer2);
// subject.addObserver(observer3);
// subject.addObserver(observer4);

// subject.notifyObservers();

// Exercise 1 Completed


// Exercise 2

// Objective: Understand and Apply Destructuring in JavaScript

// Instructions:

// 1. Destructure the person object to extract the name and age properties into variables.
// 2. Use array destructuring to get the second and fourth items from the fruits array.
// 3. Extract the city and country properties from the address object nested within the person object using nested destructuring. 

const person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    },
};

const fruits = ['apple', 'banana', 'cherry', 'date'];

let { name, age } = person;
console.log(name, age);

let [, second, , fourth] = fruits;
console.log(second, fourth);

let { address: { city, country } } = person;
console.log(city, country);

// Exercise 2 Completed


// Exercise 3

// Objective: Understand and Implement Asynchronous Code Using Async/Await

// Instructions:

// 1. Create an async function named fetchPosts that retrieves the first 10 posts from the JSONPlaceholder API.
// 2. Handle any potential errors using a try/catch block within the async function. If an error occurs, log an appropriate error message.
// 3. Invoke the fetchPosts function and log the results.

async function fetchPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

    try {
        const data = await fetch(url);
        const res = await data.json();
        console.log("ASYNC/AWAIT: ", res);
    } catch (err) {
        console.log("err: ", err);
    }
}

fetchPosts();

// Results: Without an error, the first 10 posts are logged to the console. With an error, the error is logged to the console.

// Exercise 3 Completed


// Exercise 4

// Objective: Asychronous Observer with Destructuring

// Instructions:

// 1. Extend the Subject class to include an async method fetchAndNotify() that retrieves the first 10 posts from the JSONPlaceholder API and then notifies its observers.
// 2. The data passed to each observer's update method should be the list of posts fetched.
// 3. Handle the potential errors using a try/catch block. If an error occurs, invoke the update method of observers with an appropriate error message.
// 4. Within the Observer class's update method, destructure the received posts to log the title of the first post. If an error message is received instead, just log it.
// 5. Instantiate teh Subject, add multiple observers, call fetchAndNotify(), and ensure each observer logs the title of the first post or an error message.

class Subject {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
        this.observers.push(observer);
		// TODO: Add observer to the list
	}

	removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
		// TODO: Remove observer from the list
	}

	notifyObservers(data) {
        this.observers.forEach(observer => observer.update(data));
		// TODO: Notify all observers with given data
	}

	async fetchAndNotify() {
		const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

        try {
            const data = await fetch(url);
            const res = await data.json();
            this.notifyObservers(res);
            console.log("ASYNC/AWAIT: ", res);
        } catch (err) {
            this.notifyObservers(err);
            console.log("err: ", err);
        }
		// TODO: Fetch data from the API and notify observers
	}
}

class Observer {
	update(data) {
        let [first] = data;
        if (first.title) {
            console.log(first.title);
        } else {
            console.log(data);
        }
		// TODO: Handle the received data. If it's an error message, log it.
		// If it's the list of posts, destructure and log the title of the first post.
	}
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();
const observer3 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);

subject.fetchAndNotify();

// TODO: Instantiate the Subject, add observers, and call the fetchAndNotify method

// Exercise 4 Completed