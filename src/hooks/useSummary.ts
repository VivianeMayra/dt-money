import { useContext } from "react"
import { TransactionsContext } from "../contexts/TransactionsContext"

//criou seu próprio hook (função) que chama outro hook já do próprio react
export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  )
  return summary
}

//Reduce: Percorre todo o array e reduz ele a alguma estrutura que você definiu, sendo passado dois parâmetros: resumo atual e o valor que deseja trabalhar
