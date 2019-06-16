
let Typer={
    speed: 5,
    messageCount: 0,
    currentSpan: 0,
    inputBoolean: false,
    queue: new Array(),
    init: function(){
        document.addEventListener("keydown", gatherInput);
        blink = setInterval(function(){Typer.updLstChr();},500);
        output = setInterval(function() {
            if(Typer.queue.length>0){
                if(Typer.queue[0].length>1){
                    let value = Typer.queue.shift().substring(1);
                    if(value=="input"){
                        Typer["inputBoolean"] = true;
                    } else {
                        value = parseInt(value);
                        Typer["currentSpan"] = value;
                    }
                    console.log(Typer.currentSpan);
                } else {
                    if(Typer.queue[0]==" "){
                        $('#'+Typer.currentSpan).append("&nbsp;");
                        Typer.queue.shift();
                    } else {
                        $("#"+Typer.currentSpan).html($("#"+Typer.currentSpan).html() + Typer.queue.shift());
                    }
                    window.scrollTo(0, document.body.scrollHeight);
                }
            }
        }, this.speed);
    },

    content: function(){
        return $("#console").html();
    },
    add: function(str){
        $("#console").append(str);
        return false;
    },
    newLine: function(){
        this.add("<br />");
    },
    write: function(str, color="white"){
        this.add("<span id='"+this.messageCount+"' class='"+color+"'></span>");
        this.queue.push("$"+this.messageCount);
        this.messageCount = this.messageCount + 1;
        console.log("adding something to the console!");
        for(i=0;i<str.length;i++){
            this.queue.push(str[i]+"");
        }
        return false;
    },
    awaitInput: function(){
        this.newLine();
        this.write("server@crspradlin.org", "green");
        this.write(":~");
        this.write("$", "blue");
        this.add("<span class='input'></span>");
        this.queue.push("$input");
    },
    updLstChr: function(){
        var cont = this.content();
        if(cont.substring(cont.length-1, cont.length)=="|")
            $("#console").html($("#console").html().substring(0, cont.length-1));
        else
            this.add("|");
    }
};
function gatherInput(e){
    if(Typer.inputBoolean){
        if(e.key == "Enter"){
            Typer['inputBoolean'] = false;
            let cont = Typer.content();
            if(cont.substring(cont.length-1, cont.length)=="|")
                $("#console").html($("#console").html().substring(0, cont.length-1));
            runApp($("#console").find("span.input").last().html());
        }
        else if(e.key == "Backspace"){
            let cont = $("#console").find("span.input").last().html();
            $("#console").find("span.input").last().html($("#console").find("span.input").last().html().substring(0, cont.length-1));
        }
        else if((e.key+"").length>1){

        }
        else if(e.key == " "){
            let cont = $("#console").find("span.input").last().html();
            if(e.key == " "){
                if($("#console").find("span.input").last().html().substring(cont.length-1, cont.length)!=" "){
                    $("#console").find("span.input").last().html($("#console").find("span.input").last().html() + e.key);
                }
            }
        } 
        else {
            $("#console").find("span.input").last().html($("#console").find("span.input").last().html() + e.key);
        }
    }
}
function onload(){
    Typer.init();
    runApp("  404");
}