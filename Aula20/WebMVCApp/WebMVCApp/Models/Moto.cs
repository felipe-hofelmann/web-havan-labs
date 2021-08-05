using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebMVCApp.Models
{
    public class Moto : BaseModels
    {
        public string Nome { get; set; }
        public string Marca { get; set; }
        public int Cilindrada { get; set; }
    }
}