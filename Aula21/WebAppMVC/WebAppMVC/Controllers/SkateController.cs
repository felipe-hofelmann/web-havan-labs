using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebAppMVC.Models;
using WebAppMVC.Models.Repository;

namespace WebAppMVC.Controllers
{
    public class SkateController : BaseController<Skate, SkateRepository>
    {
        public SkateController(): base(new SkateRepository())
        {
               
        }
    }
}