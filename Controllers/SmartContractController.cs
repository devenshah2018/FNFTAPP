using Microsoft.AspNetCore.Mvc;
using Nethereum.Web3.Accounts;
using Nethereum.Web3;
using FNFTAPP.Models;
using Nethereum.RPC.Eth.DTOs;
using System;
using System.Diagnostics;
using Amazon.Runtime;

namespace FNFTAPP.Controllers
{
    [ApiController]
    [Route("api/smartcontract")]
    public class SmartContractController : Controller
    {


        [HttpPost("compile-and-deploy")]
        public string[] Compile()
        {
            string[] response = new string[4];
            Process compileProcess = new Process();
            compileProcess.StartInfo.FileName = @"C:\Program Files\nodejs\npx.cmd";
            compileProcess.StartInfo.Arguments = "hardhat compile";
            compileProcess.StartInfo.RedirectStandardOutput = true;
            compileProcess.StartInfo.RedirectStandardError = true;
            compileProcess.Start();
            string compileOutput = compileProcess.StandardOutput.ReadToEnd();
            string compileError = compileProcess.StandardError.ReadToEnd();
            compileProcess.WaitForExit();
            Console.WriteLine("Output:");
            Console.WriteLine(compileOutput);
            Console.WriteLine("Error:");
            Console.WriteLine(compileError);

            Process deployProcess = new Process();
            deployProcess.StartInfo.FileName = @"C:\Program Files\nodejs\npx.cmd";
            deployProcess.StartInfo.Arguments = "hardhat run --network fantom scripts/deploy.cjs";
            deployProcess.StartInfo.RedirectStandardOutput = true;
            deployProcess.StartInfo.RedirectStandardError = true;
            deployProcess.Start();
            string deployOutput = deployProcess.StandardOutput.ReadToEnd();
            string deployError = deployProcess.StandardError.ReadToEnd();
            deployProcess.WaitForExit();
            Console.WriteLine("Output:");
            Console.WriteLine(deployOutput);
            Console.WriteLine("Error:");
            Console.WriteLine(deployError);
            response[0] = compileOutput;
            response[1] = compileError;
            response[2] = deployOutput;
            response[3] = deployError;

            return response;

        }
    }

}


        


