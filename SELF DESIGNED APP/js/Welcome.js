class Welcome{
    constructor(){
        
        this.greeting = createElement('h2');     
        
    }

    display(){
       
        
        var intro = createElement('h2');
        intro.html("Introduction");
        

        var musicalNotes = createElement('h2');
        musicalNotes.html("Musical Notes");

        var lesson = createElement('h2');
        lesson.html("Lessons");

        var displayPosition = 100;

        imageMode(CENTER);
        
         image(music,displayWidth/2,displayHeight/2,displayWidth,displayHeight);

       // intro.position(displayWidth/4-200,displayPosition);
        var linkA = createA("Introduction.html", "Introduction", "_blank" );
        linkA.position(displayWidth/4-200,100);
        image(lImg,displayWidth/4-300,displayPosition,100,100);

        musicalNotes.position(displayWidth/4,displayPosition+200);
        image(liImg,displayWidth/4-100,displayPosition+200,100,100);

        lesson.position(displayWidth/4+200,displayPosition/4+500);
        image(lisImg,displayWidth/4+100,displayPosition+400,100,100);
          
    }
}