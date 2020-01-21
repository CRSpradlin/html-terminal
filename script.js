let server_name = "server@crspradlin.org";

let blink;

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
                if(blink){
                    console.log("clearing blink interval");
                    clearInterval(blink);
                    let cont = $("#console").html();
                    if(cont.substring(cont.length-1, cont.length)=="|")
                        $("#console").html($("#console").html().substring(0, cont.length-1));
                    blink = null;
                }
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
              } else {
                if(!blink){
                    console.log("activating blink interval.");
                    blink = setInterval(function(){Typer.updLstChr();},500);
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
        this.write(server_name, "green");
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
    },
    lag: function(delay){
        str = "";
        numChars = delay/Typer.speed;
        for(let i=0; i<numChars; i++){
            str = str + "#";
        }
        Typer.write(str);
        $("#console").find("span").last().css("display", 'none');
    }
};
function gatherInput(e){
    if(Typer.inputBoolean){
        if(e.key == "Enter"){
            Typer['inputBoolean'] = false;
            command_curr = "";
            let cont = Typer.content();
            if(cont.substring(cont.length-1, cont.length)=="|")
                $("#console").html($("#console").html().substring(0, cont.length-1));
            runApp($("#console").find("span.input").last().html());
        }
        else if(e.key == "Backspace"){
            let cont = $("#console").find("span.input").last().html();
            $("#console").find("span.input").last().html($("#console").find("span.input").last().html().substring(0, cont.length-1));
            command_curr = $("#console").find("span.input").last().html();
            command_pos = command_history.length;
        }
        else if(e.key == "ArrowUp"){
            runApp_arrows("up");
	    e.preventDefault();
        }
        else if(e.key == "ArrowDown"){
            runApp_arrows("down");
 	    e.preventDefault();
        }
        else if((e.key+"").length>1){}
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
            command_curr = $("#console").find("span.input").last().html();
            command_pos = command_history.length;
        }
    }
}
function onload(){
    Typer.init();
    runApp("");
}
