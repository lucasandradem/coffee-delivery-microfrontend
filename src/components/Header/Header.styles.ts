import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 160px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  button {
    border: none;
    background-color: transparent;
  }
`;

export const Location = styled.div`
  background-color: #ebe5f9;
  color: #4b2995;
  padding: 8px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Cart = styled.button`
  background-color: #f1e9c9 !important;
  color: #c47f17;
  border: none;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  position: relative;

  p {
    padding: 2px 6px;
    background-color: #4b2995;
    color: #fff;
    border-radius: 99px;
    position: absolute;
    top: -6px;
    right: -8px;
    font-weight: 700;
  }
`;
