using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using WebForms.Repository;

namespace WebForms
{
    public partial class Listagem : System.Web.UI.Page
    {
        private CervejaRepository repository;
        protected void Page_Load(object sender, EventArgs e)
        {
            this.repository = new CervejaRepository();
            this.gdvCerveja.DataSource = repository.Listar();
            this.gdvCerveja.DataBind();
        }
    }
}