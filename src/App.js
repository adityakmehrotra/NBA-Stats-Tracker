import React, {useState} from 'react'
import axios from 'axios'
import jsonData from "./idDict.json"
import Select from 'react-select';


function App() {

  const [data, setData] = useState({})
  const [player, setPlayer] = useState('')

  const link = `https://www.balldontlie.io/api/v1/stats?search=${player}`;


  const searchPlayer = (event) => {
    if (event.key === 'Enter') {
      axios.get(link).then((response) => {
        setData(response.data.data[0])
        console.log(response.data.data[0])
        console.log(link)
      })
      setPlayer('')
    }
  }


  return (
    <div className="app">
      <div className="heading">
        <h1>NBA Stats Tracker</h1>
      </div>
      <div className="search">
        <input
        value = {player}
        onChange = {event => setPlayer(event.target.value)}
        onKeyPress = {searchPlayer}
        placeholder = "Enter Player Name"
        type="text"/>
      </div>
      <div className="container">
        <div className="top">
          <div className="player">
            {data.player ? <p>{data.player.first_name} {data.player.last_name}</p> : null}
          </div>
          <div className="team">
            {data.team ? <p>{data.team.full_name} - {data.team.conference} Division</p> : null}
          </div>
          <div className="stats">
            <table>
              <thead>
                <tr>
                  <th className="col">Season</th>
                  <th className="col">Points</th>
                  <th className="col">Assists</th>
                  <th className="col">Rebounds</th>
                  <th className="col">Steals</th>
                  <th className="col">Blocks</th>
                  <th className="col">3 Pointer Attempts</th>
                  <th className="col">3 Pointers Made</th>
                  <th className="col">3 Pointer Percent(%)</th>
                  <th className="col">Field Goal Attempts</th>
                  <th className="col">Field Goals Made</th>
                  <th className="col">Field Goals Percent (%)</th>
                  <th className="col">Free Throw Attempts</th>
                  <th className="col">Free Throws Made</th>
                  <th className="col">Free Throw Percent (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {data.game ? <td className="colData">{data.game.season}</td> : "N/A"}
                  {data.pts ? <td className="colData">{data.pts}</td> : "N/A"}
                  {data.ast ? <td className="colData">{data.ast}</td> : "N/A"}
                  {data.reb ? <td className="colData">{data.reb}</td> : "N/A"}
                  {data.stl ? <td className="colData">{data.stl}</td> : "N/A"}
                  {data.blk ? <td className="colData">{data.blk}</td> : "N/A"}
                  {data.fg3a ? <td className="colData">{data.fg3a}</td> : "N/A"}
                  {data.fg3m ? <td className="colData">{data.fg3m}</td> : "N/A"}
                  {data.fg3_pct ? <td className="colData">{data.fg3_pct * 100}%</td> : "N/A"}
                  {data.fga ? <td className="colData">{data.fga}</td> : "N/A"}
                  {data.fgm ? <td className="colData">{data.fgm}</td> : "N/A"}
                  {data.fg_pct ? <td className="colData">{data.fg_pct * 100}%</td> : "N/A"}
                  {data.fta ? <td className="colData">{data.fta}</td> : "N/A"}
                  {data.ftm ? <td className="colData">{data.ftm}</td> : "N/A"}
                  {data.ft_pct ? <td className="colData">{data.ft_pct * 100}%</td> : "N/A"}
                </tr>
                <tr>
                  {data.game ? <td className="colData">{data.game.season}</td> : "N/A"}
                  {data.pts ? <td className="colData">{data.pts}</td> : "N/A"}
                  {data.ast ? <td className="colData">{data.ast}</td> : "N/A"}
                  {data.reb ? <td className="colData">{data.reb}</td> : "N/A"}
                  {data.stl ? <td className="colData">{data.stl}</td> : "N/A"}
                  {data.blk ? <td className="colData">{data.blk}</td> : "N/A"}
                  {data.fg3a ? <td className="colData">{data.fg3a}</td> : "N/A"}
                  {data.fg3m ? <td className="colData">{data.fg3m}</td> : "N/A"}
                  {data.fg3_pct ? <td className="colData">{data.fg3_pct * 100}%</td> : "N/A"}
                  {data.fga ? <td className="colData">{data.fga}</td> : "N/A"}
                  {data.fgm ? <td className="colData">{data.fgm}</td> : "N/A"}
                  {data.fg_pct ? <td className="colData">{data.fg_pct * 100}%</td> : "N/A"}
                  {data.fta ? <td className="colData">{data.fta}</td> : "N/A"}
                  {data.ftm ? <td className="colData">{data.ftm}</td> : "N/A"}
                  {data.ft_pct ? <td className="colData">{data.ft_pct * 100}%</td> : "N/A"}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bottom">

        </div>
      </div>
    </div>
  );
}

export default App;
