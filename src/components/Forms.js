import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


function Forms(props) {
  const apiKey = '2fd0bec1259f4edd888f08d9f84d95c3';
  let [newsName, setNews] = useState('');
  // eslint-disable-next-line
  let [btm, setBtm] = useState(true);
  let [btm1, setBtm1] = useState(false);

  function newsHandler(event) {
    setNews(event.target.value.trim());
    setBtm(!event.target.value.trim() > 0);
  }

  function apiHandler(event) {
    event.preventDefault();
    props.loading(true);
    axios.get(`https://newsapi.org/v2/everything?q=${newsName}&from=2022-12-11&sortBy=publishedAt&apiKey=${apiKey}`)
      .then((res) => {
        const articles = res.data.articles;
        console.log(articles);
        props.arrsHandler(articles);
        setBtm1(true);
        props.arrHandler(btm1);
        props.loading(false);
      })
      .catch((err) => {
        console.log(err.message);
        props.errHandler(err.message);
        props.arrHandler(true);
        props.loading(false);

      })
  }


  return (
    <>
      {props.children}
      <Card className=' mx-auto my-5' style={{ maxWidth: '20rem' }}>
        <Card.Body>
          <form onSubmit={apiHandler}>
            <label>Enter News Name You Want :</label>
            <input type="text" id="inputText" className="form-control" onChange={newsHandler} />
            <Button className='mt-3 ' type='submit' variant="dark" disabled={btm}>Search News</Button>
          </form>
        </Card.Body>
      </Card>
    </>
  )
}

export default Forms;
