class Form {
    constructor(){
       
        this.button = createButton("Login");
        this.input = createInput("Name");
    }

    


    hide(){
        
        this.button.hide();
        this.input.hide();
        
    }

    display(){
        
        
        //this.input.size(400,100);

        this.button.position(displayWidth-600,displayHeight/4+200);
        this.button.size(100,50);

        this.input.position(displayWidth-600,displayHeight/4+50);

        this.button.mousePressed(()=>{
           //    this.button.hide();

            
           
            var name = this.input.value();
            var greeting = createElement('h2');
            greeting.html("Hello " + name);
            greeting.position(displayWidth - 100, 100)
            console.log(name);
          
          gameState = WELCOME;
        })
        
    }
    
}