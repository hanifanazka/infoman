import { Formik, Form as FRMKForm, Field } from "formik";
import { Button } from "./Button";
import { Input } from "./Input";
import { Table } from "./Table";
import { Default } from "./Table.stories";
import { Select } from "./Select";

export function Form() {
  return (
    <>
      <Formik
        initialValues={{
          contains: "",
          clientIP: "",
          endpoint: "",
          upstream: "",
          httpStatus: "",
          username: "",
        }}
        onSubmit={console.dir}
      >
        <FRMKForm>
          <div className="fieldset">
            <label htmlFor="contains">Parameter Contains</label>
            <Field id="contains" name="contains" as={Input} fullWidth />
          </div>

          <div className="fieldset">
            <label htmlFor="clientIP">Client IP</label>
            <Field id="clientIP" name="clientIP" as={Input} fullWidth />
          </div>

          <div className="fieldset">
            <label htmlFor="endpoint">Endpoint</label>
            <Field id="endpoint" name="endpoint" as={Select} fullWidth>
              <option>Hi</option>
            </Field>
          </div>

          <div className="fieldset">
            <label htmlFor="upstream">Upstream</label>
            <Field id="upstream" name="upstream" as={Select} fullWidth>
              <option>Hi</option>
            </Field>
          </div>

          <div className="fieldset">
            <label htmlFor="httpStatus">HTTP Status</label>
            <Field id="httpStatus" name="httpStatus" as={Input} type="number" fullWidth />
          </div>

          <div className="fieldset">
            <label htmlFor="username">Username</label>
            <Field id="username" name="username" as={Select} fullWidth>
              <option>Hi</option>
            </Field>
          </div>

          <div className="fieldset" style={{ gridColumn: "3 / span 2" }}>
            Time Range
            <div style={{ display: "grid", gap: 22, gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>from <Input fullWidth /></div>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>to <Input fullWidth /></div>
            </div>
          </div>
        </FRMKForm>
      </Formik>


      <Table
        columns={Default.args.columns}
        data={Default.args.data}
      />

      <style jsx>{`
        .fieldset {
          display: flex;
          flex-direction: column;
        }
        :global(form) {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 22px;
        }
      `}</style>
    </>
  )
}
