import InvoicePage from './components/InvoicePage'
import { Invoice } from './data/types'

function App() {
  const savedInvoice = window.localStorage.getItem('invoiceData')
  let data = null

  try {
    if (savedInvoice) {
      data = JSON.parse(savedInvoice)
    }
  } catch (_e) {}

  const onInvoiceUpdated = (invoice: Invoice) => {
    window.localStorage.setItem('invoiceData', JSON.stringify(invoice))
  }

  return (
    <div className="app">
      <h1 className="center fs-45">GET PAID WITHOUT PAYING</h1>
      <p className="center ">
        No sign-ups. No complicated dashboards. Just edit your invoice right here, right now and
        download instantly. It’s free, open-source, and built for freelancers & small agencies who
        want less hassle and more time for their actual work.
      </p>
      <InvoicePage data={data} onChange={onInvoiceUpdated} />
    </div>
  )
}

export default App
