const canvas = document.getElementById("myCanvas");
const c = canvas.getContext("2d");

class Cjs{
    fupdate = setInterval(onFrame,13);
    constructor(){
        c.fillStyle = "white";
        c.fillRect(0,0,720,480);
        canvas.width = 720;
        canvas.height = 500;
        c.fillStyle = "lightgray";
        let generate = 1;
        let tx = 90 
        let ty = 100 
        for(let step = 0;step<8;step++){
            c.fillRect(tx,ty,50,50);
            tx += 70;
        }
        for(let step = 0;step<5;step++){
            ty += 70
            tx = 580
            for(let step = 0;step<8;step++){
                c.fillRect(tx,ty,50,50);
                tx -= 70;
            }
        }
    }
    clear(){
        c.fillStyle = "white";
        c.fillRect(0,0,720,480);
        c.fillStyle = "lightgray";
        let generate = 1;
        let tx = 90 
        let ty = 100 
        for(let step = 0;step<8;step++){
            c.fillRect(tx,ty,50,50);
            tx += 70;
        }
        for(let step = 0;step<5;step++){
            ty += 70
            tx = 580
            for(let step = 0;step<8;step++){
                c.fillRect(tx,ty,50,50);
                tx -= 70;
            }
        }
    }
    
    dot(x,y,color){
        c.fillStyle = color;
        if(x == 0 && y == 0){
            c.fillRect(90,100,50,50);
        }
        
        if(x == 1 && y == 0){
            c.fillRect(90+70,100,50,50);
        }
        if(x == 2 && y == 0){
            c.fillRect(90+140,100,50,50);
        }
        if(x == 3 && y == 0){
            c.fillRect(90+210,100,50,50);
        }
        if(x == 4 && y == 0){
            c.fillRect(90+280,100,50,50);
        }
        if(x == 5 && y == 0){
            c.fillRect(90+350,100,50,50);
        }
        if(x == 6 && y == 0){
            c.fillRect(90+420,100,50,50);
        }
        if(x == 7 && y == 0){
            c.fillRect(90+490,100,50,50);
        }
        
        //2
        if(x == 0 && y == 1){
            c.fillRect(90,100+70,50,50);
        }
        if(x == 1 && y == 1){
            c.fillRect(90+70,100+70,50,50);
        }
        if(x == 2 && y == 1){
            c.fillRect(90+140,100+70,50,50);
        }
        if(x == 3 && y == 1){
            c.fillRect(90+210,100+70,50,50);
        }
        if(x == 4 && y == 1){
            c.fillRect(90+280,100+70,50,50);
        }
        if(x == 5 && y == 1){
            c.fillRect(90+350,100+70,50,50);
        }
        if(x == 6 && y == 1){
            c.fillRect(90+420,100+70,50,50);
        }
        if(x == 7 && y == 1){
            c.fillRect(90+490,100+70,50,50);
        }
        //3
        if(x == 0 && y == 2){
            c.fillRect(90,100+140,50,50);
        }
        if(x == 1 && y == 2){
            c.fillRect(90+70,100+140,50,50);
        }
        if(x == 2 && y == 2){
            c.fillRect(90+140,100+140,50,50);
        }
        if(x == 3 && y == 2){
            c.fillRect(90+210,100+140,50,50);
        }
        if(x == 4 && y == 2){
            c.fillRect(90+280,100+140,50,50);
        }
        if(x == 5 && y == 2){
            c.fillRect(90+350,100+140,50,50);
        }
        if(x == 6 && y == 2){
            c.fillRect(90+420,100+140,50,50);
        }
        if(x == 7 && y == 2){
            c.fillRect(90+490,100+140,50,50);
        }
        //4
        if(x == 0 && y == 3){
            c.fillRect(90,100+210,50,50);
        }
        if(x == 1 && y == 3){
            c.fillRect(90+70,100+210,50,50);
        }
        if(x == 2 && y == 3){
            c.fillRect(90+140,100+210,50,50);
        }
        if(x == 3 && y == 3){
            c.fillRect(90+210,100+210,50,50);
        }
        if(x == 4 && y == 3){
            c.fillRect(90+280,100+210,50,50);
        }
        if(x == 5 && y == 3){
            c.fillRect(90+350,100+210,50,50);
        }
        if(x == 6 && y == 3){
            c.fillRect(90+420,100+210,50,50);
        }
        if(x == 7 && y == 3){
            c.fillRect(90+490,100+210,50,50);
        }
        //4
        if(x == 0 && y == 4){
            c.fillRect(90,100+280,50,50);
        }
        if(x == 1 && y == 4){
            c.fillRect(90+70,100+280,50,50);
        }
        if(x == 2 && y == 4){
            c.fillRect(90+140,100+280,50,50);
        }
        if(x == 3 && y == 4){
            c.fillRect(90+210,100+280,50,50);
        }
        if(x == 4 && y == 4){
            c.fillRect(90+280,100+280,50,50);
        }
        if(x == 5 && y == 4){
            c.fillRect(90+350,100+280,50,50);
        }
        if(x == 6 && y == 4){
            c.fillRect(90+420,100+280,50,50);
        }
        if(x == 7 && y == 4){
            c.fillRect(90+490,100+280,50,50);
        }
        //5
        if(x == 0 && y == 5){
            c.fillRect(90,100+350,50,50);
        }
        if(x == 1 && y == 5){
            c.fillRect(90+70,100+350,50,50);
        }
        if(x == 2 && y == 5){
            c.fillRect(90+140,100+350,50,50);
        }
        if(x == 3 && y == 5){
            c.fillRect(90+210,100+350,50,50);
        }
        if(x == 4 && y == 5){
            c.fillRect(90+280,100+350,50,50);
        }
        if(x == 5 && y == 5){
            c.fillRect(90+350,100+350,50,50);
        }
        if(x == 6 && y == 5){
            c.fillRect(90+420,100+350,50,50);
        }
        if(x == 7 && y == 5){
            c.fillRect(90+490,100+350,50,50);
        }
    }
    
    bg(color){
        c.fillStyle = "white";
        c.fillRect(0,0,720,480);
        let tx = 90 
        let ty = 100 
        c.fillStyle = color
        for(let step = 0;step<8;step++){
            c.fillRect(tx,ty,50,50);
            tx += 70;
        }
        for(let step = 0;step<5;step++){
            ty += 70
            tx = 580
            for(let step = 0;step<8;step++){
                c.fillRect(tx,ty,50,50);
                tx -= 70;
            }
        }
    }
    text(text){
        c.fillStyle = "lightgray";
        c.font = 'bold 24px sans serif';
        c.fillText(text,90,90);
    }
    end(){
        let end = true;
        c.fillStyle = "white";
        c.fillRect(0,0,720,500);
        while (end){
            //This code breaks the entire Js website
        }
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    //touching(x,y,xx,yy){
        //if(x = xx && y =yy){
        //    return true;
      //  }
    //}
    hits(x,y,xx,yy){
        if(x == xx && y == yy){
            return true;
        }
    }
}
