import { StyledForm } from './SearchBox.styled';

export default function Form({ value, onChange }) {
  return (
    <StyledForm>
      <input
        type="search"
        value={value}
        placeholder="Enter a movie here"
        onChange={e => onChange(e.target.value)}
      />
    </StyledForm>
  );
}
