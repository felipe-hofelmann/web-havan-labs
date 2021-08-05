using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebForms.Model;

namespace WebForms.Repository
{
    public class CervejaRepository
    {
        private static List<Cerveja> listaCerveja = new List<Cerveja>();
        static int id = 1;
        public void Salvar(Cerveja model) 
        {
            listaCerveja.Add(model);
            id++;
        }

        public void Editar(Cerveja model)
        {
            Cerveja cervaAnterior = listaCerveja.Find(c=> c.Id == model.Id);
            if (cervaAnterior != null) 
            {
                cervaAnterior = model;
            }
        }

        public List<Cerveja> Listar()
        {
            return listaCerveja;
        }
        public void Deletar(int id)
        {
            Cerveja deletarCerva = listaCerveja.Find(c=> c.Id == id);
            if (deletarCerva != null)
            {
                listaCerveja.Remove(deletarCerva);
            }
        }

        public int BuscaID() 
        {
            return id;
        }
    }
}