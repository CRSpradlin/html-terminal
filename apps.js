let command_list = ["help"];

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
function runApp_help(){
    Typer.write("Possible commands include:");
    for(i=0; i<command_list.length; i++){
        Typer.newLine();
        Typer.write(command_list[i], 'blue');
    }
}