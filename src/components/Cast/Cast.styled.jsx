import styled from 'styled-components';

export const MovieContainerCast = styled.div`
  padding: 10px 50px;
  margin-bottom: 20px;
`;

export const StyledHeading = styled.h2`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
`;

export const StyledList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  height: 150px;
  padding-left: 0;
`;

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: #f5f5f5;
  border-radius: 5px;
  text-align: left;
  /* width: 150px; */
  height: 100%;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 200px;
  /* height: 100%; */
  object-fit: cover;
  border-radius: 10%;
  margin-bottom: 0.5rem;
`;

export const StyledTextActor = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
`;

export const StyledName = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

export const StyledRole = styled.span`
  color: #666;
`;
