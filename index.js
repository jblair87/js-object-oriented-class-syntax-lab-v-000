class boardMember{
  constructor(name, homeState, training){
    this.name = name
    this.homeState = homeState
    this.training = training
  }

  
  veto(){
   return "No, I must disagree"}
    
   approve(){
  return "You can do that!"}
    
  doCharity(){
   return "I like to help people."}
    
releasePressStatement(){
    return "You will see great things from Scuber."}

  sayHello() {
   return `Hi, my name is ${this.name}. I am from ${this.homeState} and training in ${this.training}`;
  }



class Ceo extends BoardMember {
 hireEmployee(){
   return 'Welcome aboard!';
  }}
  


