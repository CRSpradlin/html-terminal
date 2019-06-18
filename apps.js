let command_list = ["help", "clear", "history"]; //Indexed commands
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