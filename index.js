class boardMember{
  constructor(name, homeState, training){
    this.name = name
    this.homeState = homeState
    this.training = training
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Ceo extends boardMember {
 sayHello(){
    super.sayHello()
    console.log('hello')
  }
  
}

