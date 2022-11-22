import React from "react";
import { useState } from "react";
import Form from "../Input";
import Table from "../Table";
function Home() {
  const [inputsValue, setInputValue] = useState({
    firstname: "",
    lastname: "",
    age: "",
    userStatus: "",
  });
  const [isShowResult, setIsShownResult] = useState(true);

  return (
    <>
      {isShowResult ? (
        <Form
          inputsValue={inputsValue}
          setInputsValue={setInputValue}
          setIsShowResult={setIsShownResult}
        />
      ) : (
        <>
          <Table />
        </>
      )}
    </>
  );
}

export default Home;
