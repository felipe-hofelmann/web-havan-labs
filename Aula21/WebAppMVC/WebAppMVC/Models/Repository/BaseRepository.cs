using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAppMVC.Models.Repository
{
    public class BaseRepository<T> where T:BaseModels
    {
        static List<T> list = new List<T>();
        static int id = 1;
        public void Create(T model)
        {
            model.Id = id;
            list.Add(model);
            id++;
        }

        public T Read(int id)
        {
            T model = list.Find(b => b.Id == id);
            return model;
        }

        public List<T> Read()
        {
            return list;
        }
        public void Update(T model)
        {
            int index = list.FindIndex(b => b.Id == model.Id);
            list[index] = model;
        }
        public void Delete(int id)
        {
            list.Remove(Read(id));
        }
    }
}