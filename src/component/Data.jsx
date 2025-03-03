import React, { useEffect, useState } from "react";
import Nav from "./Nav";

const Data = () => {
  const [mealData, SetMealData] = useState([]);
  const [area, setarea] = useState("indian");
  const [inputData, setinput] = useState("");

  useEffect(() => {
    const fatchDtata = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const apidata = await api.json();
      console.log(apidata);
      SetMealData(apidata.meals);
    };
    fatchDtata();
  }, [area]); // dependency pass whwn change area then page load
  // submitHandler in  their api request use
  const handleSubmit = async (e) => {
    e.preventDefault();
    const apitext = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`
    );
    const textData = await apitext.json();
    console.log(textData.meals);
    SetMealData(textData.meals);
    setinput(""); //not working....
  }; // call this submit handler in the form

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "2.5rem",
          flexWrap: "wrap",
          flexDirection: "row  ",
          gap: "1rem",
        }}
      >
        <div>
          <h1 style={{ paddingLeft: "1.5rem" }}>Meal</h1>
        </div>
        {/* input tag */}

        {/* input tag */}
        <div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              padding: "2px",
              flexWrap: "wrap",
              rowGap: "1rem",
            }}
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setarea("indian")}
            >
              Indian
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setarea("american")}
            >
              American
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => setarea("Thai")}
            >
              Thai
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => setarea("british")}
            >
              British
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => setarea("russian")}
            >
              Russian
            </button>
            <button
              type="button"
              className="btn btn-info"
              onClick={() => setarea("japanese")}
            >
              Japanese
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={() => setarea("Canadian")}
            >
              Canadian
            </button>
          </div>
        </div>
        <form className="search" onSubmit={handleSubmit}>
          <input
            type="text"
            className="mx-auto text"
            style={{
              padding: ".5em",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "whitesmoke",
              color: "black",
            }}
            placeholder="search meal"
            onChange={(e) => setinput(e.target.value)}
          />
        </form>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          margin: "3rem",
        }}
      >
        {mealData.map((item) => (
          <div
            key={item.idMeal}
            style={{ fontSize: "100px", textAlign: "center", margin: "1rem" }}
          >
            <img
              src={item.strMealThumb}
              alt="Some Error Found"
              srcset=""
              style={{
                width: "320px",
                borderRadius: "1rem",
                border: "0.1rem solid grey",
              }}
            />
            <h3 style={{ fontSize: "1.3rem", paddingTop: ".5rem" }}>
              Name: {item.strMeal}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Data;
