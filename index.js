class boardMember{
  constructor(name, homeState, training){
    this.name = name
    this.homeState = homeState
    this.training = training
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
  
  this.veto = function(){
   return "No, I must disagree"};
    
  this.approve = function(){
  return "You can do that!"};
    
  this.doCharity = function(){
   return "I like to help people."};
    
  this.releasePressStatement = function(){
    return "You will see great things from Scuber."};
}

class Ceo extends boardMember {
 sayHello(){
    super.sayHello()
    console.log('hello')
  }
  
}

