/* eslint-disable react/jsx-key */
import { useState } from "react";

const App = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const AddToList = () => {
    list.push(item);
    setList([...list]);
  };

  const RemoveFromList = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  return (
    <>
      <div>
        <table>
          <tbody>
            {list.length == 0 ? (
              <tr>
                <td>No Data Found</td>
              </tr>
            ) : (
              list.map((element, index) => {
                return (
                  <tr>
                    <td id={index} key={index}>
                      {element}
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          RemoveFromList(index);
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>

        <input type="text" onChange={(e) => setItem(e.target.value)}></input>
        <button onClick={AddToList}>Add</button>
      </div>
    </>
  );
};

export default App;

// import ContactForm from "./component/ContactForm";
// import Footer from "./component/Footer";
// import Header from "./component/Header";
// import Hero from "./component/Hero";

// const App = () => {
//   return (
//     <div>
//       <Header/>
//       <Hero/>

//       <ContactForm/>
//       <Footer/>
//     </div>
//   );
// };

// export default App;
