
import '../App.scss';
import Cards from './Cards'
import LeftPane from './LeftPane'
import Header from './Header'
import Table from './Table'
import Breadcrumb from './Breadcrumb'
import AddToDo from './AddToDo'
import axios from 'axios'
import { useState, useEffect } from 'react';

const data = [
  {number: 22441, desc: 'Public repos'},
  {number: 10011, desc: 'Public gists'},
  {number: 635, desc: 'Followers'},
  {number: 11334, desc: 'Following'}
]


function App() {

  const [data, setData] = useState()

  useEffect(async () => {
    const result = await axios(`https://api.github.com/users/username`)
    console.log(result)
    // https://api.github.com/users/username/repos?type=all&sort=updated
    setData(result)
  }, [])

  return (
    <>
      <Header />
      <Breadcrumb />

      <div className="container-fluid" style={{
        display: 'flex'
      }}>

        <LeftPane />

        <div className="col-md-9" style={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap'
        }}>
          <div className="card-wrapper">
            <Cards dataList={data} />
          </div>
          <div style={{
            maxWidth: '69.5vw',
            margin: '1rem 0 0 1rem',
            boxShadow: '0 3px 10px 0 #ccc'
          }}>
            <Table />
          </div>

        </div>

      </div>
      <AddToDo />
    </>
  );
}

export default App;
