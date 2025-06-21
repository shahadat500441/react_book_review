import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesRead from "../pages/PagesRead";
import ErrorPage from "../components/ErrorPage";
import BookDetails from "../pages/BookDetails";
import ReadBooks from "../components/ReadBooks";
import WishedList from "../components/WishedList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch("/booksData.json")
      },
      {
        path:"/book/:bookId",
        element:<BookDetails></BookDetails>,
        loader:()=> fetch(`/booksData.json`)
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader:()=> fetch(`/booksData.json`),
        children:[
          {
            index: true,
            element:<ReadBooks></ReadBooks>,
            loader:()=> fetch(`/booksData.json`)
          },
          {
            path:"wishList",
            element:<WishedList></WishedList>,
            loader:()=> fetch(`/booksData.json`)
          }
        ]
      },
      {
        path: "/pagesRead",
        element: <PagesRead></PagesRead>,
      },
    ],
  },
]);
