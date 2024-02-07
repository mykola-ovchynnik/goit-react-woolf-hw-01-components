import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  border: 1px solid black;
  width: 600px;
  margin: 60px auto;
  padding: 10px;
  border-collapse: collapse;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  & th,
  & td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid black;
  }

  & th {
    background-color: #0ddaf5;
    color: white;
    font-weight: bold;
    border: 1px solid black;
  }

  & tr:nth-child(even) {
    background-color: #e4e4e4;
  }

  & td {
    border: 1px solid black;
  }
`;
