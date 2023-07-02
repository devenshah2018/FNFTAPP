namespace FNFTAPP.Models
{
    public class SmartContract
    {
        public string Bytecode { get; set; }
        public string ABI { get; set; }
        public string ContractName { get; set;}
        public object[] ConstructorParams { get; set; }


        public SmartContract()
        {
            Bytecode = string.Empty;
            ABI = string.Empty;
            ContractName = string.Empty;
            ConstructorParams = new object[0];
        }

    }
}
