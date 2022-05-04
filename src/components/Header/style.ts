import styled from "styled-components";

const HeaderContainer = styled.header`
  display: grid;
  background-color: #e7eaef;
  grid-template-columns: repeat(3, 1fr);
  width: calc(100% - 16px);
  height: 5rem;
  padding: 16px;
  align-items: center;

  .icons-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &:last-child {
      padding-right: 10px;
    }
  }
`;

export { HeaderContainer };
