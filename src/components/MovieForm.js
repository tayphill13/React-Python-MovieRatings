import React, { useState } from 'react';
import { Form, Input, Rating } from 'semantic-ui-react'

export const MovieForm = () => {
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
          value={rating} 
          maxRating={5} 
          onRate={(_, data) => {
            setRating(data.rating);
        }}
      />
      </Form.Field>
    </Form>
  )
}