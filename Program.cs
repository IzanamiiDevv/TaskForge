using System;
using NPMController;

class Program
{
    public static void Main(string[] args)
    {
        Console.BackgroundColor = ConsoleColor.Green;
        Console.WriteLine("Hello Too");
        Console.ReadKey();

        string path = System.IO.Path.GetFullPath(@"../../../start.bat");

        NPM.RunTerminalCommand(path);
        Console.ReadKey();
    }
}