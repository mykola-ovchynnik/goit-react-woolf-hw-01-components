import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: white;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.2);
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
`;

export const Name = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 22px;
  color: #333;
`;
