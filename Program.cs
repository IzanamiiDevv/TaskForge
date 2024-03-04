using System;
using Test;

class Program
{
    public static void Main(string[] args)
    {
        Ancor ancor = new Ancor();

        ancor.MissYou();
        Ancor.Test();
        Console.BackgroundColor = ConsoleColor.Green;
        Console.WriteLine("Hello Too");
        Console.ReadKey();
    }
}