import styled from "styled-components";
import { Form } from "../tradeshift-react";

export const InlineForm = styled(Form)`
  display: flex;
  &.ts-form fieldset.ts-fieldset {
    padding-top: 0;
  }
  fieldset {
    flex: 1;
  }
`;
