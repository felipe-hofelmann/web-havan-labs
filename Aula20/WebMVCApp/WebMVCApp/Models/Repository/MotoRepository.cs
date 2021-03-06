using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebMVCApp.Models.Repository
{
    public class MotoRepository
    {
        private static List<Moto> listaMotos = new List<Moto>();
        static int id = 1;
        public void Salvar(Moto model) 
        {
            model.Id = id;
            listaMotos.Add(model);
            id++;
        }
        public List<Moto> Read() 
        {
            return listaMotos;
        }

        public Moto Read(int id) 
        {
            return listaMotos.Find(m=>m.Id == id);
        }
        public void Deletar(int id) 
        {
            listaMotos.Remove(Read(id));
        }

        public void Editar(Moto model)
        {
            int index = listaMotos.FindIndex(m => m.Id == model.Id);
            listaMotos[index] = model;
        }
    }
}