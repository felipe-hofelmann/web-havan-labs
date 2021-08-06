using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebAppMVC.Models;
using WebAppMVC.Models.Repository;

namespace WebAppMVC.Controllers
{
    public class CrudController : BaseController<Bicicleta,BicicletaRepository>
    {
        public CrudController():base(new BicicletaRepository())
        {

        }
    }
}