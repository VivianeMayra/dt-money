import styled from "styled-components"

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
  width: 100vh;

  @media (min-width: 1028px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 143vh;
  }
`
export const Logo = styled.div`
  display: flex;
  > h1 {
    margin-left: 10px;
  }
`

export const HeaderContent = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1028px) {
    width: 85%;
  }
`
export const NewTransationButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme["green-500"]};
  color: white;
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme["green-700"]};
    transition: 0.5s;
  }
`
