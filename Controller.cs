using System;
using System.Diagnostics;

// Need to Fix the Layout

namespace NPMController
{
    class NPM
    {
        public static void RunTerminalCommand(string command)
        {
            try
            {
                Process process = new Process();
            ProcessStartInfo startInfo = new ProcessStartInfo
            {
                FileName = "cmd.exe",
                RedirectStandardInput = true,
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                UseShellExecute = false,
                CreateNoWindow = true
            };

            process.StartInfo = startInfo;
            process.Start();

            // Send the command to the terminal
            process.StandardInput.WriteLine(command);
            process.StandardInput.Flush();
            process.StandardInput.Close();

            // Read the output and error streams
            string output = process.StandardOutput.ReadToEnd();
            string error = process.StandardError.ReadToEnd();

            process.WaitForExit();

            // Display the output and error
            Console.WriteLine("Output: " + output);
            Console.WriteLine("Error: " + error);

            process.Close();
        }
        catch (Exception ex)
        {
            Console.WriteLine("An error occurred: " + ex.Message);
        }
        }
    }
}
