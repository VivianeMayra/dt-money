import styled, { css } from "styled-components"

export const SummaryContainer = styled.section`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 0.5rem;
  gap: 1rem;
  margin-top: -5rem;
  margin-left: 8rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    margin-left: 6rem;
  }

  @media (max-width: 480px) {
    margin-left: 19rem;
  }
`

interface SummaryCardProps {
  variant?: "green"
}
export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme["gray-600"]};
  border-radius: 6px;
  padding: 2rem;

  @media (max-width: 480px) {
    width: 230px;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme["gray-300"]};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === "green" &&
    css`
      background-color: ${props.theme["green-700"]};
    `}
`
