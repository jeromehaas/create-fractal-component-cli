class HelloWorld {

	constructor() {
		this.name = 'hello-world';
        this.elements = {};
	}

	init = () => {
		if (!document.querySelector(`.js-${this.name}`)) return;
        this.run();
	};

	run = () => {
		console.log('run hello-world');
	};

}

export default HelloWorld;