using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MvcMovie.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }

        //For displaying the name instead of the var name "ReleaseDate"
        [Display(Name = "Release Date")]
        [DataType(DataType.Date)]
        public DateTime ReleaseDate { get; set; }
        public string Genre { get; set; }

        //to map currency to price in database?
        [Column(TypeName = "decimal(18, 2)")]
        public decimal Price { get; set; }
    }
}