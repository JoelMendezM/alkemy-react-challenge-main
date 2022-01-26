import styled from 'styled-components'

const DishesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
  justify-content: center;
`

const CardDish = styled.div`
  margin: 0.5rem;
`

const SearchFormContainer = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`

export {DishesContainer, CardDish, SearchFormContainer}