import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 3rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      text-align: left;
      padding: 0.5rem 2rem;
    }
    td {
      background: var(--shape);
      padding: 1rem 2rem;
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }

      &.income {
        color: var(--green);
      }

      &.outcome {
        color: var(--red);
      }
    }
  }
`