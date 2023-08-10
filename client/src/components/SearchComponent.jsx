import React, { useState } from 'react';
import { Form, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SearchComponent = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [passengerCount, setPassengerCount] = useState(1);

  const handleSearch = () => {
    const searchParams = {
      fromLocation,
      toLocation,
      selectedDate,
      passengerCount,
    };

    console.log(searchParams);
    // Store the search parameters or make a request with them
  };

  return (
    <div className="search-component">
    <Form>
      <Row>
        <Col>
          <Form.Control type="text" placeholder="Leaving from" value={fromLocation} onChange={(e) => setFromLocation(e.target.value)} />
        </Col>
        <Col>
          <Form.Control type="text" placeholder="Going to" value={toLocation} onChange={(e) => setToLocation(e.target.value)} />
        </Col>
        <Col>
        <Form.Label></Form.Label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Select a date"
            customInput={<Form.Control as="input" />}
          />
        </Col>
        <Col>
          <InputGroup>
            <Button variant="outline-secondary" onClick={() => setPassengerCount(Math.max(passengerCount - 1, 1))}>-</Button>
            <FormControl value={passengerCount} readOnly />
            <Button variant="outline-secondary" onClick={() => setPassengerCount(passengerCount + 1)}>+</Button>
          </InputGroup>
        </Col>
        <Col>
          <Form.Label>&nbsp;</Form.Label>
          <Button variant="primary" onClick={handleSearch}>Search</Button>
        </Col>
      </Row>
    </Form>
    </div>
  );
};

export default SearchComponent;

