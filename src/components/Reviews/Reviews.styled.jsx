import styled from 'styled-components';

export const MovieContainerReview = styled.div`
  padding: 10px 50px;
  margin-bottom: 20px;
`;

export const StyledHeadingReview = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

export const StyledListReview = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  height: 150px;
  padding-left: 0;
`;

export const StyledListItemReview = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  padding: 0.5rem;
  background-color: #f5f5f5;
  border-radius: 5px;
  text-align: left;
  /* width: 150px; */
  height: 100%;
`;

export const StyledNameReview = styled.p`
  font-weight: bold;
  margin-right: 10px;
`;
