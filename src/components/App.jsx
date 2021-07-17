import '../App.scss';
import Cards from './Cards'
import LeftPane from './LeftPane'
import Header from './Header'
import Table from './Table'

const data = [
  {number: 22441, desc: 'Public repos'},
  {number: 10011, desc: 'Public gists'},
  {number: 635, desc: 'Followers'},
  {number: 11334, desc: 'Following'}
]

const deleteItem = () => {
  data.filter(delet => delet)
}

function App() {
  return (
    <>
      <Header />
      <div style={{display: 'flex', margin: '1rem 1.5rem'}}>
      <LeftPane />
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div className="card-wrapper">
            <Cards dataList={data} />
          </div>
          <Table />
        </div>
      </div>

    </>
  );
}

export default App;
