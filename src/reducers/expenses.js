const initialState = {
  expensesItems: [
    { id: "1", amount: 23.5, description: "Bottle of Water" },
    { id: "2", amount: 3.5, description: "Candys" },
    { id: "3", amount: 20.5, description: "Milk" }
  ]
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expensesItems: [...state.expensesItems, action.payload]
      };
    default:
      return state;
  }
};
