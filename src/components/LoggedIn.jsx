import React, { useState, useEffect } from "react"
import facade from "../apiFacade"

const URL = "http://localhost:7070/api"

function LoggedIn() {
    const [dataFromServer, setDataFromServer] = useState("Loading...")
       
    useEffect(() => {
        facade.fetchData("trips/guides/totalprice", setDataFromServer, "GET", true);
    }, [])
 
    return (
      <div>
        <h2>Data Received from server</h2>
        <h3>{dataFromServer}</h3>
      </div>
    )
  }
    export default LoggedIn;
 