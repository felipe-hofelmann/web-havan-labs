using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebMVCApp.Models;
using WebMVCApp.Models.Repository;

namespace WebMVCApp.Controllers
{
    public class HomeController : Controller
    {
        MotoRepository motos = new MotoRepository();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Formulario()
        {
            return View();
        }

        public ActionResult Tabela() 
        {
            return View(motos.Read());
        }

        [HttpPost]
        public ActionResult Create(Moto model)
        {
            motos.Salvar(model);
            return Redirect("/Home/Formulario");
        }

        public ActionResult Deletar(int id) 
        {
            motos.Deletar(id);
            return RedirectToAction("Tabela");
        }

        [HttpGet]
        public ActionResult Editar(int id)
        {
            Moto model = motos.Read(id);
            return View(model);
        }

        [HttpPost]
        public ActionResult Editar(Moto model)
        {
            motos.Editar(model);
            return RedirectToAction("Tabela");
        }
    }
}
