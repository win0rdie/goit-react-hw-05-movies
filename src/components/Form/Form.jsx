// export default function Form({ value, onChange }) {
//   return (
//     <div>
//       <input
//         type="search"
//         value={value}
//         onChange={e => onChange(e.target.value)}
//       />
//     </div>
//   );
// }

import { StyledForm } from './Form.styled';

export default function Form({ value, onChange }) {
  return (
    <StyledForm>
      <input
        type="search"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </StyledForm>
  );
}
