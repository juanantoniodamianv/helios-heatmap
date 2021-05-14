import { Form } from "react-bootstrap";

export default function Filter() {
  return (
    <Form>
      <Form.Group className="mb-5">
        <Form.Check label="Real-Time Events" />
        <Form.Text className="text-muted">
          We'll disable date-time inputs.
        </Form.Text>
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Label>Date-Time Since</Form.Label>
        <Form.Control type="datetime-local" />
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Label>Date-Time To</Form.Label>
        <Form.Control type="datetime-local" />
      </Form.Group>
      <Form.Group className="my-5">
        <Form.Label>Situation</Form.Label>
        <Form.Control as="select">
          <option>-</option>
          <option>Tow Breakdown</option>
          <option>Tow Tire</option>
          <option>Tow Collision</option>
          <option>Locksmith</option>
          <option>Flat Tire</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
}
