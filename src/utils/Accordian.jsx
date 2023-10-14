import React from 'react';
import { Accordion } from 'react-bootstrap';


function MyAccordion() {
  return (
    <Accordion defaultActiveKey="0" className={Accordion}> {/* Set defaultActiveKey to specify the initially open panel */}
      {/* Accordion Panel 1 */}
      <Accordion.Item eventKey="0">
        <Accordion.Header>Panel 1 Title</Accordion.Header>
        <Accordion.Body>
          Content for Panel 1
        </Accordion.Body>
      </Accordion.Item>

      {/* Accordion Panel 2 */}
      <Accordion.Item eventKey="1">
        <Accordion.Header>Panel 2 Title</Accordion.Header>
        <Accordion.Body>
          Content for Panel 2
        </Accordion.Body>
      </Accordion.Item>

      {/* Add more panels as needed */}
    </Accordion>
  );
}

export default MyAccordion;
