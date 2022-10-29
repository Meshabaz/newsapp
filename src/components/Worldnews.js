import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Worldnews() {
    // document.querySelector(".search").addEventListener("Input",()=>{
    //     let search=document.querySelector(".search").value;
    //     alert("search") 
    // })

    const obj = JSON.parse(localStorage.getItem("newsobj"));

    useEffect(() => {
        getdatabycountry();
    })
    let x = ''
    let key = ''

    if (x.length > 0) {
        key = x;
    } else {
        key = obj.country;
    }
    console.log(obj)
    const getdatabycountry = async () => {
        console.log("key:", key, "x:" + x, "x_len:", x.length)
        let url = `https://masai-api.herokuapp.com/news/top-headlines?country=${key}`;
        let res = await fetch(url);
        let data = await res.json();
        showToUi(data.articles);
    }

    const showToUi = (data) => {
        // console.log("data",data);
        let container = document.querySelector(".cc")
        let card = '';
        data.map((e) => {
            // console.log(e)
            return card += `
        <div className="card">
          <div className="image">
            <img src=${e.urlToImage}  className="img-fluid rounded-start" alt="..."/>
          </div>
            <div className="card_body">
              <h5 className="card_title">${e.author}</h5>
              <p className="card_text">${e.title}</p>
              <p className="card_text"><small className="text-muted">${e.description}</small></p>
            </div>
        </div>
      `
        })
        container.innerHTML = card;
    }


    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-light fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">News_Forecast</Link>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 search" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    <div className="d-flex" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/worldnews" 
                                onClick={alert("nope")}>India</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/worldnews">U.S.A</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/worldnews">U.K</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/worldnews">China</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/worldnews">Newzeland</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

            <div className=' main_c'>
                <div className='sidebar'>
                    <div className='imgdiv'>
                        <img src={obj.image} alt="" />
                    </div>
                    <div>
                        <h2>{obj.name}</h2>
                        <h5>{obj.email}</h5>
                    </div>
                </div>
                <div className='container cc my-5'>
                </div>

            </div>
        </div>
    )
}
