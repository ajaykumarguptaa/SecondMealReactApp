import React, { useState } from "react";
import Data from "./Data";


const Nav = () => {

  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"2.5rem",}}>
      <div>
        <h1 style={{paddingLeft:"1.5rem"}}>Meal</h1>
      </div>
      <div >
      <div style={{ width:"100%",display:"flex",justifyContent:"space-around",padding:"2px",flexWrap:"wrap",rowGap:"1rem"}}>
        <button type="button" className="btn btn-primary" onClick={()=>Data.setarea("indian")}>
          Indian
        </button>
        <button type="button" className="btn btn-secondary" onClick={()=>setarea("Ameriacan")}>
        American
        </button>
        <button type="button" className="btn btn-success" onClick={()=>setarea("Thai")}>
          Thai
        </button>
        <button type="button" className="btn btn-danger" onClick={()=>setarea("British")}>
         British
        </button>
        <button type="button" className="btn btn-warning" onClick={()=>setarea("Rissian")}>
          Rissian
        </button>
        <button type="button" className="btn btn-info" onClick={()=>setarea("Japanese")}>
        Japanese
        </button>
        <button type="button" className="btn btn-light" onClick={()=>setarea("Canadian")}>
        Canadian
        </button>
      </div>
      </div>
    </div>
  );
};

export default Nav;
