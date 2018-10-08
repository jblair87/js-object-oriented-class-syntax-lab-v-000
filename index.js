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

class ceo extends boardMember {
   boardMembers(name, homeState, training){
    this.name = name
    this.homeState = homeState
    this.training = training
  }
  
  
}

