import Header from "./Components/Header/Header"
import Filter from "./Components/Filter/Filter"
import List from "./Components/List/List"
import { useEffect, useState } from "react";


function App() {

  const [filter, setFilter] = useState();
  const [pagination, setPagination] = useState({page: 1, limit: 5})
  const [prods, setProds] = useState()

  let prodApi = `http://localhost:3000/products?_expand=category&_page=${pagination.page}&_limit=${pagination.limit}`

  useEffect(() => {
    fetch(prodApi)
      .then(response => response.json())
      .then(data => setProds(data))
  }, [])

  return (
    <>
      <Header />
      <div className="container-xl">
        <div className="row">
          <Filter />
          <List prods={prods}/>
        </div>
      </div>
    </>
  )
}

export default App
