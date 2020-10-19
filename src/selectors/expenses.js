export const getVisibileExpenses =(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !=='number'|| expense.startDate >= startDate;
        const endDateMatch = typeof endDate !=='number' || expense.endDate <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch 
    }).sort((a,b)=>{
      if(sortBy==='date'){
          return a.createdAt < b.createdAt ? 1:-1
      } else if(sortBy==='date'){
          return a.amount < b.amount ? 1: -1
      }
    })
 
}