import React from 'react';
export default function form() {
    return (


        <div className='container p-4' style={{ margin: '10% auto', backgroundColor: 'rgba(0,0,0,0.7)', borderRadius:'20px' }}>
            <label htmlFor="basic-url" className="form-label">Enter Your Image URL</label>
            <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                <input type="text" className="form-control p-3 imgurl" id="basic-url" aria-describedby="basic-addon3" />
            </div>

            <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="text" className="form-control p-3 name" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-4">
                <input type="text" className="form-control email_1" placeholder="Useremail" aria-label="Username" />
                <span className="input-group-text">@</span>
                <input type="text" className="form-control p-3 email_2" placeholder="Server" aria-label="Server" />
            </div>

            <div className="input-group mb-4 ">
                <label className="input-group-text p-3" htmlFor="inputGroupSelect01">Country</label>
                <select className="form-select country" id="inputGroupSelect01">
                    <option value="in">India</option>
                    <option value="us">U.S.A</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ch">China</option>
                    <option value="nz">Newzeland</option>
                </select>
            </div>

            <div className="input-group mb-4 ">
                <button className=" btn btn-outline-danger p-3" style={{width: '100%'}} onClick={()=>{


                let image= document.querySelector(".imgurl").value;
                let name= document.querySelector(".name").value;
                let email_1= document.querySelector(".email_1").value;
                let email_2= document.querySelector(".email_2").value;
                let email= email_1+"@"+email_2;
                let country= document.querySelector(".country").value;
                
                let obj={
                image:image,
                name:name,
                email:email,
                country:country
                }
                localStorage.setItem("newsobj",JSON.stringify(obj));
                console.log(obj)
                // alert(obj)                    
                }}>Submit</button>
            </div>
        </div>
    )
}
