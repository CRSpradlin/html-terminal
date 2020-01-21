let command_list = ["help", "clear", "history", "echo", "server"]; //Indexed commands
//command_history defined within app_execute.js

//Non Indexed Commands (Indexed Commands Below)
function runApp_errorMsg(str){
    Typer.newLine();
    Typer.write("FAILURE: ", "red");
    Typer.write(str);
}
function runApp_404(){
    Typer.write("FAILURE: ", "red");
    Typer.write("Web server could not find specified file or directory with error message: ");
    Typer.newLine();
    Typer.newLine();
    Typer.write("               44             000000000000                       44");
    Typer.newLine();
    Typer.write("              444            00         000                     444");
    Typer.newLine();
    Typer.write("             4444           00         00 00                   4444");
    Typer.newLine();
    Typer.write("            44 44          00          00  00                 44 44");
    Typer.newLine();
    Typer.write("           44  44         00           0    00               44  44");
    Typer.newLine();
    Typer.write("          44   44         00          00    00              44   44");
    Typer.newLine();
    Typer.write("         44    44         00          00    00             44    44");
    Typer.newLine();
    Typer.write("        44     44         00          00    00            44     44");
    Typer.newLine();
    Typer.write("       44      44         00         00     00           44      44");
    Typer.newLine();
    Typer.write("      44       44         00        00      00          44       44");
    Typer.newLine();
    Typer.write("     44        44         00       00       00         44        44");
    Typer.newLine();
    Typer.write("    44         44         00      00        00        44         44");
    Typer.newLine();
    Typer.write("   44          44         00     00         00       44          44");
    Typer.newLine();
    Typer.write("  44           44         00     00         00      44           44");
    Typer.newLine();
    Typer.write(" 44444444444444444444     00     0          00     44444444444444444444");
    Typer.newLine();
    Typer.write("               44          00   00         00                    44");
    Typer.newLine();
    Typer.write("               44           00  00        00                     44");
    Typer.newLine();
    Typer.write("               44            00 00       00                      44");
    Typer.newLine();
    Typer.write("               44             000       00                       44");
    Typer.newLine();
    Typer.write("               44              0000000000                        44");
    Typer.newLine();
}
function runApp_arrows(direction){
    numCommands = command_history.length;
    if(command_pos==-1){
        command_pos = numCommands;
    } 

    if(direction == "up"){
        if(command_pos > 0){
            command_pos = command_pos - 1;
        }
    } else {
        if(command_pos < numCommands){
            command_pos = command_pos + 1;
        }
    }
    if(command_pos==numCommands){
        $("#console").find("span.input").last().html(command_curr);
    } else {
        $("#console").find("span.input").last().html(command_history[command_pos]);
    }
}

//Indexed Commands:
function runApp_help(){
    Typer.newLine();
    Typer.write("Possible commands include:");
    let length = command_list.length;
    for(let i=0; i<length; i++){
        Typer.newLine();
        Typer.write(command_list[i], 'blue');
    }
}
function runApp_clear(){
    $("#console").html("");
}
function runApp_history(){
    Typer.newLine();
    Typer.write("Most recent commands:")
    let length = command_history.length;
    for(let i=0; i<length; i++){
        Typer.newLine();
        Typer.write((i+1)+". "+command_history[i], 'white');
    }
}
function runApp_echo(stringArray){
    Typer.newLine();
    console.log(stringArray.join(" "));
    let str = stringArray.join(" ").substring(5,stringArray.join(" ").length);
    Typer.write(str);
}
let serverOn = false;
function runApp_server(stringArray){
    let serverOptions = ["restart", "start", "status", "stop", "help"];
    if(serverOptions.includes(stringArray[1])){
        if(stringArray[1]=="restart" || stringArray[1]=="start"){
            if(stringArray.length>3){
                runApp_errorMsg("Unknown sub-parameters " + stringArray.join(", ").substring((15+(stringArray[1].length-5)), stringArray.join(", ").length) + " for 'server "+stringArray[1]+"'.");
            } else {
                if(!stringArray[2]){
                    if(!serverOn){
                        window.location = "https://www.crspradlin.org";
                    } else {
                        Typer.newLine();
                        Typer.write("Server is already running.")
                    }
                }
                else if(stringArray[2]=="-b"){
                    if(!serverOn){
                        Typer.newLine();
                        Typer.write("Starting Server");
                        Typer.lag(1000);
                        Typer.write(".");
                        Typer.lag(1000);
                        Typer.write(".");
                        Typer.lag(1000);
                        Typer.write(".");
                        Typer.lag(1000);
                        Typer.write("OK!", "green");
                        serverOn = true;
                    } else {
                        Typer.newLine();
                        Typer.write("Server is already running.")
                    }                    
                } else {
                    runApp_errorMsg("Unknown sub-parameters " + stringArray.join(", ").substring((15+(stringArray[1].length-5)), stringArray.join(", ").length) + " for 'server "+stringArray[1]+"'.");
                }
            }
        }
        else if(stringArray[1]=="status"){
            if(stringArray.length>2){
                runApp_errorMsg("Unknown sub-parameters " + stringArray.join(", ").substring(16, stringArray.join(", ").length) + " for 'server status'.");
            } else {
                Typer.newLine();
                Typer.write("Server status: ")
                if(serverOn){
                    Typer.write("Running", "green");
                } else {
                    Typer.write("Stopped", "red");
                }
            }
        }
        else if(stringArray[1]=="stop"){
            if(stringArray.length>2){
                runApp_errorMsg("Unknown sub-parameters " + stringArray.join(", ").substring(14, stringArray.join(", ").length) + " for 'server stop'.");
            } else {
                if(serverOn){
                    Typer.newLine();
                    Typer.write("Stopping Server");
                    Typer.lag(1000);
                    Typer.write(".");
                    Typer.lag(1000);
                    Typer.write(".");
                    Typer.lag(1000);
                    Typer.write(".");
                    Typer.lag(1000);
                    Typer.write("OK!", "green");
                    serverOn = false;
                } else {
                    Typer.newLine();
                    Typer.write("Server is already not running.")
                }
            }
        } else {
            Typer.newLine();
            Typer.write("Server:", "blue");
            Typer.newLine();
            Typer.write("   status | view server status");
            Typer.newLine();
            Typer.write("   start [-b background mode] | start server");
            Typer.newLine();
            Typer.write("   restart [-b background mode] | restart server");
            Typer.newLine();
            Typer.write("   stop | stop server");
        }
    } else {
        if(!stringArray[1]){
            runApp_errorMsg("No optional parameters found for server. Try running 'server help'.");
        } else {
            runApp_errorMsg("Could not find option '"+stringArray[1]+"' for command 'server'. Try running 'server help'.");
        }
    }
}