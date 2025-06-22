import toast from 'react-hot-toast';


export const getBooks = ()=> {
    let books =[]
    const storedBooks = localStorage.getItem("books")
    if(storedBooks){
        books = JSON.parse(storedBooks)
    }
    return books;
}


// save Books

export const saveBooks = (book) =>{
    const books = getBooks();
    const isExist = books.find((b)=> b.id === book.id)

    if(isExist){
        toast.error("Already Read Books")
    }
    books.push(book)

    localStorage.setItem("books", JSON.stringify(books))
    toast.success("Read Books Successfully!")

}