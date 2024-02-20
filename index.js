var library = [
    {
        title: 'The Digital Fortress',
        author: 'Dan Brown',
        availability: true,
        holder: ''
    },
    {
        title: 'The Davinci Code',
        author: 'Dan Brown',
        availability: false,
        holder: 'John Smith'
    },
    {
        title: 'Long Eagle',
        author: 'Anonymous',
        availability: true,
        holder: ''
    },
    {
        title: 'Atomic Habits',
        author: 'James Clair',
        availability: false,
        holder: 'Aline'
    },

]

const addBook =(title,author,availability='true')=>{
   const newBook ={
    title: title,
    author: author,
    availability: availability,
    holder:''
   }
   
   library.push(newBook)

   console.log(`the book ${title} has been added succesifully`)
}

addBook('forever','marie',true);


// console.log(library)

