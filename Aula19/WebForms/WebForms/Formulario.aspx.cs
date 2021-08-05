using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using WebForms.Model;
using WebForms.Repository;

namespace WebForms
{
    public partial class Formulario : System.Web.UI.Page
    {
        private CervejaRepository repository;
        protected void Page_Load(object sender, EventArgs e)
        {
            this.repository = new CervejaRepository();
            MudaID();
        }

        protected void btnSalvar_Click(object sender, EventArgs e)
        {
            Cerveja cerveja = new Cerveja();
            cerveja.Id = Convert.ToInt32(lbId.Text);
            cerveja.Nome = txbNome.Text;
            cerveja.Valor = Convert.ToDecimal(txbValor.Text);
            repository.Salvar(cerveja);
            limparCampos();
            MudaID();
        }

        private void limparCampos() 
        {
            this.txbNome.Text = String.Empty;
            this.txbValor.Text = String.Empty;
        }

        private void MudaID() 
        {
            this.lbId.Text = Convert.ToString(repository.BuscaID());
        }
    }
}