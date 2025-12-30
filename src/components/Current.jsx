import React, { useState } from "react";
import curret from "../assets/Current.module.css";



const Current = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [cards, setCards] = useState([
    { id: 1, title: "electricity", amount: 5000 },
    { id: 2, title: "grocery", amount: 8000 },
  
  ]);
 const handledelete = (id) => {
    const filteredCards = cards.filter((card) => card.id !== id);
    setCards(filteredCards);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) return;

    setCards([
      ...cards,
      {
        id: Date.now(),
        title,
        amount: Number(amount),
      },
    ]);

    setTitle("");
    setAmount("");
  };

  return (
    <div className="container col-6 pt-4">
      <div className={curret.container}>
        <h3 className={curret.title}>Current Budget in each category</h3>
        <input
          type="text"
          placeholder="Search"
          className={curret.searchInput}
        />
      </div>

      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className={curret.cardcontainer}>
          {cards.map((item) => (
            <div key={item.id} className={curret .card}>
              <h4 className={curret.cardtitle}>{item.title}</h4>
              <span className={curret.amount}>₹{item.amount}</span>
              <span className={curret.smallspan}>Spent this month</span>
              <button onClick={() => handledelete(item.id)} type="button">Delete</button>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className={curret.formcontainer}>
        
        <button className="btn addbtn mb-2" type="submit">
          Add New Class
        </button>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </form>
        </div>
    
      

  );
};

export default Current;
