import React, { useState } from 'react';
import { Button, Form, Input, Rating } from 'semantic-ui-react'

export const MovieForm = ({ onNewMovie }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(1);

  return (
    <Form>
      <h1>Add Movie Ratings!</h1><br /><br />
      <Form.Field>
        <Input 
          placeholder="movie title" 
          value={title}
          onChange={e => setTitle(e.target.value)} 
          size='massive'
        />
      </Form.Field>
      <Form.Field>
        <Rating 
          icon='star' 
          size='massive'
          rating={rating} 
          maxRating={5} 
          onRate={(_, data) => {
            setRating(data.rating);
        }}
      />
      </Form.Field>
      <Form.Field>
        <Button size='huge' onClick={async () => {
          const movie = { title, rating};
          const response = await fetch('/add_movie', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
          })

          if (response.ok) {
            console.log("response worked!");
            onNewMovie(movie)
            setTitle('');
            setRating(1);
          }
        }}>Submit</Button>
      </Form.Field>
    </Form>
  )
}