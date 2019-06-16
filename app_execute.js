function runApp(appString){
    if(appString.substring(0, 2)=="  "){ //for hidden commands
        appName = appString;
    } else {
        appString = appString.trim();
        appStringArray = appString.split(" ");
        appName = appStringArray[0];
    }
    if(appName==""){
        //Typer.awaitInput();
    }
    else if(appName=="  404"){
        runApp_404();
    }
    else if(appName="help"){
        runApp_help();
    }
    else{
        Typer.newLine();
        Typer.write("FAILURE: ", "red");
        Typer.write("Could not find command, '"+ appName +"' try typing help for a list of commands.");
    }
    Typer.awaitInput();
}