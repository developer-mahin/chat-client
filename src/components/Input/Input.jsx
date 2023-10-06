import { TextField } from "@mui/material";

const Input = ({ type, label, register, errors, name }) => {
  return (
    <div className="mb-5">
      <TextField
        fullWidth
        id="standard-basic"
        type={type}
        label={label}
        variant="outlined"
        sx={{
          input: {
            color: "var(--text-color)",
          },
          label: { color: "var(--text-color)" },
        }}
        {...register(`${name}`, {
          required: true,
        })}
      />
    </div>
  );
};

export default Input;
