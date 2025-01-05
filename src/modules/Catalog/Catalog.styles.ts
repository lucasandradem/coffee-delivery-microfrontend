import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding: 32px 80px;
  gap: 32px;

  h2 {
    font-weight: 800;
    font-size: 32px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #e6e5e5;
  border-radius: 8px;
  padding: 4px;
`;
