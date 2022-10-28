import React from 'react';
import { Link } from "react-router-dom";

export default function worldnews() {
    // document.querySelector(".search").addEventListener("Input",()=>{
    //     let search=document.querySelector(".search").value;
    //     alert("search") 
    // })



    async function doFetch(url) {
        alert(url)
        let res = await fetch(url);
        console.log(res);
        let data = await res.json();
        console.log(data)
    }
    // const obj = JSON.parse(localStorage.getItem("newsobj"));
    const searchIt = () => {
        let search = document.querySelector(".search").value;
        let url = `https://masai-api.herokuapp.com/news?q=${search}`;
        doFetch(url);
    }

    // let debounce = debounceFind()

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">News_Forecast</Link>
                    <form className="d-flex" role="search">
                        <input onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                searchIt();
                            }
                        }} className="form-control me-2 search" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    <div className="d-flex" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">India</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">U.S.A</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">U.K</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">China</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Newzeland</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
