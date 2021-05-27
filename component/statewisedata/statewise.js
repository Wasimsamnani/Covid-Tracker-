import {useEffect,useState} from 'react';
function Statewise () {
  const getCovidData= async () =>{
    const res= await fetch("https://api.covid19india.org/data.json");
    const actualdata = await res.json();
    console.log(actualdata.statewise);
    setdata(actualdata.statewise)

  }
  const [data,setdata] = useState([]);
  const [search,setsearch] = useState([])
  const changehendeler = (e) => {
    e.preventDefault();
    let value = e.target.value;
    let search = data.filter((data) => {
    return  data.state.toLowerCase().includes(value.toLowerCase(),0);
    });
    setsearch(search);
    console.log(search,value.toLowerCase());
  }
  useEffect(() => {
    getCovidData();
  },[])
  return(
    <>
    <h1> this is state wise data</h1>
  <div>  <lable htmlFor="search"><h2>SEARCH BY STATE</h2> </lable>
     <input type="text" name="search" onChange={changehendeler} /></div>
      <div style={{display:"grid"}}>
        <table border="1" cellpadding="0" cellspacing="0">
        <thead>
        <tr>
        <th>STATE</th>
        <th>CONFIRMED</th>
        <th>RECOVERED</th>
        <th>DEATHS</th>
        <th>ACTIVE</th>
        <th>UPDATED</th>
        <th>STATE CODE</th>
        </tr>
        </thead>
        <tbody     style={{textAlignLast: "center"}}>
        {search.length === 0 ?
          data.map((data,ind) =>{
            return(
              <tr key={ind}>
              <td>{data.state}</td>
              <td>{data.confirmed}</td>
              <td>{data.recovered}</td>
              <td>{data.deaths}</td>
              <td>{data.active}</td>
              <td>{data.lastupdatedtime}</td>
              <td> {data.statecode}</td>
              </tr>
            )
          }):search.map((data,ind) =>{
            return(
              <tr key={ind}>
              <td>{data.state}</td>
              <td>{data.confirmed}</td>
              <td>{data.recovered}</td>
              <td>{data.deaths}</td>
              <td>{data.active}</td>
              <td>{data.lastupdatedtime}</td>
              <td> {data.statecode}</td>
              </tr>
            )
          })
        }
        </tbody>
        </table>

      </div>

    </>
  )
}
export default Statewise;
