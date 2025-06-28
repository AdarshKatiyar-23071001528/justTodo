import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../Redux/Slice";

const Category = ({ size }) => {
  let dispatch = useDispatch();
  const oldTopic = useSelector((state) => state.data.topicName);

  // handle reuse with different size
  let paddingClass = "";
  let sizeClass = "";
  // switch (size) {
  //   case "medium":
  //     paddingClass = "7px";
  //     sizeClass = "30px";
  //     break;

  //   default:
  //     paddingClass = "10px";
  //     sizeClass = "40px";
  // }

  if (size === "medium" || window.innerWidth < 400) {
    if (window.innerWidth < 400) {
      paddingClass = "4px";
      sizeClass = "20px";
    } else {
      paddingClass = "7px";
      sizeClass = "30px";
    }
  } else {
    paddingClass = "10px";
    sizeClass = "40px";
  }

  // sorted data title me store ho jayega aaur useMemo isi yaad rakhega
  const title = useMemo(() => {
    return [
      "JavaScript",
      "React",
      "JavaScriptRevision",
      "React Revision",
      "NodeJs",
      "NodeJsRevision",
      "ExpressJs",
      "ExpressJs Revision",
      "Python",
      "Python Revision",
      "Aptitude",
      "Comprehension",
      "Java",
      "Operating System",
      "DBMS",
      "Sql",
      "DSA",
      "Project",
      "Reasoning",
    ].sort();
  }, []);

  // initial dropdown show nhi hoga
  let [isOpen, setIsOpen] = useState(false);
  let [input, setInput] = useState("");
  // filterData me initial pura array hoga
  let [filterData, setFilterData] = useState(title);

  // ye call hone par yadi isOpen ki value false to true to false
  let handleClick = () => {
    setIsOpen(!isOpen);
  };

  // ye call hone par
  let handleTitle = (language) => {
    //Input me wo store hoga jo language me hoga
    if(language){
    setInput(language);}
    else alert ('cant empty');
    //yadi isOpen ki value false to true to false
    setIsOpen(!isOpen);
  };

  //ye call hone par
  let handleChange = (value) => {
    //Input me wo store hoga jo value me hoga
    // setInput(value);

      setInput(value)
  
    //isOpen ki value true
    setIsOpen(true);
  };

  // ye tab call hoga jb input  ki value change hogi
  useEffect(() => {
    // pure array (title) me filter karega phle title ko lowerCase me karega aaur input ko bhi
    // lower case me karega fir check krega input me jo hai wo array me hai jo hoga
    // wo filtered me aa jayega
    const filtered = title.filter((e) =>
      e.toLowerCase().includes(input.toLowerCase())
    );
    // filterData me sirf un value ko store kar dega
    // jo filtered array me hai
    setFilterData(filtered);
    dispatch(setCategory(input));
    console.log(input);
  }, [input]);
  useEffect(() =>{
    
  })

  useEffect(() => {
    setInput(oldTopic);
  }, []);
  return (
    <div className="category" style={{ height: `${sizeClass}` }}>
      <div className="inputContainer">
        <input
          type="text"
          // input me click par call
          onClick={handleClick}
          // input me jo hoga vo input ki value me dal dega
          value={input}
          // input me jitni bar likhoge ya remove karoge handleChange call hoga
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Choose Topic"
        />
      </div>
      {isOpen && (
        <div className="cat">
          {filterData.map((language, index) => (
            <p
              onClick={() => handleTitle(language)}
              key={index}
              style={{ padding: `${paddingClass}` }}
            >
              {language}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
