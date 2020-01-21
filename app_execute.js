let command_history = [];
let command_pos = 0;
let command_curr = "";
let appString = "";
let appStringArray = [];
let appName = "";

function runApp(appString){
    if(appString.includes("<") || appString.includes(">")){
        runApp_errorMsg("Invalid characters present in command string.");
        return false;
    }
    if(appString.substring(0, 2)=="  "){ //for hidden commands
        appName = appString;
    } else {
        appString = appString.trim();
        appStringArray = appString.split(" ");
        appName = appStringArray[0];
        command_history.push(appString);
        command_pos = command_history.length;
    }
    if(appName==""){
        command_history.pop(); 
    }
    else if(appName=="  404"){
        runApp_404();
    }
    else if(appName=="help"){
        if(appStringArray.length>1){
            runApp_errorMsg("Unrecognized parameters after help, try running the command without them.");
        } else {
            runApp_help();
        }
    }
    else if(appName=="clear"){
        if(appStringArray.length>1){
            runApp_errorMsg("Unrecognized parameters after clear, try running the command without them.");
        } else {
            runApp_clear();
        }
    }
    else if(appName=="history"){
        if(appStringArray.length>1){
            runApp_errorMsg("Unrecognized parameters after history, try running the command without them.");
        } else {
            runApp_history();
        }
    }
    else if(appName=="echo"){
        console.log(appStringArray);
        runApp_echo(appStringArray);
    }
    else if(appName=="server"){
        runApp_server(appStringArray);
    }
    else{
        runApp_errorMsg("Could not find command, '"+ appName +"' try typing help for a list of commands.");
    }
    Typer.awaitInput();
}