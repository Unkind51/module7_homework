function Device(name) {

    this.name = name;
    this.type = 'portable';
    this.powerType = 'rechargeable';
   
  }
  
  Device.prototype.switchOn = function() {
  
    console.log('This device is ON.');
  
  }
  
  Device.prototype.switchOff = function() {
  
    console.log( 'This device is OFF.');
  
  }
  
  
  function laptop (name, typeOfConnection, power) {
  
    this.name = name;
    this.typeOfConnection = typeOfConnection;
    this.power = power;
    this.description = function() {
    console.log(`Item-${this.name}, type of connection-${this.typeOfConnection},  power-${this.power}`);
  }
  }
  
  laptop.prototype = new Device();
  smartPhone.prototype = new Device();
  
  const sonyLaptop = new laptop('Sony', 'Wi-Fi', '90w');
  
  function smartPhone(name, typeOfConnection, camera, memory) {
    this.name = name;
    this.typeOfConnection = typeOfConnection;
    this.camera = camera;
    this.memory = memory;
    this.description = function() {
    console.log(`Item-${this.name}, type of connection-${this.typeOfConnection}, camera-${this.camera}, memory-${this.memory}`);
  }
  }
  const anyPhone = new smartPhone('Apple', '5g', '30mpx', '128Gb');
  
  sonyLaptop.switchOn();
  sonyLaptop.description();
  anyPhone.switchOff(); 
  anyPhone.description();
    
  
  
  
  
  
  
  
  
  
  