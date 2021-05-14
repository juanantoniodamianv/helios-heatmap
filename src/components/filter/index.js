import { Form } from "react-bootstrap";
import { situations } from "../../constants";

export default function Filter({
  onChangeSituation,
  onChangeDateSince,
  onChangeDateTo,
  accounts,
}) {
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
        <Form.Control type="datetime-local" onChange={onChangeDateSince()} />
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Label>Date-Time To</Form.Label>
        <Form.Control type="datetime-local" onChange={onChangeDateTo()} />
      </Form.Group>
      <Form.Group className="my-5">
        <Form.Label>Situation</Form.Label>
        <Form.Control as="select" onChange={onChangeSituation()}>
          {situations.map((situation) => (
            <option value={situation.value} key={situation.value}>
              {situation.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Top 5 - Events Per Account</Form.Label>
        {accounts &&
          Object.entries(accounts.slice(0, 4)).map((account, index) => (
            <div key={index}>
              <small>{account[1][0]}</small>
              <small className="float-left">{account[1][1]}</small>
            </div>
          ))}
      </Form.Group>
    </Form>
  );
}
