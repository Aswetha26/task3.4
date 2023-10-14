import './App.css';
// Example of a data array that
// you might receive from an API
const data = [
	{ Sno: "1", pic:"🤵🏻", name: 'Terry', value:"Medhurst", gender:"male", email:"atunyO@sohu.com", username:"atunyO", domain:"slashdot.org", IP:"117.29.86.254", University:"Capitol University"},
	{ Sno:"2", pic:"🧑🏻‍⚖️ ", name:"Sheldon", value:"Quigley", gender:"male", email:"hbingley1@plala.or.jp", username:"hbingley1", domain:"51.la", IP:"253.240.20.181", University:"Stavropol State Technical University"},
  { Sno:"3", pic:"👨🏻‍🔬", name:"Terrill", value:"Hills", gender:"male", email:"rshawe2@51.la", username:"rshawe2", domain:"earthlink.net", IP:"205.226.160.3", University:"University of Cagayan Valley"},
  { Sno:"4", pic:"👨🏻‍🔧", name:"Miles", value:"Cummerata", gender:"male", email:"yraigatt3@nature.com", username:"yraigatt", domain:"homestead", IP:"243.20.78.113", University:"Shenyang Pharmaceutical University"}
  
  
	
]
function App() {
  
	return (
    
		<div className="App">
    
			<table>
      
				<tr>
					<th>Sno</th>
					<th>Profile Pic</th>
					<th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>E-mail</th>
          <th>Username</th>
          <th>Domain</th>
          <th>IP</th>
         <th> University</th>
				</tr>
				{data.map((val, key) => {
					return (
						<tr key={key}>
							<td>{val.Sno}</td>
							<td>{val.pic}</td>
							<td>{val.name}</td>
              <td>{val.value}</td>
              <td>{val.gender}</td>
              <td>{val.email}</td>
              <td>{val.username}</td>
              <td>{val.domain}</td>
              <td>{val.IP}</td>
              <td>{val.University}</td>
						</tr>
					)
				})}
			</table>
		</div>
	);
}

export default App;


