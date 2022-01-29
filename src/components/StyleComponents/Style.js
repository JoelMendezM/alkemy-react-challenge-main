import styled from 'styled-components'

const DishesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
  justify-content: center;
`

const CardDish = styled.div`
  margin: 0.5rem;
  box-shadow: 0 15px 10px rgb(0 0 0 / 20%);
`

const SearchFormContainer = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 0.1rem gray;
  border-radius: 8px;
  margin: 1rem;
`

const Spinner = styled.div`
  margin: 1rem;
`
const Container = styled.div`
  display:flex;
  align-items: center;
`

const Button = styled.button`
  margin: 0.2rem;
`
const Label = styled.label`
  font-weight: bold;
  margin-right: 0.3rem;
  font-size: 20px;
`


export {DishesContainer, Button, Label, CardDish, SearchFormContainer, MenuContainer, Spinner, Container}