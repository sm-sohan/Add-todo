import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';

const inputPage = () => {
  return (
    <div>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    <Form.Select aria-label="Default select example">
    <option> select this Role</option>
    <option value="1">admin</option>
    <option value="2">user</option>
    <option value="3">Three</option>
  </Form.Select>

  <InputGroup>
        <InputGroup.Text>With textarea</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
  </div>
  )
}

export default inputPage