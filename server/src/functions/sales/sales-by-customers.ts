import { desc, sql, sum } from 'drizzle-orm'
import { view } from '../../db'
import { sales } from '../../db/viewSchema'

export async function salesByCustomer() {
  const report = await view
    .select({
      idCostumer: sales.idCustomer,
      companyName: sales.companyName,
      totalProducts: sum(sales.quantity).as('total_produtos'),
      totalSalesValue: sum(sales.total).as('valor_total_vendas'),
    })
    .from(sales)
    .where(desc(sql`valor_total_vendas`))

  return {
    report,
  }
}
