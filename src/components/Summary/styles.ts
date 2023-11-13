import styled, { css } from "styled-components"

export const SummaryContainer = styled.section`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  padding: 0 0.5rem;
  gap: 1rem;
  margin-top: -5rem;
  //margin-left: 4rem;

  @media (min-width: 1028px) {
    width: 85%;
    max-width: 1120px;
  }
`

interface SummaryCardProps {
  variant?: "green"
}
export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme["gray-600"]};
  border-radius: 6px;
  padding: 2rem;

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
