import InvoicePage from './components/InvoicePage'
import MyInvoicePage from './components/MyInvoicePage'
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
    <div className="app bg-black">
      <h1 className="center white">GET PAID WITHOUT PAYING</h1>
      <p
        className="center white"
        style={{
          paddingLeft: '10vw',
          paddingRight: '10vw',
          fontSize: '16px',
        }}
      >
        No sign-ups. No complicated dashboards. Just edit your invoice right here, right now and
        download instantly. It’s free, open-source, and built for freelancers & small agencies who
        want less hassle and more time for their actual work.
      </p>
      <div className="edit-button-container">
        <button className="edit-button">edit template</button>
      </div>
      {/* <InvoicePage data={data} onChange={onInvoiceUpdated} /> */}
      <MyInvoicePage data={data} onChange={onInvoiceUpdated} />
    </div>
  )
}

export default App
