class Device {
    constructor(item, power){
      this.item = item;
      this.power = power;
    }
    turnOn(){
      console.log(`${this.item} is turn on`);
    }
    turnOff(){
      console.log(`${this.item} is turn on`);
    }
  }
  
  class Laptop extends Device {
    constructor(item, power, typeOfConnection){
      super(item, power);
      this.typeOfConnection = typeOfConnection;
    }
    itemDescrition(){
      console.log(`Item-${this.item}, battery-${this.power}, type of connection-${this.typeOfConnection}`);
    }
   }
  const laptop = new Laptop('Acer 3250TG', '90w', 'Wi-Fi');
  
  
  class SmartPhones extends Device {
    constructor(item, power, typeOfConnection, camera, memory){
      super(item, power);
      this.typeOfConnection = typeOfConnection;
      this.camera = camera;
      this.memory = memory;
    }
    itemDescrition(){
      console.log(`Item-${this.item}, battery-${this.power}, type of connection-${this.typeOfConnection}, camera-${this.camera}, memory-${this.memory}`);
  }
  }
  const smartPhone = new SmartPhones('Iphone X', '5000mA', '5g', '30mpx', '64Gb');
  
  laptop.turnOn()
  laptop.itemDescrition()
  smartPhone.turnOff()
  smartPhone.itemDescrition()
